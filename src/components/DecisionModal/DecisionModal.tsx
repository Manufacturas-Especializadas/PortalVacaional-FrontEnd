import { X } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (comment: string) => void;
  title: string;
  type: "approve" | "reject";
  employeeName: string;
}

export const DecisionModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  type,
  employeeName,
}: Props) => {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center 
      justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full
        max-w-md overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors
            hover:cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-slate-600">
            Estás a punto {type === "approve" ? "aprobar" : "rechazar"} la
            solicitud de
            <span className="font-bold text-slate-800">{employeeName}</span>
          </p>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Comentarios {type === "reject"}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-xl border-slate-200 focus:ring-blue-500 
              focus:border-blue-500 min-h-25 p-3 border"
              placeholder={
                type === "approve"
                  ? "Ej: Disfruta tus vacaciones..."
                  : "Explica el motivo del rechazo..."
              }
            />
          </div>
        </div>

        <div className="p-6 bg-slate-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-slate-600 
            bg-white border border-slate-200 hover:bg-slate-50 transition-colors
            hover:cursor-pointer"
          >
            Cancelar
          </button>
          <button
            disabled={type === "reject" && !comment.trim()}
            onClick={() => onConfirm(comment)}
            className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-white transition-all shadow-lg ${
              type === "approve"
                ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-100"
                : "bg-rose-500 hover:bg-rose-600 shadow-rose-100 disabled:opacity-50"
            } hover:cursor-pointer`}
          >
            Confirmar {type === "approve" ? "Aprobación" : "Rechazo"}
          </button>
        </div>
      </div>
    </div>
  );
};
