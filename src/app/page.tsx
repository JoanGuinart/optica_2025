import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };



export default async function Home() {
  // Verificar si debemos mostrar la página en construcción
  const underConstruction = isUnderConstruction();

  // Si está activada la página en construcción, mostrarla
  if (underConstruction) {
    return <UnderConstructionPage />;
  }

  // Solo ejecutar la consulta de Sanity si no estamos en construcción
  let posts: SanityDocument[] = [];
  
  try {
    posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  } catch (error) {
    console.error('Error fetching posts:', error);
    // Si hay error con Sanity, mostrar página en construcción como fallback
    return <UnderConstructionPage />;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="e1 mb-8">Posts aqui</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            {post.slug?.current ? (
              <Link href={`/${post.slug.current}`}>
                <h2>{post.title}</h2>
                <p>
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            ) : (
              <h2>{post.title}</h2>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
