import { memo } from "react";
import IngredientesInput from "./ingredientes-input";
import { FormNuevaReceta } from "@/types/receta";

interface Props {
  onSubmit: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  formData: FormNuevaReceta;
  setFormData: (data: FormNuevaReceta) => void;
  setError: (error: string | null) => void;
}

function FormAñadirReceta({
  onSubmit,
  formRef,
  formData,
  setFormData,
  setError,
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="w-full lg:w-1/2">
      <h3 className="mb-3">Añade una nueva receta</h3>

      <label>
        Nombre
        <input
          name="nombre"
          type="text"
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className="rounded-lg px-3 py-1 border block w-full mt-1"
        />
      </label>

      <IngredientesInput
        formData={formData}
        setFormData={setFormData}
        setError={setError}
      />

      <label>
        Instrucciones
        <textarea
          name="instrucciones"
          className="rounded-lg px-3 py-1 border block w-full mt-1"
          onChange={(e) =>
            setFormData({ ...formData, instrucciones: e.target.value })
          }
        />
      </label>

      <label>
        Tiempo de preparación (en minutos)
        <input
          name="tiempoPreparacion"
          type="number"
          className="rounded-lg px-3 py-1 border block w-full mt-1"
          onChange={(e) =>
            setFormData({
              ...formData,
              tiempoPreparacion: parseInt(e.target.value),
            })
          }
        />
      </label>

      <label>
        Dificultad
        <select
          name="dificultad"
          defaultValue={"Fácil"}
          className="rounded-lg px-3 py-1 border block w-full mt-1"
          onChange={(e) =>
            setFormData({ ...formData, dificultad: e.target.value as "Fácil" | "Media" | "Difícil" })
          }>
          <option value="Fácil">Fácil</option>
          <option value="Media">Media</option>
          <option value="Difícil">Difícil</option>
        </select>
      </label>

      <label>
        Porciones
        <input
          name="porciones"
          defaultValue={1}
          type="number"
          className="rounded-lg px-3 py-1 border block w-full mt-1"
          onChange={(e) =>
            setFormData({ ...formData, porciones: parseInt(e.target.value) })
          }
        />
      </label>

      <button
        type="submit"
        className="bg-accent text-white rounded-lg px-3 py-1 mt-3">
        Crear receta
      </button>
    </form>
  );
}

export default memo(FormAñadirReceta);
