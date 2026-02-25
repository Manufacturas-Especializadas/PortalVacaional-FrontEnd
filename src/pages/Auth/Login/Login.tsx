import { useState, type SyntheticEvent } from "react";
import { AuthLayout } from "../../../layouts/AuthLayout";
import { Input } from "../../../components/CustomInputs/Input";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [payrollNumber, setPayrollNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ payrollNumber, password });
    navigate("/empleado-dashboard");
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
            />
          </div>

          <div>
            <Input
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
          text-white py-3 rounded-lg font-semibold transition 
            duration-200 hover:cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};
