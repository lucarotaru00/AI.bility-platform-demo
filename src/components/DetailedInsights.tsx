import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info, Download, Share2 } from 'lucide-react';

// Mock data for demonstration purposes
const mockInsightData = {
  title: "Forehand Performance Analysis",
  date: "2024-10-10T14:30:00",
  summary: "Analyzing the consistency and accuracy of your forehand strokes",
  quickStats: {
    accuracy: 78,
    efficiency: 85,
  },
  totalShots: 120,
  averageSpeed: 90,
  winners: 15,
  errors: 10,
};

const DetailedInsights: React.FC = () => {
  const { sessionId, insightCategory } = useParams<{ sessionId: string; insightCategory: string }>();
  const [comparisonSession, setComparisonSession] = useState<string | null>(null);

  // In a real application, you'd fetch the actual data based on sessionId and insightCategory

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={`/sessions/${sessionId}`} className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="mr-2" />
        Back to Session Insights
      </Link>

      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{mockInsightData.title}</h1>
        <p className="text-gray-600 mb-4">{mockInsightData.summary}</p>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            Accuracy: {mockInsightData.quickStats.accuracy}%
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Efficiency: {mockInsightData.quickStats.efficiency}%
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Performance Data</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <p className="text-gray-500">Interactive performance chart placeholder</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat label="Total Shots" value={mockInsightData.totalShots} />
            <Stat label="Avg. Speed" value={`${mockInsightData.averageSpeed} mph`} />
            <Stat label="Winners" value={mockInsightData.winners} />
            <Stat label="Errors" value={mockInsightData.errors} />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comparison</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <select
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            value={comparisonSession || ''}
            onChange={(e) => setComparisonSession(e.target.value)}
          >
            <option value="">Select a session to compare</option>
            <option value="session1">Previous Session (2024-10-05)</option>
            <option value="session2">Two Weeks Ago (2024-09-26)</option>
          </select>
          {comparisonSession && (
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Comparison chart placeholder</p>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommendations</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-start mb-4">
            <Info className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
            <p className="text-gray-600">
              Your forehand accuracy has improved by 5% compared to your last session. Keep focusing on consistent follow-through to maintain this progress.
            </p>
          </div>
          <div className="flex items-start">
            <Info className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
            <p className="text-gray-600">
              Consider working on your shot placement. Aim for the corners to increase your winner count and put more pressure on your opponents.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-end space-x-4">
        <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          <Download className="mr-2 h-5 w-5" />
          Export Insights
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          <Share2 className="mr-2 h-5 w-5" />
          Share Insights
        </button>
      </div>
    </div>
  );
};

const Stat: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="text-center">
    <p className="text-gray-600 text-sm">{label}</p>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

export default DetailedInsights;