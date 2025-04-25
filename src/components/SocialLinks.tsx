
import { Instagram, Mail } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: Instagram, href: "https://instagram.com/sarapadilla", label: "Instagram" },
    { icon: Mail, href: "mailto:contacto@sarapadilla.com", label: "Email" },
  ];

  return (
    <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="text-gray-600 hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
