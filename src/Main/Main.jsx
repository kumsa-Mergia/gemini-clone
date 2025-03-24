import React, { useContext } from "react";
import { assets } from "../assets/assets"; // Assuming you have an assets file
import { Context } from "../Context/Context";

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
    <div className="flex-1 min-h-screen relative">
      {/* Nav */}
      <div className="flex items-center justify-between text-2xl p-5">
        <p className="text-3xl">Gemini</p>
        <img
          src={assets.user_icon}
          className="w-7 h-7 rounded-full"
          alt="User Icon"
        />
      </div>

      {/* Container - Reduced gap */}
      <div className="max-w-[900px] mx-auto -mt-50">
        {" "}
        {/* Added negative margin-top */}
        <div className="flex items-center justify-center h-screen bg-white">
          <div className="text-center">
            <p className="text-4xl font-semibold mb-2">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Gemini
              </span>
              ,
            </p>
            <p className="text-4xl font-semibold">your personal AI assistant</p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center justify-center">
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
  );
};

export default Main;
