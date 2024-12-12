"use server";
import { connectToDatabase } from "@/lib/db";
import Receta from "@/models/Recetas";
import { revalidatePath } from "next/cache";

export const eliminarRecetaPorId = async (id: string) => {
  try {
    await connectToDatabase();
    await Receta.findByIdAndDelete(id);
    revalidatePath("/");
    return { msg: "Receta eliminada" };
  } catch (error) {
    return { msg: "Error al eliminar receta", error };
  }
};
