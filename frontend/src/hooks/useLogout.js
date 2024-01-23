import { useAuthContext } from "./useAuthContext"
import { useTasksContext } from "./useTasksContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchTasks} = useTasksContext()

    const logout = () => {
        //Remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        dispatchTasks({ type: 'SET_TASKS', payload: null })
    }

    return {logout}
}