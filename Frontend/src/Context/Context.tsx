/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

const AppContext = createContext<unknown>(null);

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    const [country, setCountry] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const res = await axios.get("http://ip-api.com/json/");
                setCountry(res.data.country)
            } catch (error) {
                console.log(error);
            }
        }
        fetchCountry();
    }, [])

    return <AppContext.Provider value={{ country }}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);