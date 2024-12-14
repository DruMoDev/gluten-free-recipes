"use client";
import { crearReceta } from "@/actions/crear-receta";
import { FormEvent, useRef, useState } from "react";
import IngredientesInput from "./ingredientes-input";

interface Ingredientes {
  nombre: string;
  cantidad: string;
  medida: string;
}

type FormData = {
  nombre: string;
  ingredientes: Ingredientes[];
  instrucciones: string;
  tiempoPreparacion: string;
  dificultad: string;
  porciones: number;
};

export default function AñadirNuevaRecetaFormulario() {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    ingredientes: [],
    instrucciones: "",
    tiempoPreparacion: "",
    dificultad: "Fácil",
    porciones: 1,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataSumit = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        setError("Por favor, completa todos los campos.");
        return; // Salir de la función si hay un error
      }
      if (Array.isArray(value)) {
        
        const ingredientes = value.map(({ nombre, cantidad, medida }) => {
          return { nombre, cantidad, medida };
        });
        formDataSumit.append(key, ingredientes.join(","));
      } else {
        formDataSumit.append(key, value as string);
      }
    }

    setError(null);
    setFormData({
      nombre: "",
      ingredientes: [],
      instrucciones: "",
      tiempoPreparacion: "",
      dificultad: "Fácil",
      porciones: 1,
    });
    formRef.current?.reset();
    await crearReceta(formDataSumit);
  };

  return (
    <section id="nueva-receta">
      <form
        onSubmit={handleFormSubmit}
        ref={formRef}
        className="w-full lg:w-1/2">
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="mb-3">Añade una nueva receta</h3>

        <label>
          Nombre
          <input
            name="nombre"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
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
              setFormData({ ...formData, tiempoPreparacion: e.target.value })
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
              setFormData({ ...formData, dificultad: e.target.value })
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
    </section>
  );
}
