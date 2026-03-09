import { useState, type SyntheticEvent } from "react";
import { useSetupProfile } from "../../hooks/useSetupProfile";
import toast from "react-hot-toast";
import { AuthLayout } from "../../layouts/AuthLayout";
import { ShieldCheck } from "lucide-react";
import { Input } from "../../components/CustomInputs/Input";

export const SetupProfile = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { completeSetup, isUpdating } = useSetupProfile();

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    await completeSetup({
      email,
      newPassword,
      confirmPassword,
    });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div
            className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl 
            flex items-center justify-center mb-4"
          >
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-2xl font-black text-slate-800">
            Asegura tu cuenta
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Como es tu primer ingreso, necesitamos que registres tu correo de
            MESA y crees una nueva contraseña
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isUpdating}
            required
          />

          <div className="grid grid-cols-1 gap-5">
            <Input
              label="Nueva contraseña"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isUpdating}
              required
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isUpdating}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isUpdating}
            className={`w-full py-3.5 rounded-xl font-bold text-white transition-all
                ${
                  isUpdating
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-[0.98] hover:cursor-pointer"
                }
              `}
          >
            {isUpdating ? "Guardando cambios..." : "Finalizar configuración"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
