import Container from "@/components/ui/Container";
import AñadirNuevaRecetaFormulario from "@/components/homepage/añadir-receta-section/section-añadir-receta";
import Categorias from "@/components/homepage/categorias";
import Hero from "@/components/homepage/hero";
import NuevasRecetas from "@/components/homepage/nuevas-recetas-section";

export default async function HomePage() {
  return (
    <Container>
      <main className="flex flex-col justify-center items-center">
        <Hero />
        <Categorias />
        <NuevasRecetas />
        <AñadirNuevaRecetaFormulario />
      </main>
    </Container>
  );
}
