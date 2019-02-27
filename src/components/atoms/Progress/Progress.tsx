import React from 'react';

import './Progress.css';

export function Progress() {
  return (
    <div className="progress" data-testid="progress">
      <div className="dot first-dot" />
      <div className="dot second-dot" />
      <div className="dot third-dot" />
      <div className="dot fourth-dot" />
    </div>
  );
}
