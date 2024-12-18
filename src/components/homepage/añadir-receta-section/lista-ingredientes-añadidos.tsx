import { X } from "lucide-react";
import { FormNuevaReceta } from "@/types/receta";

interface Props {
  formData: FormNuevaReceta;
  setFormData: (data: FormNuevaReceta) => void;
}

export default function ListaIngredientesAñadidos({
  formData,
  setFormData,
}: Props) {
  const handleClick = (nombre: string) => {
    const nuevosIngredientes = formData.ingredientes.filter(
      (ingrediente) => ingrediente.nombre !== nombre
    );
    setFormData({
      ...formData,
      ingredientes: nuevosIngredientes,
    });
  };
  return (
    <ul className="mt-3 flex gap-3">
      {formData.ingredientes.map((ingrediente, index) => (
        <li
          key={index}
          className="border py-1 px-3 text-sm rounded-lg mb-2 bg-gray-100 capitalize relative pr-6">
          {ingrediente.nombre} -{" "}
          <span className="text-xs text-text">
            {ingrediente.cantidad} {ingrediente.medida}
          </span>
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 bg-transparent min-w-0"
            onClick={() => handleClick(ingrediente.nombre)}>
            <X className="size-4" />
          </button>
        </li>
      ))}
    </ul>
  );
}
