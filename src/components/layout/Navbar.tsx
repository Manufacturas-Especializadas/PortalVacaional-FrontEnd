import { LogOut } from "lucide-react";
import Logo from "../../assets/img/logomesa.png";

interface Props {
  userName: string;
  role: string;
  onLogout?: () => void;
}

export const Navbar = ({ userName, role, onLogout }: Props) => {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-white/80 
      backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="p-1 rounded-lg transition-colors group-hover:bg-slate-50">
              <img
                src={Logo}
                alt="MESA Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block h-6 w-px bg-slate-200" />{" "}
            <h1 className="text-lg font-semibold tracking-tight text-slate-800">
              Portal <span className="text-blue-600">Vacacional</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-semibold text-slate-700 leading-tight">
                {userName}
              </span>
              <span
                className="text-[11px] font-medium uppercase tracking-wider 
                text-blue-600"
              >
                {role}
              </span>
            </div>

            <div className="relative group">
              <div
                className="w-10 h-10 bg-slate-100 border-2 
                border-blue-600/20 text-blue-600 flex items-center 
                justify-center rounded-xl font-bold transition-all 
                group-hover:bg-blue-600 group-hover:text-white shadow-sm"
              >
                {userName.charAt(0).toUpperCase()}
              </div>
            </div>

            <button
              onClick={onLogout}
              title="Cerrar sesión"
              className="p-2 text-slate-400 hover:text-red-500 
              hover:bg-red-50 rounded-lg transition-all duration-200 
              ease-in-out border border-transparent hover:border-red-100
              hover:cursor-pointer"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
