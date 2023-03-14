import React from "react"
import ErrorPageStyles from './ErrorPage.module.css'

const ErrorPage:React.FC = () =>{
    return <div data-testid='error-test' className={ErrorPageStyles.mainDiv}></div>
}

export default ErrorPage