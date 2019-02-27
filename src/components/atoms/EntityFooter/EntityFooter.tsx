import React from 'react';

import './EntityFooter.css';

export const EntityFooter: React.FunctionComponent<
  JSX.IntrinsicElements['footer']
> = function EntityFooter({ children, ...rest }) {
  return (
    <footer className="entity__footer" {...rest}>
      {children}
    </footer>
  );
};
