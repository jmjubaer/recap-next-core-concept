import Navbar from "@/components/shere/Navbar";
import React from "react";

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />

            {children}
        </div>
    );
};

export default layout;
