import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  return (
    <div className="blog-loading">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingScreen;