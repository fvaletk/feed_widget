export function createTweetFromResponse(item: ResponseItem) {
  return {
    id: item.id_str,
    network: 'twitter',
    posterName: item.user.name,
    posterUsername: item.user.screen_name,
    posterAvatar: item.user.profile_image_url_https,
    text: item.text,
    createdAt: item.created_at,
    retweetsCount: item.retweet_count,
    likesCount: item.favorite_count
  };
}
