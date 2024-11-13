import React from 'react';
import { ChevronRight, Zap, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { sessions } from '../pages/Sessions';

const RecentSessions: React.FC = () => {
  const recentSessions = sessions.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Sessions</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentSessions.map((session) => (
          <SessionCard key={session.id} session={session} onClick={() => navigate(`/sessions/${session.id}`)} />
        ))}
      </div>
      <Link to="/sessions" className="mt-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center group">
        View All Sessions
        <ChevronRight className="ml-1 h-5 w-5 group-hover:transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
};

interface SessionCardProps {
  session: {
    id: number;
    title: string;
    type: string;
    date: string;
    strokes: number;
    accuracy: number;
  };
  onClick: () => void;
}

const SessionCard: React.FC<SessionCardProps> = ({ session, onClick }) => (
  <div 
    className="bg-white shadow-lg rounded-lg p-6 transition-all duration-200 hover:shadow-xl cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center mb-4">
      {session.type === 'training' ? (
        <Zap className="h-8 w-8 text-blue-500 mr-3" />
      ) : (
        <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
      )}
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{session.title}</h3>
        <p className="text-sm text-gray-600">{session.date}</p>
      </div>
    </div>
    <div className="mb-4">
      <p className="text-gray-700">Strokes: <span className="font-semibold">{session.strokes}</span></p>
      <p className="text-gray-700">Accuracy: <span className="font-semibold">{session.accuracy}%</span></p>
    </div>
    <div className="flex justify-between">
      <span className="text-blue-500 hover:text-blue-700 font-semibold">View Insights</span>
      <span className="text-gray-500">Compare</span>
    </div>
  </div>
);

export default RecentSessions;