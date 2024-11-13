import React from 'react';
import NotificationsAndQuickActions from './NotificationsAndQuickActions';
import RecentSessions from './RecentSessions';
import ProgressAndRecommendations from './ProgressAndRecommendations';

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