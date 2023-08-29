"use client"

import { useState } from "react";
import Cart from "../icons/Cart"
import Heart from "../icons/Heart"
import OutlineHeart from "../icons/OutlineHeart"

const ProductInfo = () => {
    const [clicked, setClicked] = useState(false)
  return (
    <div className="flex justify-center text-black">
      <div className="  w-[30rem] h-80 rounded-xl bg-white">
        <div className="flex p-2 justify-start gap-4 w-[27rem] ">
          <img
            className="w-32 h-24 ml-10 mt-5"
            src="https://www.mojsvet.eu/obchod_homedir/data/3241/obrazky/notebook-dell-inspiron-15-3000-3511-156-fhd-i5-1135g7-8gb-256gb-ssd-fpr-w11-stribrny-2y-nbd-167239.jpg"
            alt=""
          />
          <div className=" mt-7 flex flex-col">
            <p className="bg-black text-white w-[7rem] rounded-3xl p-1">
              Free shipping
            </p>
            <h1 className="font-bold  mt-1 mb-4">Notebook Lenovo Gray 1TB </h1>
            <p className="text-sm text-gray-600 line-through ">900€</p>
            <p className="text-2xl font-bold">750€</p>
            <p className="text-gray-600 text-sm mb-2 ">
              The offer is valid until September 1 or as long on stack lasts!
            </p>

            <button className=" mb-8 bg-blue-500 cursor-pointer [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]   text-white rounded p-1">
              Add to cart
            </button>

            <div className="flex  gap-2">
              <button className="border flex   border-gray-500 rounded-md p-1 ">
                <div className="w-5 h-5">
                  <Cart />
                </div>
              </button>
              <button className="border  border-gray-500 rounded-md p-1  ">
                <div onClick={() => setClicked(!clicked)} className="w-5 h-5 ">
                  {clicked ? <OutlineHeart /> : <Heart />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo
