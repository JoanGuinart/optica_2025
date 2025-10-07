import { isUnderConstruction } from "@/lib/under-construction";
import { UnderConstructionPage } from "@/components/UnderConstructionPage";
import Portada from "@/components/Portada";

export default async function Home() {
  // Verificar si debemos mostrar la página en construcción
  const underConstruction = isUnderConstruction();

  // Si está activada la página en construcción, mostrarla
  if (underConstruction) {
    return <UnderConstructionPage />;
  }

  return (
      <main>
        <Portada />
      </main>
  );
}
