import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function Header() {
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between items-center p-4 bg-white">
      <h1 className="text-lg font-semibold">Mixpanel lite</h1>

      <button
        onClick={() => handleLogout()}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
