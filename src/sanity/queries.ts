// GROQ queries simples para obtener contenido dinámico de Sanity CMS
import { client } from './client'

// Obtener contenido de la portada principal
export async function getHomepageData() {
  return client.fetch(`
    *[_type == "homepage"][0] {
      _id,
      title,
      heroImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      subtitle,
      description,
      ctaText,
      ctaLink,
      phone,
      address,
      hours,
      footerText
    }
  `)
}

// Obtener todos los banners activos ordenados por posición
export async function getBanners() {
  return client.fetch(`
    *[_type == "banner" && active == true] | order(position asc) {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        },
        alt
      },
      title,
      description,
      buttonText,
      buttonLink,
      position,
      fullWidth
    }
  `)
}

// Obtener todo el contenido de la página de una vez
export async function getPageContent() {
  const [homepage, banners] = await Promise.all([
    getHomepageData(),
    getBanners()
  ])

  return {
    homepage,
    banners
  }
}