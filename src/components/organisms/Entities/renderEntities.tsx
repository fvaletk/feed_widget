import React from 'react';

import { Tweet, FacebookPost } from '../../molecules';

type Entity = ITweet | IFBPost;

export function renderEntities(entities: Array<Entity>) {
  return entities.map(x => {
    if (x.network === 'facebook') {
      return (
        <FacebookPost
          key={x.id}
          id={x.id}
          createdAt={x.createdAt}
          network={x.network}
          posterName={x.posterName}
          posterUsername={x.posterUsername}
          posterAvatar={x.posterAvatar}
          text={x.text}
          src={(x as IFBPost).src}
          profile={(x as IFBPost).profile}
          likesCount={x.likesCount}
        />
      );
    }

    return (
      <Tweet
        key={x.id}
        id={x.id}
        createdAt={x.createdAt}
        posterName={x.posterName}
        posterUsername={x.posterUsername}
        posterAvatar={x.posterAvatar}
        text={x.text}
        network={x.network}
        likesCount={x.likesCount}
      />
    );
  });
}
