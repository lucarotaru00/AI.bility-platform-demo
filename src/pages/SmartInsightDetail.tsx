import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Zap, AlertTriangle, Info } from 'lucide-react';

const SmartInsightDetail: React.FC = () => {
  const { insightId } = useParams<{ insightId: string }>();

  // Mock data for demonstration purposes
  const insightData = {
    id: insightId,
    title: insightId === '1' 
      ? "Reaction Time Impact on Shot Quality" 
      : "Injury Risk: Incomplete Follow-Through",
    description: insightId === '1'
      ? "We've noticed that when your reaction time drops by 23%, your shot accuracy decreases by 19%. Focus on improving your reaction time to enhance shot success."
      : "In the last 5 sessions, your follow-through has been incomplete on 30% of your forehand shots. This could put stress on your shoulder, leading to potential injury.",
    icon: insightId === '1' ? <Zap className="h-8 w-8 text-yellow-500" /> : <AlertTriangle className="h-8 w-8 text-red-500" />,
    recommendation: insightId === '1'
      ? "Try our recommended reaction time drills to improve your response speed."
      : "Schedule a session with a coach to work on your follow-through technique.",
    data: insightId === '1'
      ? [
          { reactionTime: 0.5, shotAccuracy: 80 },
          { reactionTime: 0.6, shotAccuracy: 75 },
          { reactionTime: 0.4, shotAccuracy: 85 },
          { reactionTime: 0.7, shotAccuracy: 70 },
          { reactionTime: 0.5, shotAccuracy: 80 },
        ]
      : [
          { session: 1, incompleteFollowThroughs: 15 },
          { session: 2, incompleteFollowThroughs: 12 },
          { session: 3, incompleteFollowThroughs: 18 },
          { session: 4, incompleteFollowThroughs: 10 },
          { session: 5, incompleteFollowThroughs: 14 },
        ],
  };

  const renderGraph = () => {
    if (insightId === '1') {
      // Scatter plot for Reaction Time vs Shot Accuracy
      const maxReactionTime = Math.max(...insightData.data.map((item: any) => item.reactionTime));
      const minReactionTime = Math.min(...insightData.data.map((item: any) => item.reactionTime));
      const range = maxReactionTime - minReactionTime;

      return (
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* Background */}
          <rect x="0" y="0" width="400" height="300" fill="#f7fafc" />
          
          {/* X and Y axes */}
          <line x1="50" y1="250" x2="350" y2="250" stroke="#718096" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="250" stroke="#718096" strokeWidth="2" />
          
          {/* X-axis labels */}
          {[0.3, 0.4, 0.5, 0.6, 0.7].map((value, index) => (
            <text key={`x-label-${index}`} x={50 + index * 75} y="270" textAnchor="middle" fill="#4A5568" fontSize="12">
              {value.toFixed(1)}s
            </text>
          ))}
          
          {/* Y-axis labels */}
          {[0, 25, 50, 75, 100].map((value, index) => (
            <text key={`y-label-${index}`} x="40" y={250 - index * 50} textAnchor="end" fill="#4A5568" fontSize="12">
              {value}%
            </text>
          ))}
          
          {/* Data points */}
          {insightData.data.map((item: any, index: number) => (
            <circle
              key={`data-point-${index}`}
              cx={50 + ((item.reactionTime - minReactionTime) / range) * 300}
              cy={250 - item.shotAccuracy * 2}
              r="6"
              fill="#4299E1"
            />
          ))}

          {/* Trend line */}
          <line
            x1="50"
            y1="250"
            x2="350"
            y2="50"
            stroke="#ED8936"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Chart title */}
          <text x="200" y="30" textAnchor="middle" fill="#2D3748" fontSize="16" fontWeight="bold">
            Reaction Time vs Shot Accuracy
          </text>
        </svg>
      );
    } else {
      // Bar chart for Incomplete Follow-Throughs
      const maxIncomplete = Math.max(...insightData.data.map((item: any) => item.incompleteFollowThroughs));
      return (
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* Background */}
          <rect x="0" y="0" width="400" height="300" fill="#f7fafc" />
          
          {/* X and Y axes */}
          <line x1="50" y1="250" x2="350" y2="250" stroke="#718096" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="250" stroke="#718096" strokeWidth="2" />
          
          {/* X-axis labels */}
          {insightData.data.map((item: any, index: number) => (
            <text key={`x-label-${index}`} x={80 + index * 60} y="270" textAnchor="middle" fill="#4A5568" fontSize="12">
              Session {item.session}
            </text>
          ))}
          
          {/* Y-axis labels */}
          {[0, 5, 10, 15, 20].map((value, index) => (
            <text key={`y-label-${index}`} x="40" y={250 - index * 50} textAnchor="end" fill="#4A5568" fontSize="12">
              {value}
            </text>
          ))}
          
          {/* Bars */}
          {insightData.data.map((item: any, index: number) => (
            <rect
              key={`bar-${index}`}
              x={65 + index * 60}
              y={250 - (item.incompleteFollowThroughs / maxIncomplete) * 200}
              width="30"
              height={(item.incompleteFollowThroughs / maxIncomplete) * 200}
              fill="#ED8936"
            />
          ))}

          {/* Chart title */}
          <text x="200" y="30" textAnchor="middle" fill="#2D3748" fontSize="16" fontWeight="bold">
            Incomplete Follow-Throughs per Session
          </text>
        </svg>
      );
    }
  };

  return (
    <div className="space-y-6">
      <Link to="/insights" className="flex items-center text-blue-600 hover:text-blue-800">
        <ArrowLeft className="mr-2" />
        Back to Insights
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4">
          {insightData.icon}
          <h1 className="text-2xl font-bold ml-2">{insightData.title}</h1>
        </div>
        <p className="text-gray-600 mb-4">{insightData.description}</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Visualization</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-80">
              {renderGraph()}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Recommendation</h2>
          <div className="flex items-start bg-blue-100 p-4 rounded-lg">
            <Info className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" />
            <p>{insightData.recommendation}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Review your technique with a coach</li>
            <li>Practice specific drills targeting this area</li>
            <li>Monitor progress in upcoming sessions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartInsightDetail;