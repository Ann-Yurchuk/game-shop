export const calcTotalPrice = (items) =>
  items.reduce((acc, game) => (acc += game.price), 0);

export const URLS = {
  game: "/game",
  order: "/order",
  search: "/search",
};
