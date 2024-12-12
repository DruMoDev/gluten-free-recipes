"use client"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);



export default function BotonVerMasReceta() {
  return (
    <button className="bg-accent text-white rounded-lg px-3 py-1" onClick={() => MySwal.fire({
  title: "Error",
  text: "No se pudo cargar la receta",
  icon: "error",
  confirmButtonText: "Aceptar",
})}>Ver</button>
  );
}
