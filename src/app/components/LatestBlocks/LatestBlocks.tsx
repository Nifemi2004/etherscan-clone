"use client"
import React, { useEffect } from "react";

interface IBlocksData {
  txnId: string;
  txnUsername: string;
  txnTimeAgo: string;
  txnTotalCount: string;
  ethCount: string;
}

const blocksData: IBlocksData[] = [
  {
    txnId: "21648411",
    txnUsername: "Titan Builder",
    txnTimeAgo: "6",
    txnTotalCount: "285",
    ethCount: "0.03841",
  },
  {
    txnId: "21652043",
    txnUsername: "beaverbuild",
    txnTimeAgo: "18",
    txnTotalCount: "242",
    ethCount: "0.01999",
  },
  {
    txnId: "21652042",
    txnUsername: "Titan Builder",
    txnTimeAgo: "30",
    txnTotalCount: "285",
    ethCount: "0.0426",
  },
  {
    txnId: "21652041",
    txnUsername: "0x22eEC85b...D9c6fa778",
    txnTimeAgo: "42",
    txnTotalCount: "105",
    ethCount: "0.00852",
  },
  {
    txnId: "21652040",
    txnUsername: "Titan Builder",
    txnTimeAgo: "54",
    txnTotalCount: "145",
    ethCount: "0.03085",
  },
  {
    txnId: "21652039",
    txnUsername: "Titan Builder",
    txnTimeAgo: "60",
    txnTotalCount: "314",
    ethCount: "0.04834",
  },
];

const LatestBlocks = () => {
  useEffect(() => {
    const rows = document.querySelectorAll(".blockRow");
    rows.forEach((row, idx) => {
      if (idx === rows.length - 1) {
        (row as HTMLElement).style.borderBottom = "none"; // Remove border for the last .blockRow
      } else {
        (row as HTMLElement).style.borderBottom = "1px solid #e9ecef"; // Apply border for other rows
      }
    });
  }, []);

  return (
    <div className=" lg:w-[49.4%] rounded-xl  border-[1px] shadow-md max-xl:mb-4 mb-[4rem]">
      <div className="flex justify-between px-3 py-4 border-b-[1px]">
        <h2 className="font-medium" style={{ fontWeight: "bold" }}>
          Latest Blocks
        </h2>
        <button className="flex text-sm items-center justify-evenly w-24 py-1 border-[1px] rounded-md hover:bg-zinc-100">
          <img src="/images/transaction-icon.png" alt="" className="w-4" />
          <span>Customize</span>
        </button>
      </div>

      {blocksData.map((block, idx) => {
        return (
          <div
            key={idx}
            className="flex max-sm:flex-col justify-between mx-4 py-4 blockRow"
          >
            <div className="flex xl:mr-28 mr-20 max-sm:justify-between max-sm:mr-0 items-center">
              <blockquote className="bg-zinc-50 w-fit  rounded-xl mr-2">
                <img src="/images/cube-icon.png" alt="" className="w-6 m-4 " />
              </blockquote>
              <blockquote>
                <a className="text-sky-600 hover:text-sky-800 cursor-pointer">
                  {block.txnId}
                </a>
                <p className="text-zinc-500 text-[13px]">
                  {block.txnTimeAgo} secs ago
                </p>
              </blockquote>
            </div>

            <div className="flex justify-between  grow items-center">
              <blockquote className="text-sm">
                <h2>
                  Miner{" "}
                  <a
                    href=""
                    className="text-sky-600 hover:text-sky-800 cursor-pointer"
                  >
                    {block.txnUsername}
                  </a>
                </h2>
                <a
                  href=""
                  className="text-sky-600 hover:text-sky-800 cursor-pointer"
                >
                  {block.txnTotalCount} txns
                </a>
                <span> in 12 secs</span>
              </blockquote>
              <button
                style={{ fontWeight: "bold" }}
                className="py-1 border-[1px] rounded-md px-2 text-xs font-medium h-fit cursor-default"
              >
                {block.ethCount} Eth
              </button>
            </div>
          </div>
        );
      })}

      <div
        style={{
          borderBottomLeftRadius: ".75rem",
          borderBottomRightRadius: ".75rem",
        }}
        className="text-xs text-zinc-500 font-medium border-t-[1px] px-3 py-4 text-center bg-zinc-50 hover:text-sky-800 cursor-pointer"
      >
        <a href="" className="uppercase">
          view all blocks <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default LatestBlocks;
