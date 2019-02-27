import React from 'react';

import { EntitiesList, Progress } from '../../atoms';
import { renderEntities } from './renderEntities';
import { fetchEntities } from './fetchEntities';
import { mergeNewEntitiesWithRecentEntities } from './mergeNewEntitiesWithRecentEntities';

type Entity = ITweet | IFBPost;

type Props = {
  url: string;
  limit: number;
  interval: number;
};

type State = {
  items: Array<Entity>;
  current: 'iddle' | 'initializing';
};

export class Entities extends React.Component<Props, State> {
  state: State = {
    items: [],
    current: 'initializing'
  };

  sub?: NodeJS.Timeout = undefined;

  componentDidMount() {
    this.fetchAndPollEntities();
  }

  transitionToIddle = () => this.setState({ current: 'iddle' });

  fetchAndPollEntities = () => {
    const {
      onUpdate,
      onSetupPolling,
      transitionToIddle,
      props: { url, limit }
    } = this;

    fetchEntities(url, limit)
      .then(onUpdate)
      .then(transitionToIddle)
      .then(onSetupPolling);
  };

  onSetupPolling = () => {
    const {
      onUpdate,
      props: { url, limit, interval }
    } = this;

    const mostRecentId = this.state.items[0].id;

    this.sub = setInterval(
      () =>
        fetchEntities(url, limit, mostRecentId)
          .then(x => mergeNewEntitiesWithRecentEntities(this.state.items, x))
          .then(onUpdate),
      interval
    );
  };

  componentWillUnmount() {
    this.stopListeningForEntities();
  }

  stopListeningForEntities = () => {
    if (this.sub) {
      clearInterval(this.sub);
    }
  };

  onUpdate = (items: Array<Entity>) => this.setState({ items: items });

  render() {
    const {
      state: { current }
    } = this;

    return (
      <EntitiesList>
        {current === 'initializing' && <Progress />}
        {renderEntities(this.state.items)}
      </EntitiesList>
    );
  }
}
