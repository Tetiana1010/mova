import Link from "next/link";

interface TrainingCardProps {
  title: string,
  link: string,
  description?: string,
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="py-4">
          <Link href={link} className="bg-blue text-white font-bold py-2 px-4 rounded">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
