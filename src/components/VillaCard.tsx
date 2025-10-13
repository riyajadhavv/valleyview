import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Bed, Bath } from "lucide-react";
import { Link } from "react-router-dom";

interface VillaCardProps {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
}

const VillaCard = ({
  id,
  name,
  location,
  price,
  image,
  guests,
  bedrooms,
  bathrooms,
}: VillaCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-luxury transition-all duration-500 animate-fade-in-up">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-serif font-bold text-white mb-1">
            {name}
          </h3>
          <p className="text-luxury-cream flex items-center">
            <MapPin size={16} className="mr-1" />
            {location}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Users size={16} className="mr-1" />
              {guests}
            </span>
            <span className="flex items-center">
              <Bed size={16} className="mr-1" />
              {bedrooms}
            </span>
            <span className="flex items-center">
              <Bath size={16} className="mr-1" />
              {bathrooms}
            </span>
          </div>
          <p className="text-2xl font-serif font-bold text-primary">{price}</p>
        </div>

        <Button className="w-full rounded-full" asChild>
          <Link to="/booking">Book Villa</Link>
        </Button>
      </div>
    </Card>
  );
};

export default VillaCard;
