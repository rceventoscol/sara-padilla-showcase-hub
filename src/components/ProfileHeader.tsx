import { Avatar } from "@/components/ui/avatar";
const ProfileHeader = () => {
  return <div className="flex flex-col items-center space-y-4 animate-fade-up">
      <Avatar className="w-24 h-24 border-2 border-primary">
        <img alt="Sara Padilla" className="object-cover" src="/lovable-uploads/60e6d4e8-7408-4130-8a6a-e80863451c17.jpg" />
      </Avatar>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Sara Padilla</h1>
        <p className="text-gray-600">Marketing Digital & Estrategia</p>
      </div>
    </div>;
};
export default ProfileHeader;