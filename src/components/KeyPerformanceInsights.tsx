import React from 'react';
import { BarChart2, Move, Target, Zap, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InsightCardProps {
  title: string;
  summary: string;
  icon: React.ReactNode;
  color: string;
  sessionId: string;
  category: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, summary, icon, color, sessionId, category }) => (
  <div className={`bg-white shadow-lg rounded-lg p-6 border-t-4 ${color}`}>
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800 ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{summary}</p>
    <Link
      to={`/sessions/${sessionId}/insights/${category}`}
      className="text-blue-500 hover:text-blue-700 font-semibold"
    >
      View Full Insights
    </Link>
  </div>
);

interface KeyPerformanceInsightsProps {
  sessionId: string | undefined;
}

const KeyPerformanceInsights: React.FC<KeyPerformanceInsightsProps> = ({ sessionId }) => {
  const insights = [
    {
      title: "Stroke Analysis",
      summary: "85% forehand success rate",
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      color: "border-blue-500",
      category: "stroke-analysis"
    },
    {
      title: "Movement Patterns",
      summary: "Average court coverage: 200 meters",
      icon: <Move className="h-6 w-6 text-green-500" />,
      color: "border-green-500",
      category: "movement-patterns"
    },
    {
      title: "Shot Accuracy",
      summary: "75% overall shot accuracy",
      icon: <Target className="h-6 w-6 text-red-500" />,
      color: "border-red-500",
      category: "shot-accuracy"
    },
    {
      title: "Reaction Time",
      summary: "Average reaction time: 0.5 seconds",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      color: "border-yellow-500",
      category: "reaction-time"
    },
    {
      title: "Shot Speed",
      summary: "Average serve speed: 120 km/h",
      icon: <Wind className="h-6 w-6 text-purple-500" />,
      color: "border-purple-500",
      category: "shot-speed"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Performance Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            title={insight.title}
            summary={insight.summary}
            icon={insight.icon}
            color={insight.color}
            sessionId={sessionId || ''}
            category={insight.category}
          />
        ))}
      </div>
    </section>
  );
};

export default KeyPerformanceInsights;