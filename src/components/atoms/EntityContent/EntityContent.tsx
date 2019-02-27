import React from 'react';

import './EntityContent.css';

type Props = {
  text: string;
  variant: 'instagram' | 'facebook' | 'twitter';
};

export function parseURL(str: string) {
  return str.replace(
    /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,
    u => {
      return u.link(u);
    }
  );
}

export function parseTwitterUsername(str: string) {
  return str.replace(/[@]+[A-Za-z0-9-_]+/g, u => {
    const username = u.replace('@', '');

    return u.link(`http://twitter.com/${username}`);
  });
}

export function parseTwitterHashtag(str: string) {
  return str.replace(/[#]+[A-Za-z0-9-_]+/g, t => {
    const tag = t.replace('#', '');

    return t.link(`https://twitter.com/hashtag/${tag}?src=hash`);
  });
}

export function parseFacebookHashtag(str: string) {
  return str.replace(/[#]+[A-Za-z0-9-_]+/g, t => {
    const tag = t.replace('#', '');

    return t.link(`https://www.facebook.com/hashtag/${tag}`);
  });
}

export const EntityContent: React.FunctionComponent<
  Props & JSX.IntrinsicElements['p']
> = function EntityContent({ text, variant, ...rest }) {
  if (variant === 'facebook') {
    return (
      <p
        className="entity__wrapper"
        dangerouslySetInnerHTML={{
          __html: parseFacebookHashtag(parseURL(text))
        }}
        {...rest}
      />
    );
  }

  return (
    <p
      className="entity__wrapper"
      dangerouslySetInnerHTML={{
        __html: parseTwitterUsername(parseTwitterHashtag(parseURL(text)))
      }}
      {...rest}
    />
  );
};
