// lib/api.js
export async function getPageData(slug) {
  const res = await fetch(
    `${process.env.WP_API_URL}/wp/v2/pages?slug=${slug}`,
    {
      next: { revalidate: 60 } // ISR (optional)
    }
  );

  const data = await res.json();
  return data[0];
}