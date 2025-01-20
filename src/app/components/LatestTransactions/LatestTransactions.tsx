import React, { useEffect } from "react";

interface ITxnData {
  id: string;
  timeAgo: string;
  from: string;
  to: string;
  eth: string;
}

const txnData: ITxnData[] = [
  {
    id: "0x24029b0845...",
    timeAgo: "13",
    from: "0x95222290...5CC4BAfe5",
    to: "0x8880bb98...4A06afA38",
    eth: "0.02015",
  },
  {
    id: "0x2f41ecd1f6b...",
    timeAgo: "13",
    from: "0x77d3599b...Ebeab6673",
    to: "0x790B2cF2...560d28371",
    eth: "0",
  },
  {
    id: "0xb884650d2d...",
    timeAgo: "13",
    from: "0x2ac84A99...52ACDB547",
    to: "0x00000000...072C22734",
    eth: "0.15103",
  },
  {
    id: "0x67edc48cb0...",
    timeAgo: "13",
    from: "0x09739f24...63d7AF562",
    to: "0x3a23F943...c94Cb97a5",
    eth: "0.15106",
  },
  {
    id: "0x76756d039e...",
    timeAgo: "13",
    from: "0xA0c684f9...3DcC6d47a",
    to: "0x11111112...73A960582",
    eth: "0.04833",
  },
  {
    id: "0xa68088bb99...",
    timeAgo: "13",
    from: "0xFb37A6BC...a59CEa02c",
    to: "0x11111112...73A960582",
    eth: "0",
  },
];

const LatestTransactions = () => {
  useEffect(() => {
      const rows = document.querySelectorAll(".txnRow");
      rows.forEach((row, idx) => {
        if (idx === rows.length - 1) {
          row.style.borderBottom = "none"; // Remove border for the last .blockRow
        } else {
          row.style.borderBottom = "1px solid #e9ecef"; // Apply border for other rows
        }
      });
    }, []);
    
  return (
    <div className="lg:w-[49.4%] rounded-xl border-[1px] shadow-md">
      <div className="flex justify-between px-3 py-4 border-b-[1px]">
        <h2 className="font-medium" style={{ fontWeight: "bold" }}>
          Latest Transactions
        </h2>
        <button className="flex text-sm items-center justify-evenly w-24 py-1 border-[1px] rounded-md hover:bg-zinc-100">
          <img src="/images/transaction-icon.png" alt="" className="w-4" />
          <span>Customize</span>
        </button>
      </div>

      {txnData.map((txn, idx) => {
        return (
          <div
            key={idx}
            className="flex max-sm:flex-col justify-between mx-4 py-4 txnRow"
          >
            <div className="flex max-sm:justify-between max-sm:mr-0   lg:mr-20 mr-24 items-center">
              <blockquote className="bg-zinc-50 w-fit  rounded-xl mr-2">
                <img
                  src="/images/transaction.png"
                  alt=""
                  className="w-6 m-4 "
                />
              </blockquote>
              <blockquote>
                <a className="text-sky-600 hover:text-sky-800 cursor-pointer text-sm">
                  {txn.id}
                </a>
                <p className="text-zinc-500 text-[13px]">
                  {txn.timeAgo} secs ago
                </p>
              </blockquote>
            </div>

            <div className="flex justify-between  grow items-center">
              <blockquote className="text-sm">
                <h2>
                  From{" "}
                  <a
                    href=""
                    className="text-sky-600 hover:text-sky-800 cursor-pointer"
                  >
                    {txn.from}
                  </a>
                </h2>
                <h2>
                  To{" "}
                  <a
                    href=""
                    className="text-sky-600 hover:text-sky-800 cursor-pointer"
                  >
                    {txn.to}
                  </a>
                </h2>
              </blockquote>
              <button style={{ fontWeight: 'bold' }} className="py-1 border-[1px] rounded-md px-2 text-xs font-medium h-fit cursor-default">
                {txn.eth} Eth
              </button>
            </div>
          </div>
        );
      })}

      <div
        style={{
          borderBottomLeftRadius: ".75rem",
          borderBottomRightRadius: ".75rem",
          marginTop: "1rem",
        }}
        className="text-xs text-zinc-500 font-medium border-t-[1px] px-3 py-4 text-center bg-zinc-50 hover:text-sky-800 cursor-pointer"
      >
        <a href="" className="uppercase">
          view all transactions <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default LatestTransactions;
