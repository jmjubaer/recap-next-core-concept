import React from "react";

const DynamicRoutes = async ({ params, searchParams }) => {
    const param = await params;
    // getting query params
    const searchParam = await searchParams;
    console.log(param, searchParam);
    return <div>Dynamic routes</div>;
};

export default DynamicRoutes;
