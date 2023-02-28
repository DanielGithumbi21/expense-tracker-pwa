import React, { useState } from "react";
import { useLocalStorage } from 'usehooks-ts'

const DataContext = React.createContext({ setUser: (_value: any) => { }, user: { user: { name: "", email: "" }, jwt: "" } });
const DataProvider = ({ children }: any) => {
    const [user, setUser] = useLocalStorage("user", { user: { name: "", email: "" }, jwt: "" });

    return (
        <DataContext.Provider value={{ user, setUser }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };