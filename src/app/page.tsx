import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

// Componente de página en construcción
function UnderConstructionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-6xl mb-4">🏗️</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Estamos en construcción!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Óptica Guinart está preparando algo increíble para ti. 
            Muy pronto tendremos nuestra nueva web lista.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Mientras tanto, visítanos en:
          </h2>
          <div className="space-y-2 text-lg text-gray-700">
            <p>📍 Carrer Gran de Sant Andreu 308, Barcelona, 08030</p>
            <p>📞 Teléfono de contacto: 933118706</p>
            <p>🕒 Horarios de atención: Lunes a Viernes, 9:30 - 13:30 / 17:00 - 20:30</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>© 2025 Óptica Guinart - Sitio en desarrollo</p>
        </div>
      </div>
    </main>
  );
}

export default async function Home() {
  // Verificar si debemos mostrar la página en construcción
  const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';

  // Si está activada la página en construcción, mostrarla
  if (underConstruction) {
    return <UnderConstructionPage />;
  }

  // Si estamos en desarrollo, mostrar la página normal con posts
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

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
