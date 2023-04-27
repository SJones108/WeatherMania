import { useEffect, useState } from "react"
import { server_calls } from "../api/servers"

export const useGetData = () => {
    const [ stormData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    }, []) 

    return { stormData, getData:handleDataFetch }
}