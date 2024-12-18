"use client";
import { crearReceta } from "@/actions/crear-receta";
import { useRef, useState } from "react";
import FormAñadirReceta from "./form-añadir-receta";
import { FormNuevaReceta } from "@/types/receta";

export default function AñadirNuevaRecetaFormulario() {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormNuevaReceta>({
    nombre: "",
    ingredientes: [],
    instrucciones: "",
    tiempoPreparacion: 0,
    dificultad: "Fácil",
    porciones: 1,
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async () => {
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
      tiempoPreparacion: 0,
      dificultad: "Fácil",
      porciones: 1,
    });
    formRef.current?.reset();
    await crearReceta(formDataSumit);
  };

  return (
    <section id="nueva-receta">
      {error && <p className="text-red-500">{error}</p>}
      <FormAñadirReceta
        onSubmit={handleFormSubmit}
        formRef={formRef}
        formData={formData}
        setFormData={setFormData}
        setError={setError}
      />
    </section>
  );
}
