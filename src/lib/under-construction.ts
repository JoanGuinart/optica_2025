/**
 * Verifica si el sitio debe mostrar la página "en construcción"
 * @returns true si debe mostrar construcción, false si debe mostrar el sitio normal
 */
export function isUnderConstruction(): boolean {
  // Primero verificar la variable de entorno específica
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'true') {
    return true;
  }
  
  // Si está explícitamente desactivada, no mostrar construcción
  if (process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === 'false') {
    return false;
  }
  
  // Por defecto en producción, mostrar construcción (a menos que esté explícitamente desactivada)
  return process.env.NODE_ENV === 'production';
}