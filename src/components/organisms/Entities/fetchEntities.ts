import clsx from 'clsx';

import { createFacebookPostFromResponse } from './createFacebookPostFromResponse';
import { createTweetFromResponse } from './createTweetFromResponse';

function transformFetchedEntities(items: Array<ResponseItem>) {
  return items.map(x => {
    switch (x.network) {
      case 'facebook':
        return createFacebookPostFromResponse(x as FacebookResponseItem);

      default:
        return createTweetFromResponse(x);
    }
  });
}

function appendParamToURL(str: string, param: string) {
  if (str.indexOf('?') !== -1) {
    return `&${param}`;
  }

  return `?${param}`;
}

export function fetchEntities(
  url: string,
  limit?: number,
  mostRecentId?: string
) {
  const requestUrl = clsx(
    url,
    limit && appendParamToURL(url, `limit=${limit}`),
    mostRecentId && `&since_id=${mostRecentId}`
  )
    .split(' ')
    .join('');

  return fetch(requestUrl)
    .then(x => x.json())
    .then(transformFetchedEntities);
}
