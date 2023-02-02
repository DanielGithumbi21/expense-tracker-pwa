import React, { useState } from "react";
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'
import useMediaQuery from '@mui/material/useMediaQuery';


const DataContext = React.createContext({ open: true, businessId: null, smallScreen: false, setBusinessId: (_value: any) => { }, loggedUser: false, setLoggedUser: (_value: any) => { }, business: false, setBusiness: (_value: any) => { }, user: {}, setOpen: (_value: any) => { }, userName: '' });
const DataProvider = ({ children }: any) => {
    const smallScreen = useMediaQuery('(max-width:900px)');
    const [open, setOpen] = useState(true);
    const [business, setBusiness] = useLocalStorage("business", false);
    const user = useReadLocalStorage<any>("user")
    let userName = ''

    if (user !== null) {
        userName = user.data.user.name
    }
    const [businessId, setBusinessId] = useLocalStorage("businessID", null)
    const [loggedUser, setLoggedUser] = useLocalStorage("loggedUser", false);

    return (
        <DataContext.Provider value={{ open, setOpen, user, businessId, loggedUser, setLoggedUser, business, setBusiness, setBusinessId, userName, smallScreen }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };