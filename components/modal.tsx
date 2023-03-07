/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, useState } from "react";

import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";

export interface ModalProps {
  open: boolean;
  close: Function;
  [nfts: string]: any;
}
const Detail: FunctionComponent<ModalProps> = ({ open, close, nfts }) => {
  return (
    <>
      <Modal open={open} onClose={() => close()}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          className="fixed top-0 left-0 right-0 z-50 hidden w-auto p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-auto md:h-auto overflow-y-scroll scrollbar-hidden"
        >
          <ModalClose />
          <div className="flex flex-col space-y-4 ">
            <div className="lg:flex lg:space-x-4  md:space-y-4 md:space-x-0">
              <div className="w-auto max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg shadow-lg"
                    src={nfts.imageUrl}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                      {nfts.collectionName}
                    </h5>
                  </a>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-black dark:text-white">
                      Price: {nfts.price}
                    </span>
                    <a
                      href={nfts.tokenUrl}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      target="_blank"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </div>

              <div className=" w-full items-center justify-items-center space-y-8 ">
                <p className="text-center text-5xl font-bold leading-10 mt-4">
                  {nfts.name}
                </p>

                <div className="rounded-lg border-2 p-2 bg-gray-100">
                  <div className="justify-center space-y-4">
                    <div className=" w-full flex space-x-4 rounded-lg border-2 px-2 py-2 bg-white">
                      blockchain: {nfts.blockchain}
                    </div>
                    <div className="flex space-x-4 rounded-lg border-2 px-2 py-2 bg-white">
                      tokenId: {nfts.tokenId}
                    </div>
                    <div className="flex space-x-4 rounded-lg border-2 px-2 py-2 bg-white">
                      contractAddress: {nfts.contractAddress}
                    </div>
                    <div className="flex space-x-4 rounded-lg border-2 px-2 py-2 bg-white">
                      Symbol: {nfts.symbol}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border-2 p-2 bg-blue-500">
              <div className="lg:grid grid-cols-4 gap-4 md:mt-8 space-y-4 w-full">
                {nfts.traits &&
                  Object.keys(nfts.traits).map((key: any, index) => (
                    <a
                      href="#"
                      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-blue-700"
                    >
                      <h5 className="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">
                        {nfts.traits?.[key].trait_type}
                      </h5>
                      <p className="font-normal text-gray-700 text-sm dark:text-gray-400">
                        {nfts.traits?.[key].value}
                      </p>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};
export default Detail;
