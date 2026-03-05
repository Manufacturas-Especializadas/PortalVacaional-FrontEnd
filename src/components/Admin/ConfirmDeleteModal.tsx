import { Trash } from "lucide-react";

interface Props {
  employeeName: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}

export const ConfirmDeleteModal = ({
  employeeName,
  onConfirm,
  onCancel,
  loading,
}: Props) => {
  return (
    <div
      className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm 
      flex items-center justify-center z-60 p-4"
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl border
        border-red-50 overflow-hidden"
      >
        <div className="p-6 text-center">
          <div
            className="h-14 w-14 bg-red-50 text-red-600 rounded-full flex items-center
            justify-center mx-auto mb-4"
          >
            <Trash size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Confirmar baja
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            ¿Estás seguro de que deseas dar de baja a{" "}
            <span className="font-bold text-slate-700">{employeeName}</span>
          </p>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 
              font-semibold text-slate-600 hover:bg-slate-50 transition-all
              hover:cursor-pointer disabled:opacity-50"
            >
              No, cancelar
            </button>
            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white 
              font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all
              active:scale-95 disabled:opacity-50 hover:cursor-pointer"
            >
              {loading ? "Procesando..." : "Sí, dar de baja"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
