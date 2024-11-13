import React from 'react';
import { Calendar, Clock, Activity } from 'lucide-react';

interface SessionOverviewProps {
  session: {
    title: string;
    date: string;
    type: string;
    duration: string;
    totalShots: number;
  };
}

const SessionOverview: React.FC<SessionOverviewProps> = ({ session }) => {
  return (
    <section className="bg-white shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-gray-600">{new Date(session.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-gray-600">{session.duration}</span>
        </div>
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-gray-600">{session.type.charAt(0).toUpperCase() + session.type.slice(1)}</span>
        </div>
        <div className="flex items-center">
          <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <span className="text-gray-600">Total Shots: {session.totalShots}</span>
        </div>
      </div>
    </section>
  );
};

export default SessionOverview;