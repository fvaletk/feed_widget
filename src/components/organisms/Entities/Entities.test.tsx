import React from 'react';
import { render } from 'react-testing-library';

import '../../test-utils';
import { Entities } from './Entities';
import {
  getEntitiesFixtures,
  happyPathResponse,
  extraHappyPathResponse
} from './Entities.fixtures';

describe('<Entities />', () => {
  let props: any;

  beforeEach(() => {
    global.fetch.resetMocks();
    props = getEntitiesFixtures();
  });

  it('renders loader while fetching entities', done => {
    global.fetch.mockResponseOnce(JSON.stringify(happyPathResponse));

    const { getByTestId, queryByTestId } = render(<Entities {...props} />);

    getByTestId('progress');

    setTimeout(() => {
      const progress = queryByTestId('progress');
      expect(progress).not.toBeInTheDocument();
      done();
    }, 1000);
  });

  it(`${getEntitiesFixtures().limit} elements`, done => {
    global.fetch.mockResponseOnce(JSON.stringify(happyPathResponse));

    const { getByText } = render(<Entities {...props} />);

    setTimeout(() => {
      happyPathResponse.map(x => x.user.name).forEach(x => getByText(x));

      done();
    }, 1000);
  });

  it(`fetch new elements every ${
    getEntitiesFixtures().interval
  } seconds`, done => {
    global.fetch.mockResponseOnce(JSON.stringify(happyPathResponse));

    const { getByText } = render(<Entities {...props} />);

    setTimeout(() => {
      global.fetch.mockResponseOnce(JSON.stringify([extraHappyPathResponse]));

      happyPathResponse.map(x => x.user.name).forEach(x => getByText(x));

      setTimeout(() => {
        [extraHappyPathResponse, ...happyPathResponse]
          .map(x => x.user.name)
          .forEach(x => getByText(x));

        done();
      }, 2000);
    }, 1000);
  });
});
