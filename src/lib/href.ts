export const titleToSlug = (title: string) =>
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .replace(/[+-]/g, '-')
    .replace(/[^a-z0-9-]/g, '');

export const categoryToHref = (category: string) =>
  `/categories/${titleToSlug(category)}`;
