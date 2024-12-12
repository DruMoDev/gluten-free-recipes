import { connectToDatabase } from "@/lib/db";
import Receta from "@/models/Recetas";
import { RecetaType } from "@/types/receta";

export const obtenerTodasRecetas = async () => {
  await connectToDatabase();
  const recetas = await Receta.find();
  return recetas as RecetaType[];
};
