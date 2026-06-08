/** Desktop layout starts at lg (1024px). lg and xl share the same rules — use lg: only, not xl:. */

export function getLandscapeVisibleCount(width: number) {
  if (width >= 1024) return 4;
  if (width >= 768) return 2;
  return 1;
}

export function getStoriesVisibleCount(width: number) {
  if (width >= 1024) return 2;
  return 1;
}
