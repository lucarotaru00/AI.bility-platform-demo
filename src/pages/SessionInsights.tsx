import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SessionOverview from '../components/SessionOverview';
import KeyPerformanceInsights from '../components/KeyPerformanceInsights';
import ActionButtonsAndRecommendations from '../components/ActionButtonsAndRecommendations';

const SessionInsights: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();

  // Mock session data (replace with actual data fetching logic)
  const sessionData = {
    id: sessionId,
    title: "Training Session – October 10, 2024",
    date: "2024-10-10T14:30:00",
    type: "training",
    duration: "1h 20min",
    totalShots: 250,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          to="/sessions"
          className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Sessions
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">{sessionData.title}</h1>
      </div>
      <SessionOverview session={sessionData} />
      <KeyPerformanceInsights sessionId={sessionId} />
      <ActionButtonsAndRecommendations sessionId={sessionId} />
    </div>
  );
};

export default SessionInsights;