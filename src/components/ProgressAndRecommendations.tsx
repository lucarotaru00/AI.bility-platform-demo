import React from 'react';
import { TrendingUp, Target } from 'lucide-react';

const ProgressAndRecommendations: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Track Your Progress</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Performance Overview</h3>
          <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive performance chart coming soon</p>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {['Last 7 days', 'Last 30 days', 'Last 6 months'].map((period) => (
            <button key={period} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors duration-200">
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">AI-Powered Recommendations</h3>
        <div className="space-y-4">
          <Recommendation
            icon={<TrendingUp className="h-6 w-6 text-green-500" />}
            title="Enhance Your Backhand"
            description="Your backhand accuracy dipped 5% recently. We've prepared targeted drills to sharpen this skill."
          />
          <Recommendation
            icon={<Target className="h-6 w-6 text-blue-500" />}
            title="Serve Consistency Boost"
            description="Great progress on serve consistency! Let's focus on maintaining this improvement with advanced techniques."
          />
        </div>
      </div>
    </section>
  );
};

const Recommendation: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
    <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-md">{icon}</div>
    <div className="ml-4">
      <h4 className="text-md font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ProgressAndRecommendations;