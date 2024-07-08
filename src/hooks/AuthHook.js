import {useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import authenticationService from "../services/AuthenticationService";

function useAuth() {
    const queryClient = useQueryClient()

    const login = async (username, password) => {
        try {
            // useMutation('user', () => authenticationService.login(username, password), {
            // })
            // const userData = await authenticationService.login(username, password);
            // await queryClient.setQueryData('user', userData.data);
        } catch (error) {
            throw error;
        }
    }

    const logout = () => {
        queryClient.removeQueries('user');
    };

    return { login, logout };
}

export default useAuth;