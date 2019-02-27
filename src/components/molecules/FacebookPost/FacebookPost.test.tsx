import React from 'react';
import { render, RenderResult } from 'react-testing-library';

import '../../test-utils';
import { getFacebookPostFixtures } from './FacebookPost.fixtures';
import { FacebookPost } from './FacebookPost';

describe('<FacebookPost />', () => {
  const props = getFacebookPostFixtures();
  let post: RenderResult;

  beforeEach(() => {
    post = render(<FacebookPost {...props} />);
  });

  it('shows the post content', () => {
    const { container } = post;

    expect(container.textContent).toContain(props.text);
  });

  it('can render facebook hastags correctly', () => {
    const { container } = post;

    let hashtag = container.querySelector(
      '[href="https://www.facebook.com/hashtag/handsome"]'
    );

    expect(hashtag && hashtag.getAttribute('href')).toBe(
      'https://www.facebook.com/hashtag/handsome'
    );

    hashtag = container.querySelector(
      '[href="https://www.facebook.com/hashtag/cool"]'
    );

    expect(hashtag && hashtag.getAttribute('href')).toBe(
      'https://www.facebook.com/hashtag/cool'
    );
  });

  it('shows the corrected parsed date', () => {
    const { getByText } = post;

    getByText('26/07/2014 03:11');
  });

  it('shows the author avatar', () => {
    const { getByAltText } = post;

    getByAltText(`${props.posterName} avatar`);
  });

  it('it shows the post author screen name', () => {
    const { getByText } = post;

    getByText(props.posterName);
  });

  it('it shows the post author username', () => {
    const { getByText } = post;

    getByText(`@${props.posterUsername}`);
  });
});
