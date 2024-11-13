import React from 'react';
import NotificationsAndQuickActions from '../components/NotificationsAndQuickActions';
import RecentSessions from '../components/RecentSessions';
import ProgressAndRecommendations from '../components/ProgressAndRecommendations';

const Dashboard: React.FC = () => {
  return (
    <>
      <NotificationsAndQuickActions />
      <RecentSessions />
      <ProgressAndRecommendations />
    </>
  );
};

export default Dashboard;