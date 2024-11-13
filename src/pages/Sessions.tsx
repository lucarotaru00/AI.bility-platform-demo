import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Filter, Zap, Trophy } from 'lucide-react';

// Mock data for sessions
export const sessions = [
  { id: 1, title: 'Power Serve Training', type: 'training', date: '2024-10-10', strokes: 150, accuracy: 75 },
  { id: 2, title: 'Match vs. John Doe', type: 'match', date: '2024-10-08', strokes: 200, accuracy: 80 },
  { id: 3, title: 'Volley Practice', type: 'training', date: '2024-10-05', strokes: 100, accuracy: 70 },
  { id: 4, title: 'Backhand Drill', type: 'training', date: '2024-10-03', strokes: 180, accuracy: 72 },
  { id: 5, title: 'Practice Match', type: 'match', date: '2024-10-01', strokes: 250, accuracy: 78 },
];

const Sessions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sessionType, setSessionType] = useState('');

  const filteredSessions = sessions.filter(session =>
    session.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (dateFilter === '' || session.date.includes(dateFilter)) &&
    (sessionType === '' || session.type === sessionType)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search sessions..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex space-x-2 w-full md:w-auto">
          <select
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          >
            <option value="">All Dates</option>
            <option value="2024-10">October 2024</option>
            <option value="2024-09">September 2024</option>
          </select>
          <select
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="training">Training</option>
            <option value="match">Match</option>
          </select>
          <button 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={() => {
              setSearchTerm('');
              setDateFilter('');
              setSessionType('');
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
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
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => (
  <Link to={`/sessions/${session.id}`} className="block">
    <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-200 hover:shadow-xl">
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
  </Link>
);

export default Sessions;