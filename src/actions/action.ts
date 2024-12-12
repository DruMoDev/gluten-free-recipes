"use server";

import { connectToDatabase } from "@/lib/db";
import Receta from "@/models/Recetas";
import { revalidatePath } from "next/cache";

export const crearReceta = async (formData: FormData) => {
  await connectToDatabase();
  const nombre = formData.get("nombre")?.toString();
  const ingredientes = formData.get("ingredientes")?.toString().split(",");
  const instrucciones = formData.get("instrucciones")?.toString();
  const tiempoPreparacion = formData.get("tiempoPreparacion");
  const dificultad = formData.get("dificultad");
  const porciones = formData.get("porciones");

  const receta = new Receta({
    nombre,
    ingredientes,
    instrucciones,
    tiempoPreparacion,
    dificultad,
    porciones,
    imagenUrl: "https://example.com/imagen-aleatoria.jpg",
  });
  await receta.save();
  revalidatePath("/");
};
