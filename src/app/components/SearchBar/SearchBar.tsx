"use client"

import { redirect } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = async () => {
    if (searchText) {
      await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify({
          address: searchText,
        }),
      });
      redirect("/404");
    }
  };

  return (
    <div className="bg-[#0f1624]">
      {/* Parent Div with Background Image */}
      <div
        className=" min-h-[300px] flex flex-col"
        style={{
          backgroundImage: 'url("/waves-light.svg")', // Replace with your image URL
        }}
      >
        <div className="pl-[5%] flex flex-col gap-3 pt-[2rem]">
          <div className="text-white text-[1.2rem] font-semibold">
            The Ethereum Blockchain Explorer
          </div>
          <div className="flex justify-center items-center gap-1 bg-white w-full  md:w-fit rounded-lg py-2 px-3">
            <div className="hidden sm:block">
              <select name="filters" id="filters" className="">
                <option value="All Filters">All Filters</option>
                <option value="Addresses">Addresses</option>
                <option value="Tokens">Tokens</option>
                <option value="Name tags">Name tags</option>
                <option value="Domain Names">Domain Names</option>
                <option value="Labels">Labels</option>
                <option value="Websites">Websites</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search by Address / Txn Hash / Block / Token"
                className="w-[80vw] xs:w-[80vw] sm:w-[65vw]  md:w-[40vw] h-9 rounded-md text-black px-4 "
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="p-3 bg-blue-400 rounded-lg text-white"
              >
                <IoIosSearch />
              </button>
            </div>
          </div>
          {/* <div className="mt-2 text-sm text-white">
            <span>Sponsored: </span>
            <img
              src="/treat.webp"
              alt="MetaWin Logo"
              className="inline-block w-4 h-4 mx-1"
            />
            <span>
              Meet TREAT: Shib&apos;s finale token with AI, Metaverse, DeFi &
              strong governance.
            </span>
            <a
              href="#"
              className="text-blue-400 font-semibold ml-1 hover:underline"
            >
              Find here.
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
