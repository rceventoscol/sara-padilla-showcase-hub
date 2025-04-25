import { Avatar } from "@/components/ui/avatar";
const ProfileHeader = () => {
  return <div className="flex flex-col items-center space-y-4 animate-fade-up">
      <Avatar className="w-24 h-24 border-2 border-primary">
        <img alt="Sara Padilla" className="object-cover" src="/lovable-uploads/807612b0-367a-45d2-a41b-7d3bd7d9f219.jpg" />
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Sara Padilla</h1>
        <p className="text-gray-600">Marketing Digital & Estrategia</p>
      </div>
    </div>;
};
export default ProfileHeader;