import { crearReceta } from "@/actions/action";
import Container from "@/components/ui/Container";
import { CATEGORIAS } from "@/data/categorias";
import { connectToDatabase } from "@/lib/db";
import Receta from "@/models/Recetas";

export default async function HomePage() {
  await connectToDatabase();
  const recetas = await Receta.find();

  return (
    <Container>
      <main className="flex flex-col justify-center items-center">
        <section>
          <div className="flex flex-col gap-4 mt-24 items-center">
            <h1 className="text-primary">Recetas Gluten Free</h1>
            <p>Una colección de recetas sin gluten! 🌮</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-slate-800">Últimas recetas</h2>
          <ul className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {recetas.map((receta) => (
              <li
                key={receta._id}
                className="bg-white px-8 py-4 rounded-full shadow-md border text-center space-y-2">
                <h3 className="text-accent-dark text-2xl">{receta.nombre}</h3>
                <p className="text-base text-pretty">{receta.instrucciones}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-slate-800">Categorías</h2>
          <ul className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIAS.map((categoria) => (
              <li
                key={categoria.id}
                className="bg-white px-8 py-4 rounded-full shadow-md border text-center space-y-2">
                <h3 className="text-accent-dark text-2xl">
                  {categoria.titulo}
                </h3>
                <p className="text-base text-pretty">{categoria.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <form action={crearReceta}>
            <input name="nombre" type="text" />
          </form>
        </section>
      </main>
    </Container>
  );
}
