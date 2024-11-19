import { usePage } from "@inertiajs/react";

export const useAuth = () => {
    const { auth } = usePage().props;
    const userAuth = auth.user;
    console.log("User:", userAuth);
    return userAuth;
};
