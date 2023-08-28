"use client"
import {useState} from "react"

const Progress = () => {

      const [plusOneClick, setPlusOneClick] = useState(5);

      const handleCheckboxClick = (event) => {
        if (event.target.checked) {
          setPlusOneClick(plusOneClick - 1);
        } else {
          setPlusOneClick(plusOneClick + 1);
        }
      };


  return (
    <div className="flex justify-center flex-row gap-5 ">
      <div className="bg-purple-700 w-[30rem] h-48  rounded-2xl ">
        <h1 className="pt-4 pl-4 font-bold  text-2xl">Build your page</h1>
        <p className="pl-4 pt-2">
          Lorem ipsum dolor sit amet consectetur  elit. Ad, aliquid
          eius .
        </p>

        <div className="pl-4 pt-4 flex gap-2">
          <div
            className={`w-8 h-3 rounded-3xl  ${
              plusOneClick < 5 ? "bg-blue-600" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-8 h-3 rounded-3xl  ${
              plusOneClick < 4 ? "bg-blue-600" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-8 h-3 rounded-3xl  ${
              plusOneClick < 3 ? "bg-blue-600" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-8 h-3 rounded-3xl  ${
              plusOneClick < 2 ? "bg-blue-600" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-8 h-3 rounded-3xl  ${
              plusOneClick < 1 ? "bg-blue-600" : "bg-white"
            }`}
          ></div>
        </div>

        <p className="pt-4 pl-4">{plusOneClick} Remain to complete</p>
      </div>

      <div className="bg-blue-600 w-48 h-52 rounded-2xl relative">
        <div className="absolute w-48 h-52 bg-blue-900 top-10 left-10 rounded-2xl pl-4 flex flex-col gap-1">
          <h2 className=" pt-4 font-bold text-2xl mb-2">Checklist</h2>

          <div className="flex gap-2 ">
            <input
              onClick={handleCheckboxClick}
              id="1"
              type="checkbox"
              className=" w-5 accent-blue-500 hover:cursor-pointer"
            />
            <label htmlFor="1">Industry </label>
          </div>
          <div className="flex gap-2">
            <input
              onClick={handleCheckboxClick}
              id="2"
              type="checkbox"
              className=" w-5 accent-blue-500 hover:cursor-pointer"
            />
            <label htmlFor="2">Website URL</label>
          </div>
          <div className="flex gap-2 ">
            <input
              onClick={handleCheckboxClick}
              id="3"
              type="checkbox"
              className=" w-5 accent-blue-500 hover:cursor-pointer"
            />
            <label htmlFor="3">Logo</label>
          </div>
          <div className="flex gap-2">
            <input
              onClick={handleCheckboxClick}
              id="4"
              type="checkbox"
              className=" w-5 accent-blue-500 hover:cursor-pointer"
            />
            <label htmlFor="4">Company size</label>
          </div>
          <div className="flex gap-2 ">
            <input
              onClick={handleCheckboxClick}
              id="5"
              type="checkbox"
              className=" w-5 accent-blue-500"
            />
            <label htmlFor="5">Location</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress
