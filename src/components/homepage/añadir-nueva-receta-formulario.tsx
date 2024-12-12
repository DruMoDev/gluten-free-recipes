"use client";
import { crearReceta } from "@/actions/crear-receta";
import { FormEvent, useRef } from "react";
import { useState } from "react";

export default function AñadirNuevaRecetaFormulario() {
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let canSubmit = true;
    formData.values().forEach((value) => {
      if (!value) {
        canSubmit = false;
      }
    });
    if (!canSubmit) {
      setError("Por favor, rellena todos los campos.");
      return;
    }
    setError(null);
    formRef.current?.reset();
    await crearReceta(formData);
  };
  return (
    <section id="nueva-receta">
      <form onSubmit={handleFormSubmit} ref={formRef}>
        {error && <p className="text-red-500">{error}</p>}
        <h3 className="mb-3">Añade una nueva receta</h3>
        <label>
          Nombre
          <input
            name="nombre"
            type="text"
            className=" rounded-lg px-3 py-1 border block w-full mt-1"
          />
        </label>
        <label>
          Ingredientes (separados por comas y sin espacios)
          <input
            name="ingredientes"
            type="text"
            className=" rounded-lg px-3 py-1 border block w-full mt-1"
          />
        </label>
        <label>
          Instrucciones
          <input
            name="instrucciones"
            type="text"
            className=" rounded-lg px-3 py-1 border block w-full mt-1"
          />
        </label>
        <label>
          Tiempo de preparación (en minutos)
          <input
            name="tiempoPreparacion"
            type="number"
            className=" rounded-lg px-3 py-1 border block w-full mt-1"
          />
        </label>
        <label>
          Dificultad
          <select
            name="dificultad"
            defaultValue={"Fácil"}
            className=" rounded-lg px-3 py-1 border block w-full mt-1">
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
            className=" rounded-lg px-3 py-1 border block w-full mt-1"
          />
        </label>
        <button
          type="submit"
          className="bg-primary text-white rounded-lg px-3 py-1 mt-3">
          Crear receta
        </button>
      </form>
    </section>
  );
}
