export default async function getPostySlug() {
    const res = await fetch(`https://gblheadlesswp.enamahamed.site/wp-json/wp/v2/pages?slug=about-us`);
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }