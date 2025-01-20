import React from "react";
import Overview from "../Overview/Overview";
import LatestBlocks from "../LatestBlocks/LatestBlocks";
import LatestTransactions from "../LatestTransactions/LatestTransactions";

const Main = () => {
  return (
    <>
      <Overview />
      <div className="flex max-lg:flex-col m-auto xl:max-w-[90%] max-w-[98%] justify-between">
        <LatestBlocks />
        <LatestTransactions />
      </div>
    </>
  );
};

export default Main;
