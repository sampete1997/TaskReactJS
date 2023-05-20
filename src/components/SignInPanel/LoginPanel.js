import React, { useContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../../config/config";
import { useNavigate } from "react-router";
import { FetctedApiContext } from "../ContextFetchedData";
import { KEYS } from "../../constants";
import { settingCurrentUserData } from "../../activelocalData";

export const logOut = () => signOut(auth);
let authenticationChanged = 0;
let loggedInflag = false;

const LoginPanel = () => {
  const { getMeUserDetails, userDetails } = useContext(FetctedApiContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    loggedInflag = false;
    navigate("./dashboard");
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        loggedInflag = true;
        console.log("res", res);
      })
      .catch((e) => {
        console.log("error", e);
      });

    authenticationChanged++;
  };

  useEffect(() => {

    const userData = onAuthStateChanged(auth, (currentUser) => {
      getMeUserDetails(currentUser);
      settingCurrentUserData(currentUser);
      setUser(currentUser);
    });
  }, [authenticationChanged]);

  console.log("currentUser", userDetails);
  setTimeout(() => {
    if (userDetails?.emailVerified) {
      redirectToDashboard();
    }
  }, 500);

  return (
    <div className="bg-[#F5F5F5] w-full flex justify-center py-28">
      <div className="w-full p-8 lg:w-[50%] lg:p-4">
        <p className="text-[36px] font-[700]">Sign In</p>
        <p className="text-[16px] font-[400] mb-3">Sign in to your account</p>
        <div className="flex-col sm:flex-row flex justify-between items-center mt-5 mb-3">
          <div
            onClick={handleGoogleLogin}
            className="my-4 flex text-center cursor-pointer text-[#858585] text-[12px] font-[400] px-6 py-1.5 sm:my-0 bg-white border border-transparent rounded-xl"
          >
            <img src="/search.png" className="h-5 w-5" alt="#" />
            <span className="ml-2">Sign in with Google</span>
          </div>
          <div onClick={handleGoogleLogin} className="flex text-center font-[400] text-[#858585] text-[12px] px-6 py-1.5 bg-white border border-transparent rounded-xl cursor-pointer">
            <img src="/apple.png" className="h-5 w-5" alt="#" />
            <span className="ml-2"> Sign in with Apple</span>
          </div>
        </div>

        {/* login/sign-up Box*/}
        <div className="flex justify-center">
          <div className=" bg-white my-3 py-6 px-5 flex flex-col items-center w-full border border-transparent rounded-xl">
            <div className="w-full">
              <p className="py-2 px-1">Email address</p>
              <input
                type="email"
                className="bg-[#EAEAEA] p-2 w-full border border-transparent rounded-lg"
                placeholder="Enter Email Id"
              />
            </div>

            <div className="w-full py-3">
              <p className="py-2 px-1">Password</p>
              <input
                type="password"
                className="bg-[#EAEAEA] p-2 w-full border border-transparent rounded-lg"
                placeholder="Enter password"
              />
            </div>

            <p className="text-[#346BD4] w-full py-2">Forgot Password?</p>
            <button onClick={handleGoogleLogin} className="bg-black text-white font-[700] my-3 p-2 w-full border rounded-lg cursor-pointer">
              Sign In
            </button>
          </div>
        </div>

        <div className=" w-full flex justify-center font-[400] cursor-pointer">
          <p className="text-[#858585]">Don’t have an account?</p>
          <p className="text-[#346BD4] ml-2">Register here</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
