
import ProfileHeader from "@/components/ProfileHeader";
import Statistics from "@/components/Statistics";
import LinkButton from "@/components/LinkButton";
import SocialLinks from "@/components/SocialLinks";
import CompaniesCarousel from "@/components/CompaniesCarousel";
import { MessageSquare, Calendar, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileHeader />
        
        <div className="space-y-4">
          <LinkButton 
            href="https://calendly.com/sarapadilla" 
            icon={<Calendar size={20} />}
          >
            Agenda una Consultoría
          </LinkButton>
          
          <LinkButton 
            href="https://wa.me/573165875372"
            icon={<MessageSquare size={20} />}
          >
            Contactar por WhatsApp
          </LinkButton>
          
          <LinkButton 
            href="https://instagram.com/sarapadilla"
            icon={<Star size={20} />}
            className="bg-white !from-transparent !to-transparent !text-primary border border-primary hover:bg-primary/5"
          >
            Sígueme en Instagram
          </LinkButton>
        </div>

        <Statistics />
        <CompaniesCarousel />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
