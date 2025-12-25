import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

type Booking = {
  id: string;
  user_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: string;
  profiles: { email: string } | null;
};

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"pending" | "approved" | "rejected">("pending");

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*, profiles(email)")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load bookings");
      console.error(error);
      setLoading(false);
      return;
    }

    setBookings(data || []);
    setLoading(false);
  };

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("bookings").update({ status }).eq("id", id);

    if (error) {
      console.error(error);
      toast.error("Failed to update status");
      return;
    }

    toast.success(`Booking ${status}!`);
    sendEmailNotification(id, status);
    fetchBookings();
  };

  // --- EmailJS integration ---
  const sendEmailNotification = async (bookingId: string, status: string) => {
    const booking = bookings.find((b) => b.id === bookingId);
    if (!booking || !booking.profiles?.email) return;

    const templateParams = {
      to_name: booking.profiles.email.split("@")[0],
      to_email: booking.profiles.email,
      status: status.toUpperCase(),
      check_in: booking.check_in,
      check_out: booking.check_out,
      guests: booking.guests,
    };
    console.log("EMAILJS ENV CHECK", {
        service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });
      
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      toast.success(`Email sent to ${booking.profiles.email}`);
    } catch (err) {
      console.error("Email send error:", err);
      toast.error("Failed to send email notification");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filtered = bookings.filter((b) => b.status === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-serif font-bold">Admin Dashboard</h1>
        <Button
          onClick={() => {
            localStorage.removeItem("is_admin");
            window.location.href = "/admin-login";
          }}
          className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-6"
        >
          Logout
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {["pending", "approved", "rejected"].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab as any)}
            className={`capitalize rounded-full ${
              activeTab === tab ? "bg-amber-700 text-white" : "bg-white"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Bookings Grid */}
      {loading ? (
        <p>Loading bookings...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No {activeTab} bookings.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="p-6 border-2 border-amber-400 rounded-xl shadow-sm bg-white"
            >
              <p className="font-semibold mb-1">
                {booking.profiles?.email || "Unknown User"}
              </p>
              <p className="text-gray-600 text-sm">
                {booking.check_in} → {booking.check_out} ({booking.guests} guests)
              </p>
              <p className="text-xl font-bold mt-1">₹{booking.total_price}</p>
              <p className="text-sm mt-1">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    booking.status === "approved"
                      ? "text-green-600"
                      : booking.status === "rejected"
                      ? "text-red-600"
                      : "text-amber-600"
                  }`}
                >
                  {booking.status}
                </span>
              </p>

              {booking.status === "pending" && (
                <div className="flex space-x-3 mt-4">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white flex-1 rounded-full"
                    onClick={() => updateStatus(booking.id, "approved")}
                  >
                    Approve
                  </Button>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white flex-1 rounded-full"
                    onClick={() => updateStatus(booking.id, "rejected")}
                  >
                    Reject
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
