import React from "react";

const LoginPanel = () => {

    return (
        <div className="bg-[#F5F5F5] w-full flex justify-center py-28">
            <div className=" w-[50%] p-4">
                <p className="text-[36px] font-[700]">
                    Sign In
                </p>
                <p className="text-[16px] font-[400] mb-3">
                    Sign in to your account
                </p>
                <div className="flex justify-between mt-5 mb-3">
                    <div className="flex text-center text-[#858585] text-[12px] font-[400] px-6 py-1.5 bg-white border border-transparent rounded-xl">
                        <img src="/search.png" className="h-5 w-5" alt="#"/>
                        <span className="ml-2">Sign in with Google</span>
                    
                    </div>
                    <div className="flex text-center font-[400] text-[#858585] text-[12px] px-6 py-1.5 bg-white border border-transparent rounded-xl">
                    <img src="/apple.png" className="h-5 w-5" alt="#"/>
                    <span className="ml-2"> Sign in with Apple</span>
                    </div>
                </div>

                {/* login/sign-up Box*/}
                <div className="flex justify-center">
                    <div className=" bg-white my-3 py-6 px-5 flex flex-col items-center w-full border border-transparent rounded-xl">

                        <div className="w-full">
                            <p className="py-2 px-1">Email address</p>
                            <input type="email" className="bg-[#EAEAEA] p-2 w-full border border-transparent rounded-lg"  placeholder="Enter Email Id" />
                        </div>

                        <div className="w-full py-3">
                            <p className="py-2 px-1">Password</p>
                            <input type="password" className="bg-[#EAEAEA] p-2 w-full border border-transparent rounded-lg" placeholder="Enter password" />
                        </div>

                        <p className="text-[#346BD4] w-full py-2">Forgot Password?</p>
                        <button className="bg-black text-white font-[700] my-3 p-2 w-full border rounded-lg">
                            Sign In
                        </button>

                    </div>
                </div>

                <div className=" w-full flex justify-center font-[400]">
                    <p className="text-[#858585]">Don’t have an account?</p>
                    <p className="text-[#346BD4] ml-2">Register here</p>
                </div>

            </div>
        </div>
    )
}

export default LoginPanel;