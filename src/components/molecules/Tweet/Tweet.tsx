import React from 'react';

import {
  EntityItem,
  EntityContent,
  EntityMetadata,
  FavoriteIcon,
  ReplyIcon,
  EntityFooter,
  Avatar,
  EntityAuthor,
  RetweetIcon,
  Typography
} from '../../atoms';
import { parseAndFormatDate } from '../../../shared/utils';

type Props = {
  id: string;
  createdAt: string;
  posterName: string;
  posterUsername: string;
  posterAvatar: string;
  text: string;
  network: string;
  likesCount: number;
};

export const Tweet: React.FunctionComponent<Props> = function Tweet(props) {
  const {
    id,
    createdAt,
    posterName,
    posterUsername,
    posterAvatar,
    text,
    likesCount
  } = props;

  return (
    <EntityItem>
      <EntityContent text={text} variant="twitter" />

      <EntityMetadata>
        <Typography variant="secondary">
          {parseAndFormatDate(createdAt)}
        </Typography>
        <div>
          <a href={`https://twitter.com/intent/tweet?in_reply_to=${id}`}>
            <ReplyIcon />
          </a>

          <a href={`https://twitter.com/intent/retweet?tweet_id=${id}`}>
            <RetweetIcon />
          </a>

          <a href={`https://twitter.com/intent/like?tweet_id=${id}`}>
            <FavoriteIcon count={likesCount} />
          </a>
        </div>
      </EntityMetadata>

      <EntityFooter>
        <Avatar src={posterAvatar} alt={`${props.posterName} avatar`} />

        <EntityAuthor>
          <Typography variant="primary">{posterName}</Typography>

          <Typography variant="secondary">
            <a href={`https://twitter.com/${posterUsername}`}>
              @{posterUsername}
            </a>
          </Typography>
        </EntityAuthor>
      </EntityFooter>
    </EntityItem>
  );
};
