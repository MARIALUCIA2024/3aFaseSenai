import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  MdDashboard,
  MdExitToApp,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaUserPlus, FaListAlt, FaCalendarCheck } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const SideMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`h-screen bg-cyan-800 text-white flex flex-col justify-between transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
        }`}
    >
      {/* TOPO - Botão de Toggle */}
      <div className="p-4 flex items-center justify-between border-b border-cyan-700">
        {!isCollapsed && (
          <h1 className="text-lg font-bold tracking-wide">Clínica+</h1>
        )}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-cyan-300 focus:outline-none"
        >
          {isCollapsed ? <MdMenu size={24} /> : <MdClose size={24} />}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
        <ul className="space-y-3">
          <li>


            <NavLink
              to="/dashboard"
              end

              className={({ isActive }) => isActive ? "text-cyan-300 font-bold flex" : "text-white flex"}>

              <MdDashboard size={20} />
              {!isCollapsed && <span>Início</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/prontuarios"
              end
              className={({ isActive }) => isActive ? "text-cyan-300 font-bold flex" : "text-white flex"}>

              <FaListAlt size={18} />
              {!isCollapsed && <span>Prontuários</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pacientes"
              end
              className={({ isActive }) => isActive ? "text-cyan-300 font-bold flex" : "text-white flex"}>

              <FaUserPlus size={18} />
              {!isCollapsed && <span>Pacientes</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/consultas"

              className={({ isActive }) => isActive ? "text-cyan-300 font-bold flex" : "text-white flex"}>



              <FaCalendarCheck size={18} />
              {!isCollapsed && <span>Consultas</span>}
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/exames"
              end

              className={({ isActive }) => isActive ? "text-cyan-300 font-bold flex" : "text-white flex"}>
          
              <FaListAlt size={18} />
              {!isCollapsed && <span>Exames</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* BOTÃO SAIR */}
      <div className="p-4 border-t border-cyan-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-300 hover:text-red-500 w-full"
        >
          <MdExitToApp size={20} />
          {!isCollapsed && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;
