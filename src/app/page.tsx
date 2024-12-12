import Container from "@/components/ui/Container";
import AñadirNuevaRecetaFormulario from "@/components/homepage/añadir-nueva-receta-formulario";
import Categorias from "@/components/homepage/categorias-homepage";
import Hero from "@/components/homepage/hero-homepage";
import NuevasRecetas from "@/components/homepage/nuevas-recetas-homepage";

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
