"use client";

import Eye from "../icons/Eye";
import CloseEye from "../icons/CloseEye";
import { useState } from "react";

const EnterPassword = () => {
  const [clicked, setClicked] = useState(false);
  const [staySignedIn, setStaySignedIn] = useState(false);
 
  return (
    <div className="w-full h-full flex  justify-center mt-10">
      <div className=" bg-white w-96 h-96 text-black rounded-xl relative">
        <div className="absolute top-12 left-10">
          <p className="font-bold text-2xl mb-8">Enter your Password</p>
          <di v className="flex flex-row mb-5">
            <img
              className="w-16 h-16 rounded-full mr-5"
              src="https://media.vogue.co.uk/photos/610bdafe3e377c73f37a1d6d/2:3/w_2560%2Cc_limit/pd%2520social.jpeg"
              alt=""
            />
            <div className="flex flex-col">
              <p>Bussiness account</p>
              <p className="font-bold">Sarrah Bills</p>
            </div>
          </di>
          <div className="flex flex-col mb-8">
            <label htmlFor="password">Password</label>
            <div className="flex flex-row gap-2 justify-center items-center">
              <input
                className="border-2 border-gray-800 rounded-md p-2"
                id="password"
                type={clicked ? "text" : "password"}
                placeholder="Enter your password"
              />

              <div
                className=" hover:cursor-pointer w-7 h-7"
                onClick={() => setClicked(!clicked)}
              >
                
                {clicked ? <Eye  /> : <CloseEye />}
              </div>
            </div>
          </div>

          <div className="flex flex-row relative mb-4 hover:cursor-pointer ">
            <div
              onClick={() => setStaySignedIn(!staySignedIn)}
              className={`w-12 h-7 rounded-full border-2 transition-all border-black ${
                staySignedIn ? "pl-6" : "pl-1"
              }  pt-[4px] mr-2 `}
            >
              <div className="bg-black rounded-full w-4 h-4 "></div>
            </div>

            <p>Stay signed in</p>
            <button className="absolute bg-black text-white rounded-xl p-2 left-52 bottom-[-5px]">
              Continue
            </button>
          </div>

          <a href="/" className="underline">
            Reset password
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;
