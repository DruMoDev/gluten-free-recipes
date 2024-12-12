import { CATEGORIAS } from "@/data/local/categorias";

export default function Categorias() {
  return (
    <section>
      <h2 className="font-bold text-defaultColor">Categorías</h2>
      <ul className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-2 lg:grid-cols-5">
        {CATEGORIAS.map((categoria) => (
          <li
            key={categoria.id}
            className="bg-white p-4 rounded-full shadow-md border text-center space-y-2">
            <h4 className="text-xl font-semibold">{categoria.titulo}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
