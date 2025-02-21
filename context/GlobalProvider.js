import React, { createContext, useContext, useEffect, useState } from "react";
import { GetUser } from '@/logic/get-user';
import { getToken } from "@/logic/get-token";
import { clearAsyncStorage } from "@/logic/clear-token";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider=({children})=>{

    const [token,setToken] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user,setUser] = useState(null)
    const [grades,setGrades] = useState(null)
    const [academic,setAcademic] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [reports, setReports] = useState(null)
    const [applied, setApplied] = useState(null)
    useEffect(()=>{
        clearAsyncStorage().then(()=>{
        getToken().then(
            (getToken)=>{
                console.log("Global Provider Token : ",getToken)
                setToken(getToken)
            if(getToken){
                GetUser(getToken).then((res)=>{
                console.log("Global Provider User : ",res)
                if(res.success){
                    setUser(res.data.user)
                    setGrades(res.data.grades)
                    setAcademic(res.data.academic)
                    setIsLoggedIn(()=>true)
                    console.log("IsLoggedIN: ",isLoggedIn)
                    console.log(user)
                }else{
                    setIsLoggedIn(false)
                    setToken(null)
                    setUser(null)
                }
            }).catch((err)=>{
                console.log("ERROR: token error",err)
            })
        }
    }
    ).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        setIsLoading(false)
    }
    )})},[])
    return(
        <GlobalContext.Provider
        value={{
            isLoggedIn,
            setIsLoggedIn,
            token,
            setToken,
            user,
            setUser,
            grades,
            academic,
            setGrades,
            setAcademic,
            reports,
            setReports,
            applied,
            setApplied,
            isLoading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider