import { useState } from "react"
import { useAuthContext } from './useAuthContext'
import axios from "axios";

export const useLogin = () => {
    const baseUrl = 'http://localhost:4000';
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    
    
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        try{
            const response = await axios.post(`${baseUrl}/api/users/login`, {
                email,
                password
            })

            const data = response.data;
            
            setIsLoading(false)

            localStorage.setItem('user', JSON.stringify(data))

            dispatch({type: 'LOGIN', payload: data})
            setError(null)
        }catch(error){
            setError(error.response.data.error)
            setIsLoading(false)
        }
    }
    return { login, isLoading, error}
}