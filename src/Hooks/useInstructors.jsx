import {useQuery} from "@tanstack/react-query"
import axios from 'axios';
const useInstructors = () => {
    const{data: instructors=[] , isLoading: loading , refetch}=useQuery({
        queryKey:["instructors"],
        queryFn: async()=>{
            const res = await fetch("https://string-verse-server.vercel.app/popular-instructors");
            return res.json();
        }
    })
    return [instructors , loading , refetch]
};

export default useInstructors;