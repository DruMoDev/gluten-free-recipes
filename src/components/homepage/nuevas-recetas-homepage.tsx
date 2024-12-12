import { obtenerTodasRecetas } from "@/data/fetch/obtener-todas-recetas";
import BotonEliminarRecetaId from "../ui/boton-eliminar-receta-id";

export default async function NuevasRecetas() {
  const recetas = await obtenerTodasRecetas();
  return (
    <section>
      <h2 className="font-bold text-slate-800">Últimas recetas</h2>
      <ul className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {recetas.map(
          ({
            _id,
            dificultad,
            // imagenUrl,
            ingredientes,
            instrucciones,
            nombre,
            porciones,
            tiempoPreparacion,
          }) => (
            <li key={_id} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-slate-800 text-lg mt-4">
                {nombre}
              </h3>
              <p className="text-slate-600 mt-2">{dificultad}</p>
              <p className="text-slate-600 mt-2">{porciones}</p>
              <p className="text-slate-600 mt-2">{tiempoPreparacion}</p>
              <ul className="mt-4">
                {ingredientes.map((ingrediente, index) => (
                  <li key={index} className="text-slate-600">
                    {ingrediente}
                  </li>
                ))}
              </ul>
              <p className="mt-4">{instrucciones}</p>
              <BotonEliminarRecetaId id={_id.toString()} />
            </li>
          )
        )}
      </ul>
    </section>
  );
}
