import React from 'react';

import './Avatar.css';

export const Avatar: React.FunctionComponent<
  JSX.IntrinsicElements['img']
> = function Avatar({ ...rest }) {
  return <img className="entity__avatar" {...rest} />;
};
