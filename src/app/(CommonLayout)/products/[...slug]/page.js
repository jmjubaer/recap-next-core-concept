import React from "react";

const CatchAllRoutes = async ({ params, searchParams}) => {
    const param = await params;
    // getting query params
    const searchParam = await searchParams;
    console.log(param, searchParam);
    return <div>Catch all Routes</div>;
};

export default CatchAllRoutes;
