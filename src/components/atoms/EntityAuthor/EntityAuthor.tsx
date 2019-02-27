import React from 'react';

import './EntityAuthor.css';

export const EntityAuthor: React.FunctionComponent<
  JSX.IntrinsicElements['div']
> = function EntityAuthor({ children, ...rest }) {
  return (
    <div className="entity__author" {...rest}>
      {children}
    </div>
  );
};
