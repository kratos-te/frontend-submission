import React from "react";

export default function Header() {
  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          NFT
        </span>{" "}
        Viewer
      </h1>
      <p className="text-lg font-normal text-white lg:text-xl dark:text-gray-400">
        Here at NFTs on Ethereum networks
      </p>
    </div>
  );
}
