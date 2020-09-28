export default {
  GET_POPULAR_REPO: (language) =>
    `https://api.github.com/search/repositories?q=${language}&sort=stars`,
  GET_TRENDING_REPO: (language, since: string = 'daily') =>
    `https://github-trending-api.now.sh/repositories?language=${language}&since=${since}`,
};
