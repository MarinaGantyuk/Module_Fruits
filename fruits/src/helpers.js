export function choice(items) {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
}

export function remove(item, items) {
  return items.filter((element) => element != item);
}
