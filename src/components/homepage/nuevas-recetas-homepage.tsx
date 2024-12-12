import { obtenerTodasRecetas } from "@/data/fetch/obtener-todas-recetas";
import RecetaCard from "./receta-card";
import { BadgePlus } from "lucide-react";
import Link from "next/link";

export default async function NuevasRecetas() {
  const recetas = await obtenerTodasRecetas();

  return (
    <section>
      <div className="flex items-center jsutice gap-2">
        <h2 className="font-bold text-slate-800">Últimas recetas</h2>
        <Link href={"#nueva-receta"}>
        <BadgePlus className="text-defaultColor size-7" />
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-7 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {recetas.map(
          ({
            _id,
            dificultad,
            imagenUrl,
            nombre,
            tiempoPreparacion,
            bgColor,
          }) => (
            <RecetaCard
              key={_id}
              _id={_id}
              dificultad={dificultad}
              nombre={nombre}
              tiempoPreparacion={tiempoPreparacion}
              imagenUrl={imagenUrl || ""}
              bgColor={bgColor}
            />
          )
        )}
      </ul>
    </section>
  );
}
