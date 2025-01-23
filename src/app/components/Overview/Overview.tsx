import React from "react";

const Overview = () => {
  return (
    <div
      style={{ marginTop: "-6rem", background: "white" }}
      className=" grid lg:grid-cols-3 grid-flow-row-dense grid-cols-1 md:grid-cols-2 gap-2 m-auto xl:max-w-[90%] max-w-[98%] rounded-xl my-10 border-[1px] md:py-6 px-4 shadow-md"
    >
      <div className="md:border-r-[1px] max-md:border-b-[1px] max-md:mb-3 max-md:py-5 md:px-5 col-span-2 md:col-span-1">
        <blockquote className="flex items-start pb-6 border-b-[1px] ">
          <img
            src="/images/ethereum-icon.png"
            alt=""
            className="w-8 mr-1 object-contain"
          />
          <blockquote>
            <h2 className="text-zinc-600 text-xs tracking-wide">ETHER PRICE</h2>
            <a className="cursor-pointer hover:text-sky-800 text-sm">
              $3,273.92 <span className="text-zinc-600">@ 0.03461 BTC</span>{" "}
              <span className="text-red-600 text-sm">(-0.97%)</span>
            </a>
          </blockquote>
        </blockquote>

        <blockquote className="flex items-start w-fit pt-6  ">
          <img
            src="/images/globe-icon.png"
            alt=""
            className="w-6 mr-3 object-contain "
          />
          <blockquote>
            <h2 className="text-zinc-600 text-xs tracking-wide">MARKET CAP</h2>
            <a className="cursor-pointer hover:text-sky-800 text-sm">
              $394,477,201,228.00
            </a>
          </blockquote>
        </blockquote>
      </div>

      <div className=" md:px-3 ">
        <blockquote className="flex items-start pb-6 justify-between  border-b-[1px]">
          <blockquote className="flex items-start  w-fit  ">
            <img
              src="/images/transaction-icon.png"
              alt=""
              className="w-6 mr-3 object-contain "
            />
            <blockquote>
              <h2 className="text-zinc-600 text-xs tracking-wide">
                TRANSACTIONS
              </h2>
              <a className="cursor-pointer hover:text-sky-800 text-sm">
                2,653.51 M <span className="text-zinc-600">(13.2 TPS)</span>
              </a>
            </blockquote>
          </blockquote>

          <blockquote className="text-right">
            <h2 className="text-zinc-600 text-xs   tracking-wide">
              MED GAS PRICE
            </h2>
            <a className="cursor-pointer hover:text-sky-800  text-sm">
              2.497 Gwei <span className="text-zinc-600">($0.17)</span>
            </a>
          </blockquote>
        </blockquote>

        <blockquote className="flex items-start pt-6 justify-between ">
          <blockquote className="flex items-start w-fit  ">
            <img
              src="/images/clock-icons.png"
              alt=""
              className="w-6 mr-3 object-contain "
            />
            <blockquote>
              <h2 className="text-zinc-600 text-xs tracking-wide">
                LAST FINALIZED BLOCK
              </h2>
              <p className="text-sm">21611073</p>
            </blockquote>
          </blockquote>

          <blockquote>
            <h2 className="text-zinc-600 text-xs text-right tracking-wide">
              LAST SAFE BLOCK
            </h2>
            <p className="text-right text-sm ">21611105</p>
          </blockquote>
        </blockquote>
      </div>

      <div className=" lg:border-l-[1px] max-lg:border-t-[1px] max-lg:mb-3 max-lg:py-5 lg:px-3  sm:max-lg:my-3 col-span-2 lg:col-span-1 ">
        <h2 className="text-zinc-600 text-xs tracking-wide pb-1">
          TRANSACTION HISTORY IN 14 DAYS
        </h2>
        <img
          src="/images/graph.png"
          alt=""
          className="object-contain block sm:max-lg:hidden"
        />
        <img
          src="/images/big-graph.png"
          alt=""
          className="object-contain hidden sm:max-lg:block "
        />
      </div>
    </div>
  );
};

export default Overview;
