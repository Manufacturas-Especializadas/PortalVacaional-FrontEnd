import { Check, X, Calendar, Clock } from "lucide-react";
import type { PendingRequest } from "../../types/types";
import { useState } from "react";
import { DecisionModal } from "../DecisionModal/DecisionModal";

interface ApprovalsListProps {
  requests: PendingRequest[];
  onDecision: (
    requestId: number,
    approved: boolean,
    comments: string,
  ) => Promise<void>;
}

export const ApprovalsList = ({ requests, onDecision }: ApprovalsListProps) => {
  const [selectedRequest, setSelectedRequest] = useState<{
    req: PendingRequest;
    type: "approve" | "reject";
  } | null>(null);

  const handleConfirm = async (comment: string) => {
    if (selectedRequest) {
      await onDecision(
        selectedRequest.req.requestId,
        selectedRequest.type === "approve",
        comment,
      );
      setSelectedRequest(null);
    }
  };

  if (requests.length === 0)
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-dashed border-slate-300">
        <p className="text-slate-500 font-medium">
          No tienes aprobaciones pendientes por ahora. ✨
        </p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {requests.map((req) => (
        <div
          key={req.requestId}
          className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm 
          hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-blue-50 flex items-center 
                justify-center text-blue-600 font-bold"
              >
                {req.employeeName.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 leading-tight">
                  {req.employeeName}
                </h3>
                <p className="text-xs text-slate-500">
                  Nómina: {req.payrollNumber}
                </p>
              </div>
            </div>
            <div
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full 
              text-xs font-bold"
            >
              {req.daysRequested} días
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar size={16} className="text-slate-400" />
              <span>
                {req.startDate} - {req.endDate}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock size={16} className="text-slate-400" />
              <span>Solicitado el: {req.requestedAt}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onDecision(req.requestId, true, "Aprobado")}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 
              text-white py-2.5 rounded-xl font-semibold transition-colors 
              flex items-center justify-center gap-2 hover:cursor-pointer"
            >
              <Check size={18} /> Aprobar
            </button>
            <button
              onClick={() => {
                const comment = prompt("Motivo del rechazo:");
                if (comment !== null)
                  onDecision(
                    req.requestId,
                    false,
                    comment || "Sin comentarios",
                  );
              }}
              className="flex-1 bg-white border border-rose-200 text-rose-600 
              hover:bg-rose-50 py-2.5 rounded-xl font-semibold transition-colors flex 
              items-center justify-center gap-2 hover:cursor-pointer"
            >
              <X size={18} /> Rechazar
            </button>
          </div>
        </div>
      ))}

      {selectedRequest && (
        <DecisionModal
          isOpen={!!setSelectedRequest}
          onClose={() => setSelectedRequest(null)}
          onConfirm={handleConfirm}
          employeeName={selectedRequest.req.employeeName}
          type={selectedRequest.type}
          title={
            selectedRequest.type === "approve"
              ? "Aprobar Vacaciones"
              : "Rechazar Vacaciones"
          }
        />
      )}
    </div>
  );
};
