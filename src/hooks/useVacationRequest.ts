import { useState } from "react";
import { employeeService } from "../api/services/EmployeeService";
import toast from "react-hot-toast";

export const useVacationRequest = (onSuccess: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendRequest = async (formData: {
    startDate: string;
    endDate: string;
    days: string;
  }) => {
    setIsSubmitting(true);

    const payload = {
      startDate: new Date(formData.startDate + "T12:00:00").toISOString(),
      endDate: new Date(formData.endDate + "T12:00:00").toISOString(),
      requestedDays: parseInt(formData.days, 10),
    };

    try {
      await employeeService.requestVacation(payload);
      toast.success("Solicitud enviada con éxito");
      onSuccess();
      return true;
    } catch (error: any) {
      const serverMessage =
        error.response?.data?.message || "Error en la solicitud";
      console.error("Error del servidor:", error.response?.data);
      toast.error(serverMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendRequest, isSubmitting };
};
