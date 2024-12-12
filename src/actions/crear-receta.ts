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
  const bgColor = Math.floor(Math.random() * 14);

  const receta = new Receta({
    nombre,
    ingredientes,
    instrucciones,
    tiempoPreparacion,
    dificultad,
    porciones,
    imagenUrl: "https://random.imagecdn.app/500/150",
    bgColor,
  });
  await receta.save();
  revalidatePath("/");
};
