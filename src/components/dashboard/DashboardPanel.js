import React from "react"

const DashboardPanel = () => {

    return (
        <div className=" w-full px-2 relative font-[700] border rounded-2xl bg-black text-white py-8 lg:w-[25%] sm:pl-12 md:w-2/3">
            <p className="text-[36px] mb-10">Board.</p>

            <div className="text-lg flex justify-start mb-5">
                <img src="/dashboard_icon.svg" alt="#"></img>
                <p className="ml-2 sm:ml-5">Dashboard</p>
            </div>

            <div className="text-lg font-[400] flex justify-start mb-5">
                <img src="/transaction_icon.svg" alt="#"></img>
                <p className="ml-2 sm:ml-5">Transactions</p>
            </div>

            <div className="text-lg font-[400] flex justify-start mb-5">
                <img src="/schedule_icon.svg" alt="#"></img>
                <p className="ml-2 sm:ml-5">Schedules</p>
            </div>

            <div className="text-lg font-[400] flex justify-start mb-5">
                <img src="/user_icon.svg" alt="#"></img>
                <p className="ml-2 sm:ml-5">Users</p>
            </div>

            <div className="text-lg font-[400] flex justify-start mb-5">
                <img src="/setting_icon.svg" alt="#"></img>
                <p className="ml-2 sm:ml-5">Settings</p>
            </div>

            <div className="absolute bottom-10 text-[14px] font-[400]">
                <p className="py-2">Help</p>
                <p className="py-2">Contact Us</p>
            </div>

        </div>
    )
}

export default DashboardPanel;