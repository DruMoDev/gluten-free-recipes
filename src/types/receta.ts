export type RecetaType = {
  _id: string;
  nombre: string;
  ingredientes: string[];
  instrucciones: string;
  tiempoPreparacion: number;
  dificultad: "Fácil" | "Media" | "Difícil";
  porciones: number;
  imagenUrl?: string;
  bgColor: number;
};

type Ingredientes = {
  nombre: string;
  cantidad: string;
  medida: string;
};

export type FormNuevaReceta = {
  nombre: string;
  ingredientes: Ingredientes[];
  instrucciones: string;
  tiempoPreparacion: number;
  dificultad: "Fácil" | "Media" | "Difícil";
  porciones: number;
  imagenUrl?: string;
};
