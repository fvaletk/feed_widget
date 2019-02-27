import React from 'react';
import clsx from 'clsx';

import './Typography.css';

type Props = {
  variant: 'primary' | 'secondary';
  noGutter?: boolean;
};

export const Typography: React.FunctionComponent<
  Props & JSX.IntrinsicElements['p']
> = function Typography({ variant, children, noGutter, ...rest }) {
  return (
    <p
      className={clsx(
        variant === 'primary' && 'entity__primary-text',
        variant === 'secondary' && 'entity__secondary-text',
        noGutter && 'entity__text--no-bottom-margin'
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
