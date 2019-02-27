export function createFacebookPostFromResponse(
  post: FacebookResponseItem
): IFBPost {
  return {
    id: post.id,
    network: 'facebook',
    posterName: post.from.name,
    posterUsername: post.from.broadcast_name,
    posterAvatar: `https://graph.facebook.com/${post.from.id}/picture`,
    text: post.message,
    src: `https://facebook.com/${post.from.id}/posts/${post.facebook_id.split(
      '_'[1]
    )}`,
    likesCount: post.like_count,
    profile: `http://www.facebook.com/profile.php?id=${post.from.id}`,
    createdAt: post.created_time
  };
}
