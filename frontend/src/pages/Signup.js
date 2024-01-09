import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <div className="h-[80vh] flex items-center">
            <form className="border-2 p-10 rounded-xl grid grid-cols-1 gap-5 w-fit mx-auto" onSubmit={handleSubmit}>
                <h3 className="text-3xl mx-6 mb-6 font-extrabold text-yellow-500">Sign up</h3>

                <div className="grid grid-cols-2 gap-y-10 gap-x-0">
                    <label className="text-lg mt-2 font-normal text-white">Email :</label>
                    <input 
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="border tracking-wide text-lg border-gray-400 rounded px-4 py-2 w-11/12 mx-auto"
                    />

                    <label className="text-lg mt-2 font-normal text-white">Password :</label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="border tracking-wide text-lg border-gray-400 rounded px-4 py-2 w-11/12 mx-auto"
                    />
                </div>

                <button className="bg-green mt-8 text-lg font-normal text-white rounded px-4 py-2 w-1/2 mx-auto" disabled={isLoading}>Sign up</button>
                {error && (
                    <div className="text-red-600 text-center w-full mt-4">
                        <p>{error}</p>
                    </div>
                )}
            </form>
        </div>
     );
}

export default Signup;