import TrainingCard from "../ui/trainings/training-card";

const trainings = [
  {
    title: "Word Translation",
    description: "Practice translating words from one language to another.",
    link: "/training/word-translation",
  },
  {
    title: "Word Constructor",
    description:
      "Improve your vocabulary by constructing words from given letters.",
    link: "/training/word-constructor",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8 text-start">Training</h1>
      <div className="flex flex-wrap gap-6">
        {trainings.map((training, index) => (
          <TrainingCard
            key={index}
            title={training.title}
            description={training.description}
            link={training.link}
          />
        ))}
      </div>
    </div>
  );
}
