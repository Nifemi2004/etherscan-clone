"use client";

import React, { useState } from "react";
import { FaEthereum, FaUserCircle } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const dropdownContent: Record<string, any> = {
    Blockchain: (
      <ul className="flex flex-col space-y-1">
        <li>
          <a className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md">
            Transactions
          </a>
        </li>
        <li>
          <a
            href="/txsPending"
            id="LI16"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Pending Transactions
          </a>
        </li>
        <li>
          <a
            href="/txsInternal"
            id="LI14"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Contract Internal Transactions
          </a>
        </li>

        <li>
          <a
            href="/txsBeaconDeposit"
            id="LI22"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Beacon Deposits
          </a>
        </li>

        <li>
          <a
            href="/txsBeaconWithdrawal"
            id="LI_BeaconWithdrawals"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Beacon Withdrawals
          </a>
        </li>
        <li>
          <a
            href="/txsBlobs"
            id="LI_txsBlobs"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            View Blobs
          </a>
        </li>

        <li>
          <a
            href="/txsAA"
            id="LITxsAA"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            AA Transactions{" "}
            <span className="badge border bg-light text-muted">Beta</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/blocks"
            id="LI_blocks"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            View Blocks
          </a>
        </li>
        <li>
          <a
            href="/blocks_forked"
            id="LI_blocks2"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Forked Blocks (Reorgs)
          </a>
        </li>

        <li>
          <a
            href="/uncles"
            id="LI8"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Uncles
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/accounts"
            id="LI_accountall"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Top Accounts
          </a>
        </li>
        <li>
          <a
            href="/contractsVerified"
            id="LI_contract_verified"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Verified Contracts
          </a>
        </li>
      </ul>
    ),
    Tokens: (
      <div>
        <div className="flex flex-col space-y-1">
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Top Tokens (ERC-20)
          </a>
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Token Transfer (ERC-20)
          </a>
        </div>
      </div>
    ),
    NFTs: (
      <div>
        <div className="mt-2">
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Top NFTs
          </a>
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Top Mints
          </a>
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Latest Trades
          </a>
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Latest Transfers
          </a>
          <a
            href="#"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Latest Mints
          </a>
        </div>
      </div>
    ),
    Resources: (
      <ul className="flex flex-col space-y-1">
        <li>
          <a className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md">
            Charts And Stats
          </a>
        </li>
        <li>
          <a
            href="/txsPending"
            id="LI16"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Statistics
          </a>
        </li>
        <li>
          <a
            href="/txsInternal"
            id="LI14"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Leaderboard
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/blocks"
            id="LI_blocks"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Directory
          </a>
        </li>
        <li>
          <a
            href="/blocks_forked"
            id="LI_blocks2"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Newsletter
          </a>
        </li>

        <li>
          <a
            href="/uncles"
            id="LI8"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Knowledge Base
          </a>
        </li>
      </ul>
    ),
    Developers: (
      <ul className="flex flex-col space-y-1">
        <li>
          <a className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md">
            API Plans
          </a>
        </li>
        <li>
          <a
            href="/txsPending"
            id="LI16"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            API Documentation
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/txsAA"
            id="LITxsAA"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Code Reader
            <span className="badge border bg-light text-muted">Beta</span>
          </a>
        </li>
        <li>
          <a
            href="/txsInternal"
            id="LI14"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Verify Contract
          </a>
        </li>

        <li>
          <a
            href="/txsBeaconDeposit"
            id="LI22"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Similar contract Search
          </a>
        </li>

        <li>
          <a
            href="/txsBeaconWithdrawal"
            id="LI_BeaconWithdrawals"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Smart Contract Search
          </a>
        </li>
        <li>
          <a
            href="/txsBlobs"
            id="LI_txsBlobs"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Contract Diff Checker
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            href="/blocks"
            id="LI_blocks"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Vyper Online Compiler
          </a>
        </li>
        <li>
          <a
            href="/blocks_forked"
            id="LI_blocks2"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Byte Code To Opcode
          </a>
        </li>

        <li>
          <a
            href="/uncles"
            id="LI8"
            className="block text-sm hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            Broacast Transaction
          </a>
        </li>
      </ul>
    ),
    More: (
      <div className="flex sm:flex-wrap gap-5 bg-white p-5 shadow-lg rounded-lg w-full max-w-screen-xl mx-auto space-x-5 text-[.83515625rem]">
        {/* Left Section: Tools & Services */}
        <div className="flex flex-col bg-gray-100 rounded-lg p-5 w-1/4">
          <h6 className="text-gray-800 font-semibold text-lg mb-2">
            Tools & Services
          </h6>
          <p className="text-gray-600 text-sm mb-8">
            Discover more of Etherscan's tools and services in one place.
          </p>
          <div className="mt-auto">
            <p className="text-gray-400 text-xs mb-2">Sponsored</p>
            <a
              href="https://chat.blockscan.com"
              target="_blank"
              className="text-blue-500 text-sm font-medium"
            >
              Blockscan Chat
            </a>
          </div>
        </div>

        {/* Middle Section: Tools */}
        <div className="flex-1 px-5">
          <h6 className="text-gray-800 font-semibold text-lg mb-3">Tools</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/inputdatadecoder"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-file-alt mr-2"></i> Input Data Decoder
                <span className="ml-1 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Beta
                </span>
              </a>
            </li>
            <li>
              <a
                href="/unitconverter"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-arrows-alt mr-2"></i> Unit Converter
              </a>
            </li>
            <li>
              <a
                href="/exportData"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-download mr-2"></i> CSV Export
              </a>
            </li>
            <li>
              <a
                href="/balancecheck-tool"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-file-invoice-dollar mr-2"></i> Account
                Balance Checker
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section: Explore */}
        <div className="flex-1 px-5">
          <h6 className="text-gray-800 font-semibold text-lg mb-3">Explore</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/gastracker"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-gas-pump mr-2"></i> Gas Tracker
              </a>
            </li>
            <li>
              <a
                href="/dex"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-exchange-alt mr-2"></i> DEX Tracker
              </a>
            </li>
            <li>
              <a
                href="/nodetracker"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-server mr-2"></i> Node Tracker
              </a>
            </li>
            <li>
              <a
                href="/labelcloud"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-tags mr-2"></i> Label Cloud
              </a>
            </li>
            <li>
              <a
                href="/name-lookup"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-search mr-2"></i> Domain Name Lookup
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Services */}
        <div className="flex-1 px-5">
          <h6 className="text-gray-800 font-semibold text-lg mb-3">Services</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="/tokenapprovalchecker"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-shield-alt mr-2"></i> Token Approvals
                <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Beta
                </span>
              </a>
            </li>
            <li>
              <a
                href="/verifiedSignatures"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-signature mr-2"></i> Verified Signature
              </a>
            </li>
            <li>
              <a
                href="/idm"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-comments mr-2"></i> Input Data Messages
                (IDM)
                <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Beta
                </span>
              </a>
            </li>
            <li>
              <a
                href="/advanced-filter"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-filter mr-2"></i> Advanced Filter
                <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Beta
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://chat.blockscan.com"
                target="_blank"
                className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
              >
                <i className="fas fa-comments mr-2"></i> Blockscan Chat
                <i className="fas fa-external-link-alt text-gray-400 ml-2"></i>
                <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                  Beta
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <header className="bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-6 py-2 text-sm bg-gray-100 ">
        <div className="flex items-center gap-4 text-[0.8rem] ml-[4.201%]">
          <span>
            ETH Price:{" "}
            <strong className="text-green-600">$3,484.07 (+5.66%)</strong>
          </span>
          <span>
            Gas: <strong className="text-blue-600">8.395 Gwei</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 mr-[4.401%]">
          <button className="text-black text-[15px] p-2 border rounded-md hover:bg-gray-200">
            <FiBookOpen />
          </button>
          <button className="text-blue-400 text-[15px] p-2 border rounded-md hover:bg-gray-200">
            <IoSunnyOutline />
          </button>
          <button className="text-black text-[15px] p-2 border rounded-md hover:bg-gray-200">
            <FaEthereum />
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-4 mx-[] lg:mx-[7%] xl:mx-[4.201%]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-etherscan.svg"
            alt="Etherscan Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 text-[.93515625rem]">
          <a href="/" className="text-blue-400 font-medium">
            Home
          </a>
          {Object.keys(dropdownContent).map((menu) => (
            <div
              key={menu}
              className="relative group h-auto"
              onMouseEnter={() => setIsDropdownOpen(menu)}
              onMouseLeave={() => setIsDropdownOpen(null)}
            >
              {/* Button */}
              <button className="text-gray-800 font-medium flex items-center my-6 transition-colors duration-200 hover:text-blue-400">
                {menu}
                <span className="ml-1">
                  <MdKeyboardArrowDown />
                </span>
              </button>

              {/* Dropdown */}
              {isDropdownOpen === menu && menu !== "More" && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-md w-[15rem] p-2 z-10 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 border-2 border-t-blue-400">
                  {dropdownContent[menu]}
                </div>
              )}
              {isDropdownOpen === menu && menu === "More" && (
                <div
                  className="fixed left-6 right-0 bg-white shadow-md rounded-md w-fit p-2 opacity-100 transform scale-100 z-50 transition-all duration-200 border-2 border-t-blue-400"
                  style={{ top: "7.35rem", left: "13rem" }} // Adjust the top value as needed
                >
                  {dropdownContent[menu]}
                </div>
              )}
            </div>
          ))}

          <div className="h-[15px] w-[1px] bg-black mx-auto my-2"></div>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-600 flex items-center"
          >
            <FaUserCircle className="inline-block mr-1 " />
            Sign In
          </a>
        </div>

        <div className="lg:hidden flex gap-4 items-center">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-600 flex items-center text-[.83515625rem]"
          >
            <FaUserCircle className="inline-block mr-1 " />
            Sign In
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 font-medium hover:text-blue-400 my-4 p-2 border rounded-md"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md p-4">
          <a href="/" className="block py-2 text-blue-400 font-medium">
            Home
          </a>
          {Object.keys(dropdownContent).map((menu) => (
            <div key={menu} className="py-2">
              <button
                className="w-full text-left text-gray-800 font-medium flex justify-between items-center"
                onClick={() =>
                  setIsDropdownOpen(isDropdownOpen === menu ? null : menu)
                }
              >
                {menu}
                <MdKeyboardArrowDown />
              </button>
              {isDropdownOpen === menu && (
                <div className="mt-2 bg-gray-50 rounded-md p-2 shadow">
                  {dropdownContent[menu]}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
