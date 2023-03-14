import { RefObject, useEffect } from "react";

export const useOutSideClick = (ref: RefObject<HTMLElement>, callBack:CallableFunction) => {
    useEffect(()=> {
        const handleClick = (e:any) => {
            if (!ref.current?.contains(e.target)) {
                callBack()
            }
        }
        window.addEventListener('mousedown', handleClick)
        return () => window.removeEventListener("mousedown", handleClick)   
    },[])
}