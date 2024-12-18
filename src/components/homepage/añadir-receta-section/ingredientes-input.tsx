import { useState } from "react";
import ListaIngredientesAñadidos from "./lista-ingredientes-añadidos";
import { FormNuevaReceta } from "@/types/receta";

type Props = {
  formData: FormNuevaReceta;
  setFormData: (data: FormNuevaReceta) => void;
  setError: (error: string | null) => void;
};

export default function IngredientesInput({
  formData,
  setFormData,
  setError,
}: Props) {
  const [nuevoIngrediente, setNuevoIngrediente] = useState({
    nombre: "",
    cantidad: "",
    medida: "gramos",
  });

  const handleAgregarIngrediente = () => {
    if (
      !nuevoIngrediente.nombre ||
      !nuevoIngrediente.cantidad ||
      !nuevoIngrediente.medida
    ) {
      setError("Por favor, completa todos los campos del ingrediente.");
      return;
    }
    setFormData({
      ...formData,
      ingredientes: [...formData.ingredientes, nuevoIngrediente],
    });
    setNuevoIngrediente({ nombre: "", cantidad: "", medida: "gramos" });
    setError(null);
  };
  return (
    <>
      <h4 className="mt-4">Ingredientes</h4>
      <ListaIngredientesAñadidos
        formData={formData}
        setFormData={setFormData}
      />
      <div className="grid grid-cols-3 gap-2">
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoIngrediente.nombre}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          onChange={(e) =>
            setNuevoIngrediente({
              ...nuevoIngrediente,
              nombre: e.target.value,
            })
          }
          className="rounded-lg px-3 py-1 border block w-full"
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={nuevoIngrediente.cantidad}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          onChange={(e) =>
            setNuevoIngrediente({
              ...nuevoIngrediente,
              cantidad: e.target.value,
            })
          }
          className="rounded-lg px-3 py-1 border block w-full"
        />
        <select
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          onChange={(e) =>
            setNuevoIngrediente({
              ...nuevoIngrediente,
              medida: e.target.value,
            })
          }
          value={nuevoIngrediente.medida}
          className="rounded-lg px-3 py-1 border block w-full">
          <option value="gramos">gramos</option>
          <option value="kilogramos">Kilogramos</option>
          <option value="mililitros">mililitros</option>
          <option value="litros">litros</option>
          <option value="onzas">onzas</option>
        </select>
      </div>
      <button
        type="button"
        onClick={handleAgregarIngrediente}
        className="bg-primary text-white rounded-lg px-3 py-1 mt-2 block">
        Agregar ingrediente
      </button>
    </>
  );
}
