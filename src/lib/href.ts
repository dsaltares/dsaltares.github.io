export const titleToHref = (title: string) =>
  title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-z0-9-]/g, '');

export const categoryToHref = (category: string) =>
  `/categories/${titleToHref(category)}`;
