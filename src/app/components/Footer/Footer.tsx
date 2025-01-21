import { FaLongArrowAltUp, FaRedditAlien } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium, FaFacebookF } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-[.78515625rem] ">
      {/* Top Section */}
      <div className="flex justify-between items-center border-b border-gray-300 py-4 mx-[5%]">
        <div className="flex gap-4">
          <div className="">
            <button className=" border p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <BsTwitterX />
            </button>
          </div>
          <button className=" border p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaMedium />
          </button>
          <button className=" border p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaFacebookF />
          </button>
          <button className="border p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <FaRedditAlien />
          </button>
        </div>
        <a href="#header" className="font-bold hover:underline hover:text-blue-700 no-underline" style={{textDecoration: "none"}}>
          <FaLongArrowAltUp className="inline-block mr-2" />
          Back to Top
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-wrap md:flex-row md:px-2 px-6 py-8 mx-[5%]">
        {/* Info Section */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold">Powered by Ethereum</h4>
          <p className="mt-2 text-gray-600">
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </p>
          <img src="/map.png" alt="map" className="w-[17rem]" />
        </div>

        {/* Links Section */}
        <div className="flex-1 flex flex-wrap gap-8 justify-between">
          {/* Column 1 */}
          <div>
            <h5 className="text-base font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Brand Assets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers{" "}
                  <span className="rounded-md text-white bg-blue-600 p-1 text-[10px]">
                    We&#39;re Hiring!
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Bug Bounty
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-base font-semibold mb-4">Community</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Network Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Newsletters
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-base font-semibold mb-4">
              Products & Services
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Advertise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Explorer as a Service (EaaS)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  API Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Priority Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blockscan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blockscan Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-300 px-6 py-4 flex justify-between items-center mx-[5vw]">
        <p className="text-gray-600">Etherscan © 2025 (F1)</p>
        <p className="mt-2">
          Donations:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            0x71c765...d8976f
          </a>{" "}
          ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
