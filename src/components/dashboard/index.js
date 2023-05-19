import React, { useContext, useEffect, useState } from "react";
import DashboardPanel from "./DashboardPanel";
import BoardCards from "../ExtraComponents/BoardCard";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import { randomColors, scheduleData } from "../../FakeJson/fakeApi";
import Scheduler from "./Schedule";
import { FetctedApiContext } from "../ContextFetchedData";
import { useNavigate } from "react-router";
import { logOut } from "../SignInPanel/LoginPanel";

const profileImgStyle = {
  position: "relative",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: 'url("https://www.svgrepo.com/show/61986/avatar.svg")',
};

const Dashboard = () => {
  const { fakeData, userDetails, getMeUserDetails } =
    useContext(FetctedApiContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    getMeUserDetails(null)
    setTimeout(() => {
      logOut();
      navigate("/");
    }, 500);
  };

  console.log("pro", userDetails);

  return (
    <div className="h-auto flex sm:m-[3vh]">
      <DashboardPanel />
      <div className="w-full mx-4 sm:ml-10">
        <div className="flex justify-between my-5">
          <div className="font-[700] text-[18px]">Dashboard</div>

          <div className="flex justify-end">
            <div className="flex bg-white px-3 py-1 rounded-2xl mx-4">
              <input
                type="text"
                className="text-sm w-[100px] outline-none"
                placeholder="search"
              />
              <img src="/Search icon (1).svg" alt="#" />
            </div>
            <img className="mx-4" src="/Vector (6).svg" alt="#" />
            <div>
              <div
                onClick={() => setShowProfile(true)}
                className="mx-4 w-8 h-8 rounded-[50%] border border-1 cursor-pointer"
                style={profileImgStyle}
              ></div>
              {showProfile && (
                <div className=" flex justify-between font-[500]text-center rounded-lg py-2 w-[150px] border border-1 bg-white absolute right-5 px-2">
                  <div>
                    <p className="font-[700] p-2">
                      {`Hi ${userDetails?.displayName || ""}!`}
                    </p>
                    <p className="p-2">Profile</p>
                    <p
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={handleLogOut}
                    >
                      Log out
                    </p>
                    <p className="p-2">Setting</p>
                  </div>

                  <p
                    className="cursor-pointer pl-1"
                    onClick={() => setShowProfile(false)}
                  >
                    ❌
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <BoardCards
          metric={{
            totalRevenues: 789678,
            totalTransactions: 97979,
            totalLikes: 6979,
            totalUsers: 49078,
          }}
        />

        <div className="w-[100%] bg-white p-3 border border-transparent rounded-2xl mt-10">
          <div className="px-5 my-4 flex justify-between">
            <div>
              <p className="text-[18px] font-[700]">Activities</p>
              <p className="text-[14px] font-[300] text-[#858585] mt-1">
                May - June 2021
              </p>
            </div>

            <div className="flex justify-end">
              {fakeData.map(({ price, title }, index) => (
                <div
                  className="flex justify-center items-center ml-2"
                  key={index + title + price}
                >
                  <div
                    className="w-3 h-3 rounded-full m-2"
                    style={{ backgroundColor: randomColors[index] }}
                  ></div>
                  <p className=" text-[14px] font-[700]">{title.slice(0, 5)}</p>
                </div>
              ))}
            </div>
          </div>
          <LineChart />
        </div>
        <div className="flex-none lg:flex">
          <div className="w-[100%] py-5 mt-10 mr-10 px-2 border border-transparent rounded-2xl bg-white lg:w-1/2">
            <div className="flex justify-between px-5">
              <p className="text-[18px] font-[700]">Top Product</p>
              <p className="text-[14px] font-[300] text-[#858585]">
                May - June 2021
              </p>
            </div>
            <PieChart />
          </div>
          <Scheduler scheduleData={scheduleData} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
