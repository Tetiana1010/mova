import React from "react";
import Link from "next/link";

const LearnMore: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">
          Discover How Self Tutor Can Transform Your Learning Experience
        </h1>
        <p className="text-xl mb-4">Take Control of Your Learning Journey</p>
        <p className="text-gray-600 mt-2">
          Self Tutor is designed to help you master new skills and knowledge
          efficiently. Learn more about our features and how they can benefit
          you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Personalized Training</h2>
          <p>
            Self Tutor creates a customized training schedule based on the data
            you input. Whether you&#39;re studying for exams, learning a new
            language, or acquiring new professional skills, our personalized
            approach ensures that your learning is optimized.
          </p>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
          <p>
            Stay motivated and on track with our detailed progress tracking.
            Visualize your achievements and understand what you need to focus on
            next.
          </p>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Quizzes & Tests</h2>
          <p>
            Reinforce your learning with interactive quizzes that provide
            instant feedback. Track your improvement over time.
          </p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Self Tutor makes learning easy and effective by providing a structured
          approach to mastering new information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Input Your Data</h3>
            <p>
              Easily input the topics, articles, and materials you want to
              learn. Our user-friendly interface makes data entry simple and
              intuitive.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Get a Training Schedule
            </h3>
            <p>
              Self Tutor generates a personalized training schedule based on
              your input. You&#39;ll know exactly what to study and when.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Track Your Progress
            </h3>
            <p>
              Monitor your learning journey and stay motivated with progress
              tracking. Visualize your achievements and milestones.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Test Your Knowledge
            </h3>
            <p>
              Take quizzes to reinforce your understanding and track your
              improvement. Get instant feedback and identify areas for
              improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <a
          href="/signup"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LearnMore;
