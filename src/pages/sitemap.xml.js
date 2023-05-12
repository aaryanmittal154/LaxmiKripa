//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
      <url>
        <loc>https://www.laxmikripaispat.com/</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.com/about</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.com/products</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.com/contact</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      ${posts
        .map(({ id }) => {
          return `
          <url>
              <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
          </url>
          `;
        })
        .join("")}
    </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
