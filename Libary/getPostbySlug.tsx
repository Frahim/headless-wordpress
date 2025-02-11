export default async function getPostySlug(slug: string) {
    const res = await fetch(`https://gblheadlesswp.enamahamed.site/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }
