import React, { useState } from 'react';
import { BarChart2, Activity, Move, Target, Zap, Wind, Download, GitCompare, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartInsight: React.FC<{ title: string; description: string; icon: React.ReactNode; recommendation: string; id: string }> = ({ title, description, icon, recommendation, id }) => (
  <div className="border-l-4 border-blue-500 pl-4 mb-6">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center text-blue-600">
      <CheckCircle className="h-5 w-5 mr-2" />
      <p className="font-semibold">{recommendation}</p>
    </div>
    <Link to={`/smart-insights/${id}`} className="mt-2 inline-block text-blue-600 hover:text-blue-800">
      View Detailed Insight
    </Link>
  </div>
);

const GeneralInsight: React.FC<{ title: string; value: string; change: number; icon: React.ReactNode }> = ({ title, value, change, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {icon}
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <div className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingUp className="h-4 w-4 mr-1 transform rotate-180" />}
      <span>{Math.abs(change)}% {change >= 0 ? 'increase' : 'decrease'}</span>
    </div>
  </div>
);

const Insights: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filterInsights = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Insights</h1>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => filterInsights('all')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'smart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => filterInsights('smart')}
          >
            Smart
          </button>
        </div>
      </div>

      {(activeTab === 'all') && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">General Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GeneralInsight
              title="Average Shot Speed"
              value="120 km/h"
              change={5}
              icon={<Wind className="h-6 w-6 text-blue-500" />}
            />
            <GeneralInsight
              title="Accuracy Rate"
              value="78%"
              change={-2}
              icon={<Target className="h-6 w-6 text-green-500" />}
            />
            <GeneralInsight
              title="Court Coverage"
              value="65%"
              change={3}
              icon={<Move className="h-6 w-6 text-purple-500" />}
            />
            <GeneralInsight
              title="Training Intensity"
              value="High"
              change={0}
              icon={<Activity className="h-6 w-6 text-red-500" />}
            />
          </div>
        </section>
      )}

      {(activeTab === 'all' || activeTab === 'smart') && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Insights</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
            <SmartInsight
              id="1"
              title="Reaction Time Impact on Shot Quality"
              description="We've noticed that when your reaction time drops by 23%, your shot accuracy decreases by 19%. Focus on improving your reaction time to enhance shot success."
              icon={<Zap className="h-8 w-8 text-yellow-500" />}
              recommendation="Try our recommended reaction time drills to improve your response speed."
            />
            <SmartInsight
              id="2"
              title="Injury Risk: Incomplete Follow-Through"
              description="In the last 5 sessions, your follow-through has been incomplete on 30% of your forehand shots. This could put stress on your shoulder, leading to potential injury."
              icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
              recommendation="Schedule a session with a coach to work on your follow-through technique."
            />
          </div>
        </section>
      )}

      <div className="mt-8 flex justify-end space-x-4">
        <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          <Download className="mr-2 h-5 w-5" />
          Export Insights
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          <GitCompare className="mr-2 h-5 w-5" />
          Compare with Previous Period
        </button>
      </div>
    </div>
  );
};

export default Insights;