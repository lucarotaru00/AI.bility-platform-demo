import React from 'react';
import { Play, BarChart2, GitCompare, UserPlus } from 'lucide-react';

const NotificationsAndQuickActions: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg shadow-md mb-4" role="alert">
        <p className="font-bold text-lg">New insights available!</p>
        <p>Fresh insights from your latest session are ready. Tap to review and elevate your game.</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <QuickActionButton icon={<Play />} label="Start New Session" />
        <QuickActionButton icon={<BarChart2 />} label="View Insights" />
        <QuickActionButton icon={<GitCompare />} label="Compare Sessions" />
        <QuickActionButton icon={<UserPlus />} label="Invite a Coach" />
      </div>
    </section>
  );
};

const QuickActionButton: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105">
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

export default NotificationsAndQuickActions;