"use server";

import { connectToDatabase } from "@/lib/db";
import Receta from "@/models/Recetas";
import { revalidatePath } from "next/cache";

export const crearReceta = async (formData: FormData) => {
  await connectToDatabase();
  const receta = new Receta({
    nombre: formData.get("nombre"),
    ingredientes: ["ingrediente1", "ingrediente2", "ingrediente3"],
    instrucciones: "Instrucciones aleatorias",
    tiempoPreparacion: Math.floor(Math.random() * 120), // Random time between 0 and 120 minutes
    dificultad: ["Fácil", "Media", "Difícil"][Math.floor(Math.random() * 3)], // Random difficulty
    porciones: Math.floor(Math.random() * 10) + 1, // Random portions between 1 and 10
    imagenUrl: "https://example.com/imagen-aleatoria.jpg",
  });
    await receta.save();
  revalidatePath("/");
};

export const eliminarReceta = async (id: string) => {
  await connectToDatabase();
  await Receta.findByIdAndDelete(id);
  revalidatePath("/");
};
