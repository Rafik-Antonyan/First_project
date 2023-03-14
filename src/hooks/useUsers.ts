import { UserType } from './../types/UserType';
import { useEffect, useState } from "react";
import { getUsers } from "../services/users";

export const useUsers = () => {
    const [isRequest, setIsRequest] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const deleteUser = (id: string) => {
        setUsers((state) => {
            return state.filter((user:UserType) => user.id !== id)
        })
    }

    useEffect(() => {
        getUsers(setUsers, setIsRequest, setError)
    }, [])

    return { isRequest, users, error, deleteUser }
}