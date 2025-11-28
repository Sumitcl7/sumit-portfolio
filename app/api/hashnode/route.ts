export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const query = `
      query {
        user(username: "sumitcl7") {
          publication {
            posts {
              title
              brief
              slug
              coverImage {
                url
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 }
    });

    const json = await response.json();

    const posts = json?.data?.user?.publication?.posts;

    return Response.json({ posts: posts ?? [] });
  } catch (err) {
    return Response.json({ posts: [] });
  }
}
