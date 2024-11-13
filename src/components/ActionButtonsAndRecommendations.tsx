import React from 'react';
import { Link } from 'react-router-dom';
import { GitCompare, Download, CheckCircle, AlertTriangle } from 'lucide-react';

interface ActionButtonsAndRecommendationsProps {
  sessionId: string | undefined;
}

const ActionButtonsAndRecommendations: React.FC<ActionButtonsAndRecommendationsProps> = ({ sessionId }) => {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <Link
          to={`/sessions/compare?sessionId=${sessionId}`}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <GitCompare className="mr-2 h-5 w-5" />
          Compare with Other Sessions
        </Link>
        <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          <Download className="mr-2 h-5 w-5" />
          Export Session Data
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
            <p className="text-gray-600">
              Great job on improving your forehand accuracy! It's up by 5% compared to your last session.
            </p>
          </div>
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
            <p className="text-gray-600">
              Focus on improving your backhand accuracy, which dropped by 10% compared to your previous session.
              We recommend dedicating more time to backhand drills in your next training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButtonsAndRecommendations;