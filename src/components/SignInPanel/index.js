import React, { } from "react";
import LoginPanel from "./LoginPanel";


const LoginScreen = () => {
    return (
        <div className="flex h-[100vh]">
            <div className="hidden font-[700] w-2/3 text-[72px] bg-black text-white sm:flex justify-center items-center">
                Board.
            </div>
            <LoginPanel/>
        </div>
    )
}

export default LoginScreen;