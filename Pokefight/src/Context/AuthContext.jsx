import { useState, createContext } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const toggleAuth = () => {
        setIsAuthenticated(!isAuthenticated);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}