import {useQuery} from "@tanstack/react-query";
import petService from "../services/PetService";

export const usePetInfo = (searchParameter, enabled = true) => {
    return useQuery({
        queryKey: ['petInfo', searchParameter],
        queryFn: () => petService.getPetInfoBySearchParameter(searchParameter),
        select: ({data}) => data,
        enabled: enabled,
        retry: false
    })
}