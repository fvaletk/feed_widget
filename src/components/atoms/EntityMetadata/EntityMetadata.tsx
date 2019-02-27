import React from 'react';

import './EntityMetadata.css';

export const EntityMetadata: React.FunctionComponent<
  JSX.IntrinsicElements['div']
> = function EntityMetadata({ children, ...rest }) {
  return (
    <div className="entity__metadata-wrapper" {...rest}>
      {children}
    </div>
  );
};
