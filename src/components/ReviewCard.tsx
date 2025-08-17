import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  rating: number;
  reviewText: string;
}

const ReviewCard = ({ name, title, avatarUrl, rating, reviewText }: ReviewCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 italic mb-6 flex-grow">"{reviewText}"</p>
        <div className="flex items-center mt-auto">
          <img className="h-12 w-12 rounded-full object-cover" src={avatarUrl} alt={name} />
          <div className="ml-4">
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
