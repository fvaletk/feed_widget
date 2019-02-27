type Entity = ITweet | IFBPost;

export function mergeNewEntitiesWithRecentEntities(
  oldOnes: Array<Entity>,
  newOnes: Array<Entity>
) {
  return [...newOnes, ...oldOnes];
}
