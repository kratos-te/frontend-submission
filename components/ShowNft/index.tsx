/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import { getNfts } from "@/utils/utils";
import { useNfts } from "@/utils/hooks";
import Modal from "../modal";
const ShowNft: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState(
    "0x36550110b116127a5be8247b576ee11562481c4f"
  );
  const [modalData, setModalData] = useState();
  const { nfts, loading, error } = useNfts(walletAddress);

  const handleModal = (nft: any) => {
    setOpen(true);
    setModalData(nft);
  };

  useEffect(() => {
    (async () => {
      const { nfts } = await getNfts(walletAddress);
      console.log({ nfts });
    })();
  }, [walletAddress]);

  return (
    <div className=" flex flex-col items-center ">
      <div className="flex-left flex-col mt-4 w-[60%]">
        <label className="block mb-2 text-lg font-medium text-white dark:text-white">
          Wallet Address
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            id="wallet-address"
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-sans focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0x...."
          />
        </div>
      </div>

      <div className="lg:inline-grid grid-cols-4 mt-8 gap-4 md:mt-8 space-y-4 w-full">
        {Object.keys(nfts).map((key: any, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: { delay: 0.2 }
            }}
            whileHover={{ opacity: 1, translateY: -15, scale: 1.2, zIndex: 1 }}
          >
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="">
                <img
                  className="p-8 rounded-full w-96 h-96 shadow-xl"
                  src={nfts?.[key].imageUrl}
                  alt={nfts?.[key].name}
                />
              </a>
              <div className="px-5 pb-5 space-y-10">
                <a href="">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                    Collection Name : {nfts?.[key].collectionName}
                  </h5>
                </a>
                <span className="text-xl  text-gray-900 dark:text-white">
                  {/* Name: {nft.name} */}
                </span>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    Name:{nfts?.[key].name}
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleModal(nfts?.[key])}
                  >
                    Detail
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {error && (
          <div className="flex flex-col items-center mt-8">
            <p className="text-red-700">
              Error: {JSON.stringify(error, null, 2)}
            </p>
          </div>
        )}
      </div>
      {modalData && (
        <Modal open={open} close={() => setOpen(false)} nfts={modalData} />
      )}
    </div>
  );
};

export default ShowNft;
