import React from 'react';

import './EntitiesList.css';

export const EntitiesList: React.FunctionComponent<
  JSX.IntrinsicElements['ul']
> = function EntitiesList({ children, ...rest }) {
  return (
    <ul className="entities-list" {...rest}>
      {children}
    </ul>
  );
};
