import React, { Suspense } from "react";

const Navigation = React.lazy(() => import("../components/Navigation"));
const Error404 = React.lazy(() => import("../components/Error404"));

const Error = () => {
  return (
    <div className="error">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Error404 />
      </Suspense>
    </div>
  );
};

export default Error;
