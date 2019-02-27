import React from 'react';

import './EntityItem.css';

export const EntityItem: React.FunctionComponent<
  JSX.IntrinsicElements['li']
> = function EntityItem({ children, ...rest }) {
  return (
    <li className="entity" {...rest}>
      {children}
    </li>
  );
};
