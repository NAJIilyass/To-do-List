import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (  
        <header>
            <div className="bg-white py-6 px-6 flex justify-between">
                <Link to="/">
                    <p className="text-2xl font-semibold mt-2">To-Do List</p>
                </Link>
                <nav>
                    {user && (
                        <div className="flex gap-12">
                            <span className="tracking-widest mt-2.5">{user.email}</span>
                            <button onClick={handleClick} className="border-2 py-2 px-4 rounded bg-green border-green text-white font-bold">Log out</button>
                        </div>
                    )}
                    
                    {!user && (
                        <div className="flex gap-5">
                            <Link to="/login" className="border-2 py-2 px-4 rounded border-green font-bold">Login</Link>
                            <Link to="/signup" className="border-2 py-2 px-4 rounded bg-green border-green text-white font-bold">Sign up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;