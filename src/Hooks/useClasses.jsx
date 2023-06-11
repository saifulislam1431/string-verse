import {useQuery} from "@tanstack/react-query";
import Loading from "../Pages/LoadingPage/Loading";
import { useNavigation } from "react-router-dom";

const useClasses = () => {


    const{data: classes = [] , isLoading: loading , refetch} = useQuery({
        queryKey:["classes"],
        queryFn: async()=>{
            const res = await fetch("https://string-verse-server.vercel.app/popular-classes");
            return res.json()
        }
    })

    return [classes , loading ,refetch]
}

export default useClasses;