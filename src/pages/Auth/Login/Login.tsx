import { useState, type SyntheticEvent } from "react";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { Input } from "../../../components/CustomInputs/Input";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";

export const Login = () => {
  const [payrollNumber, setPayrollNumber] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!payrollNumber || !password) {
      toast.error("Por favor completa todos los campos");

      return;
    }

    await login({
      payRollNumber: Number(payrollNumber),
      password,
    });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Portal Vacacional
        </h1>

        <p className="text-gray-500 mb-8">Ingresa con tu número de nómina</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              label="Número de nómina"
              value={payrollNumber}
              onChange={(e) => setPayrollNumber(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div>
            <Input
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 
            rounded-xl font-bold transition-all duration-200 shadow-lg 
            shadow-blue-200 active:scale-[0.98] ${
              isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:cursor-pointer"
            }`}
          >
            {isLoading ? "Validando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
