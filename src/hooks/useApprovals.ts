import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import type { PendingRequest } from "../types/types";
import { managerService } from "../api/services/ManagerService";

export const useApprovals = () => {
  const [requests, setRequests] = useState<PendingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPending = async () => {
    setLoading(true);
    try {
      const data = await managerService.getRequestPending();
      setRequests(data);
    } catch (error) {
      toast.error("Error al cargar solicitudes pendientes");
    } finally {
      setLoading(false);
    }
  };

  const handleDecision = async (
    requestId: number,
    approved: boolean,
    comments: string,
  ) => {
    try {
      await managerService.approvalsRequest({ requestId, approved, comments });
      toast.success(approved ? "Solicitud aprobada" : "Solicitud rechazada");
      await fetchPending();
    } catch (error) {
      toast.error("No se pudo procesar la decisión");
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  return { requests, loading, handleDecision, refresh: fetchPending };
};
