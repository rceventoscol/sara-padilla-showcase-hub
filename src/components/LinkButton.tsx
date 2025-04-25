
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  icon?: React.ReactNode;
}

const LinkButton = ({ href, children, icon, className, ...props }: LinkButtonProps) => {
  return (
    <a href={href} className="w-full block" target="_blank" rel="noopener noreferrer">
      <button
        className={cn(
          "w-full p-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium",
          "transform transition-all hover:scale-[1.02] hover:shadow-lg",
          "flex items-center justify-center gap-2",
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    </a>
  );
};

export default LinkButton;
