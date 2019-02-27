import React from 'react';
import { render, RenderResult } from 'react-testing-library';

import '../../test-utils';
import { getTweetFixtures } from './Tweet.fixtures';
import { Tweet } from './Tweet';

describe('<Tweet />', () => {
  const props = getTweetFixtures();
  let tweet: RenderResult;

  beforeEach(() => {
    tweet = render(<Tweet {...props} />);
  });

  it('shows the tweet content', () => {
    const { container } = tweet;

    expect(container.textContent).toContain(props.text);
  });

  it('can render facebook hastags correctly', () => {
    const { container } = tweet;

    let hashtag = container.querySelector(
      '[href="https://twitter.com/hashtag/handsome?src=hash"]'
    );

    expect(hashtag && hashtag.getAttribute('href')).toBe(
      'https://twitter.com/hashtag/handsome?src=hash'
    );

    hashtag = container.querySelector(
      '[href="https://twitter.com/hashtag/cool?src=hash"]'
    );

    expect(hashtag && hashtag.getAttribute('href')).toBe(
      'https://twitter.com/hashtag/cool?src=hash'
    );
  });

  it('shows the corrected parsed date', () => {
    const { getByText } = tweet;

    getByText('29/12/2017 14:15');
  });

  it('shows the author avatar', () => {
    const { getByAltText } = tweet;

    getByAltText(`${props.posterName} avatar`);
  });

  it('it shows the tweet author screen name', () => {
    const { getByText } = tweet;

    getByText(props.posterName);
  });

  it('it shows the tweet author username', () => {
    const { getByText } = tweet;

    getByText(`@${props.posterUsername}`);
  });
});
