import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Villas from "./pages/Villas";
import Booking from "./pages/Booking";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";

// --- Initialize Query Client ---
const queryClient = new QueryClient();

// --- Protected route wrapper ---
const ProtectedAdminRoute = ({ children }: { children: JSX.Element }) => {
  const isAdmin =
    typeof window !== "undefined" &&
    localStorage.getItem("is_admin") === "true";

  return isAdmin ? children : <Navigate to="/admin-login" replace />;
};

// --- App Component ---
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* --- Public routes --- */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />

          {/* --- Admin routes --- */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />

          {/* --- Catch-all (keep last) --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
