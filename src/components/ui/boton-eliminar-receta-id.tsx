"use client";

import { eliminarRecetaPorId } from "@/actions/eliminar-receta-por-id";

export default function BotonEliminarRecetaId({ id }: { id: string }) {
  return (
    <button
      className="bg-red-500 rounded-lg text-white"
      onClick={() => eliminarRecetaPorId(id)}>
      Eliminar
    </button>
  );
}
