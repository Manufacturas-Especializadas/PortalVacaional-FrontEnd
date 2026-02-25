import { LogOut } from "lucide-react";
import Logo from "../../assets/img/logomesa.png";

interface Props {
  userName: string;
  role: string;
  onLogout?: () => void;
}

export const Navbar = ({ userName, role, onLogout }: Props) => {
  return (
    <header className="w-full bg-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 min-w-fit">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold text-white">Portal Vacacional</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{userName}</p>
            <p className="text-xs text-white">{role}</p>
          </div>

          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full font-semibold">
            {userName.charAt(0).toUpperCase()}
          </div>

          <button
            onClick={onLogout}
            className="text-white hover:text-red-500 
            transition hover:cursor-pointer"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
