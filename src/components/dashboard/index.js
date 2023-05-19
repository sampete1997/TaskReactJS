import React from "react";
import DashboardPanel from "./DashboardPanel";
import BoardCards from "../ExtraComponents/BoardCard";
import { Line } from "react-chartjs-2";
import { LineX } from "./LineX";
import { PieChart } from "./PieChart";

const Dashboard = () => {

    return (
        <div className="h-auto flex sm:h-auto m-[3vh]">
            <DashboardPanel />
            <div className="w-1/2 mx-4 sm:ml-10 sm:w-full">
                <BoardCards metric={
                    { totalRevenues: 789678, totalTransactions: 97979, totalLikes: 6979, totalUsers: 49078 }
                } />
                <div className="w-[100%] h-[40vh] bg-white p-3 border border-transparent rounded-2xl mt-10">
                    <LineX />
                </div>
                <div className="">
                    <div className="w-1/2 h-[30vh] p-5 border border-transparent rounded-2xl bg-white my-10 flex">
                        <PieChart />
                    </div>

                    <div></div>
                </div>
            </div>

        </div>

    )
}
export default Dashboard;