import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../Context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex flex-col min-h-screen max-w-[1400px] w-full">
      {/* Navbar */}
      <div className="flex items-center justify-between text-2xl p-5">
        <p className="text-3xl">Gemini</p>
        <img
          src={assets.user_icon}
          className="w-7 h-7 rounded-full"
          alt="User Icon"
        />
      </div>

      {/* Main Content (Center) - Expand to fill available space */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-[900px] w-full h-full bg-white">
          {!showResult ? (
            <div className="text-center flex flex-col items-center justify-center h-full">
              <p className="text-4xl font-semibold mb-2">
                Meet{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Gemini
                </span>
                ,
              </p>
              <p className="text-4xl font-semibold">
                your personal AI assistant
              </p>
            </div>
          ) : (
            <div className="grid px-[5%] max-h-[70vh] overflow-y-auto scrollbar-hide">
              {/* User Prompt */}
              <div className="flex gap-6 justify-end items-center">
                <img
                  className="w-7 h-7 rounded-full"
                  src={assets.user_icon}
                  alt="User Icon"
                />
                <p>{recentPrompt}</p>
              </div>

              {/* AI Response */}
              <div className="flex gap-3 items-start">
                <img
                  src={assets.gemini_icon}
                  className="w-7 h-7 rounded-full"
                  alt="Gemini Icon"
                />
                {loading 
                ?
              <div className="loader">
                <hr />
                <hr />
                <hr />

              </div>
              :
              <p
              className="text-[17px] font-light leading-[1.8] "
              dangerouslySetInnerHTML={{ __html: resultData }}
            ></p>
                }

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section (Footer) - Always at the bottom */}
      <div className="flex justify-center mt-auto w-full"> {/* Added w-full */}
        <div className="max-w-[900px] w-full">
          <div className="flex items-center justify-center mt-4">
            <div className="w-full max-w-2xl p-4">
              <div className="flex items-center border rounded-full p-2 bg-white shadow-sm">
                <button className="p-2">{assets.plus_icon}</button>
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  placeholder="Ask Gemini"
                  className="flex-1 border-none focus:outline-none px-2"
                />
                <button className="p-2">{assets.mic_icon}</button>
                <button onClick={() => onSent()} className="p-2">
                  {assets.send_icon}
                </button>
              </div>
              <div className="mt-4 text-xs text-center text-gray-600">
                <a href="#" className="underline">
                  Google Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Google Privacy Policy
                </a>{" "}
                apply. Gemini can make mistakes, so double-check it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;