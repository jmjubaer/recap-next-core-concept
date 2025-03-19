import Sidebar from "@/components/shere/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className='p-5'>{children}</div>
        </div>
    );
};

export default DashboardLayout;
