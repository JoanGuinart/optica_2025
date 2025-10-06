import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Verificar si debemos mostrar la página en construcción
  const underConstruction = process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true';

  // Si está activada la página en construcción, mostrarla
  if (underConstruction) {
    return <UnderConstructionPage />;
  }

  let post: SanityDocument | null = null;
  
  try {
    post = await client.fetch<SanityDocument>(
      POST_QUERY,
      await params,
      options
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    // Si hay error con Sanity, mostrar página en construcción como fallback
    return <UnderConstructionPage />;
  }

  if (!post) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
      </main>
    );
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl"
          width={550}
          height={310}
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}