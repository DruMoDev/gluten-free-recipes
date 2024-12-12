import { Schema, model, Document, models } from "mongoose";

interface IReceta extends Document {
  nombre: string;
  ingredientes: string[];
  instrucciones: string;
  tiempoPreparacion: number;
  dificultad: "Fácil" | "Media" | "Difícil";
  porciones: number;
  imagenUrl?: string;
  bgColor: number;
}

const RecetaSchema = new Schema<IReceta>({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  instrucciones: { type: String, required: true },
  tiempoPreparacion: { type: Number, required: true },
  dificultad: {
    type: String,
    enum: ["Fácil", "Media", "Difícil"],
    required: true,
  },
  porciones: { type: Number, required: true },
  imagenUrl: { type: String },
  bgColor: { type: Number, required: true },
});

const Receta = models.Receta || model<IReceta>("Receta", RecetaSchema);

export default Receta;
