
import { Avatar } from "@/components/ui/avatar";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center space-y-4 animate-fade-up">
      <Avatar className="w-24 h-24 border-2 border-primary">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300"
          alt="Sara Padilla"
          className="object-cover"
        />
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Sara Padilla</h1>
        <p className="text-gray-600">Marketing Digital & Estrategia</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
