/* eslint-disable @next/next/no-img-element */
import BotonEditarReceta from "../ui/boton-editar-receta";
import BotonEliminarRecetaId from "../ui/boton-eliminar-receta-id";
import BotonVerMasReceta from "../ui/boton-ver-mas-receta";

interface RecetaCardProps {
  _id: string;
  dificultad: keyof typeof DIFICULTADES;
  nombre: string;
  tiempoPreparacion: number;
  bgColor: number;
  imagenUrl: string;
}

const BG_COLORS = [
  "#D7E8FA",
  "#E3F2FD",
  "#FFF9C4",
  "#FFECB3",
  "#E8F5E9",
  "#C8E6C9",
  "#FFEBEE",
  "#FCE4EC",
  "#FFE0B2",
  "#FFF3E0",
  "#F3E5F5",
  "#EDE7F6",
  "#F8BBD0",
  "#FFCDD2",
];

const DIFICULTADES = {
  Fácil: "😁",
  Media: "😐",
  Difícil: "😰",
};

export default function RecetaCard({
  _id,
  dificultad,
  nombre,
  tiempoPreparacion,
  bgColor,
}: RecetaCardProps) {
  const backgroundColor = BG_COLORS[bgColor];

  return (
    <li
      key={_id}
      className="shadow-lg rounded-lg p-4 border"
      style={{ backgroundColor }}>
      <div className="flex justify-between  mt-4">
        <div>
          <h3 className="font-bold text-slate-800 text-3xl">{nombre}</h3>
          <p className="text-slate-600 mt-2 text-base">
            {tiempoPreparacion}m. 🕑
          </p>
          <p className="text-slate-600 mt-2">{DIFICULTADES[dificultad]}</p>
        </div>
        <img
          src={
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Random image"
          className=" rounded-full size-52 object-cover"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <BotonVerMasReceta />
        <BotonEditarReceta />
        <BotonEliminarRecetaId id={_id.toString()} />
      </div>
    </li>
  );
}
