import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../Context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`p-4 min-h-screen bg-[#f0f4f9] flex flex-col justify-between transition-all duration-300 ${
        extended ? "w-64" : "w-16"
      } ${
        // Responsive adjustments
        extended ? "md:w-64" : "md:w-16"
      }`}
    >
      {/* Top section */}
      <div>
        <button onClick={() => setExtended((prev) => !prev)} className="mb-4">
          {assets.menu_icon}
        </button>

        <div
          onClick={() => newChat()}
          className="bg-white p-2 rounded-lg flex items-center gap-2 shadow-md"
        >
          {assets.plus_icon}
          {extended ? <p className="text-gray-700">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="mt-6">
            <p className="text-gray-600 text-sm">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md mt-2"
                >
                  {assets.message_icon}
                  <p key={index} className="text-gray-800">
                    {item.slice(0, 18)} ...
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* Bottom section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.question_icon}
          {extended ? <p className="text-gray-700">Help</p> : null}
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.history_icon}
          {extended ? <p className="text-gray-700">Activity</p> : null}
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.setting_icon}
          {extended ? <p className="text-gray-700">Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;