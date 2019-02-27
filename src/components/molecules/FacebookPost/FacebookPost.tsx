import React from 'react';

import {
  EntityItem,
  EntityContent,
  EntityMetadata,
  EntityFooter,
  Avatar,
  EntityAuthor,
  Typography
} from '../../atoms';
import { parseAndFormatDate } from '../../../shared/utils';

type Props = {
  id: string;
  network: string;
  posterName: string;
  src: string;
  posterUsername: string;
  posterAvatar: string;
  text: string;
  likesCount: number;
  createdAt: string;
  profile: string;
};

export const FacebookPost: React.FunctionComponent<
  Props
> = function FacebookPost(props) {
  const {
    posterName,
    posterUsername,
    posterAvatar,
    src,
    text,
    createdAt,
    profile
  } = props;

  return (
    <EntityItem>
      <EntityContent text={text} variant="facebook" />

      <EntityMetadata>
        <Typography variant="secondary">
          {parseAndFormatDate(createdAt)}
        </Typography>

        <Typography variant="secondary">
          <a href={src}>Visit Post</a>
        </Typography>
      </EntityMetadata>

      <EntityFooter>
        <Avatar src={posterAvatar} alt={`${posterName} avatar`} />

        <EntityAuthor>
          <Typography variant="primary">{posterName}</Typography>

          <Typography variant="secondary">
            <a href={profile}>@{posterUsername}</a>
          </Typography>
        </EntityAuthor>
      </EntityFooter>
    </EntityItem>
  );
};
