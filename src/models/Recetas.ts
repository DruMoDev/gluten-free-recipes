import { Schema, model, Document, models } from "mongoose";

interface IReceta extends Document {
  nombre: string;
  ingredientes: string[];
  instrucciones: string;
  tiempoPreparacion: number;
  dificultad: "Fácil" | "Media" | "Difícil";
  porciones: number;
  categorias: string[];
  imagenUrl?: string;
  bgColor: number;
  createdAt: Date;
  updatedAt?: Date;
}

const recetaSchema = new Schema<IReceta>({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], required: true, lowercase: true },
  instrucciones: { type: String, required: true },
  tiempoPreparacion: { type: Number, required: true },
  dificultad: {
    type: String,
    enum: ["Fácil", "Media", "Difícil"],
    required: true,
  },
  porciones: { type: Number, required: true },
  categorias: { type: [String], required: true, lowercase: true },
  imagenUrl: { type: String },
  bgColor: {
    type: Number,
    required: true,
    default: () => Math.floor(Math.random() * 14),
  },
  createdAt: { type: Date, default: () => new Date(), immutable: true },
  updatedAt: Date,
});

recetaSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Receta = models.Receta || model<IReceta>("Receta", recetaSchema);
export default Receta;
