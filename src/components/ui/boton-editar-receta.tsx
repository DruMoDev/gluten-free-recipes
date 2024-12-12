"use client";
import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const fireOptions: SweetAlertOptions = {
  title: "Funcionalidad no disponible",
  text: "Esta funcionalidad aún no está disponible.",
  icon: "info",
  position: "top-end",
  toast: true,
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
};

export default function BotonEditarReceta() {
  return (
    <button
      className="bg-primary text-white rounded-lg px-3 py-1"
      onClick={() => MySwal.fire(fireOptions)}>
      Editar
    </button>
  );
}
