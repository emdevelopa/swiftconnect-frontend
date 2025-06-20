import Image from "next/image";
import React, { useEffect, useState } from "react";

const SwiftConnectModal = ({
  onClose,
  onBack,
  onNext,
  setNarrationn,
  setUsername,
  setInputValue,
  setAmount,
  inputValue,
  amount,
  narration,
}) => {
  const [sendTo, setSendTo] = useState("Account Number");
  
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [matchedAccount, setMatchedAccount] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // setIsLoading(true);
  };

  useEffect(() => {
    if (inputValue && amount) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [inputValue, amount]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-lg  p-6" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between gap-12 pb-8 ">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 flex items-center space-x- text-[24px] max-md-[400px]:text-[18px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
          <h2 className="text-[24px] font-bold text-gray-800 max-md-[400px]:text-[14px]">
            Send to Swift Connect Account
          </h2>
        </div>
        <div
          className={`flex gap-4 mt- mb-[3em ${
            sendTo === "username"
              ? "flex-row-reverse items-start justify-end"
              : ""
          }`}
        >
          {/* <h2
            className={`text-[20px] text-[gray] flex items-center justify-center rounded-[4em] cursor-pointer py-[0.5em] px-[1em] max-md-[400px]:text-[14px] ${
              sendTo === "Account Number"
                ? "bg-[#d2d2d2]   text-[#0E1318] font-bold"
                : "hover:bg-[#f2f2f2]"
            }`}
            onClick={() => setSendTo("Account Number")}
          >
            Account Number
          </h2> */}
          {/* <h2
            className={`text-[20px] text-[gray] flex items-center justify-center cursor-pointer rounded-[4em]  py-[0.5em] px-[1em] max-md-[400px]:text-[18px] ${
              sendTo
                ? "bg-[#d2d2d2]  text-[#0E1318] font-bold"
                : "hover:bg-[#f2f2f2]"
            }`}
            onClick={() => setSendTo("email")}
          >
            @email
          </h2> */}
        </div>
        {/* Form */}
        <div className="space-y-4 mt-">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {sendTo === "email" ? "" : "email"}
            </label>
            <input
              type="email"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={`Type in the email of the recipient.`}
              className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-4"
            />
            <div className="flex mt-2 gap-2 items-center">
              {isLoading && <p>Loading...</p>}
              {/* {!isLoading && matchedAccount && (
                <div className="flex gap-2 items-center">
                  <Image
                    src={"green-checked.svg"}
                    alt="confirmation icon"
                    width={16}
                    height={16}
                    className="w-[1em]"
                  />
                  <p>{matchedAccount.name}</p>
                </div>
              )} */}
              {/* {!isLoading && !matchedAccount && inputValue && (
                <p className="text-red-500">No Account Found</p>
              )} */}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="How much do you want to send?"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-4"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Narration
            </label>
            <input
              type="text"
              value={narration}
              onChange={(e) => setNarrationn(e.target.value)}
              placeholder="What is this transaction for?"
              className="mt-1 block w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 p-4"
            />
          </div> */}

          <button
            className={`w-full text-white py-4 rounded-lg shadow-sm ${
              isButtonDisabled
                ? "bg-[#d2d2d2]"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={isButtonDisabled}
            onClick={() => {
            onNext();
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwiftConnectModal;
