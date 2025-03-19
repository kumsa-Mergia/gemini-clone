import React from "react";
import { assets } from "../assets/assets"; // Import the assets object

const Sidebar = () => {
  return (
    <div className="p-4 min-h-screen w-64 bg-[#f0f4f9] flex flex-col justify-between">
      {/* Top section */}
      <div>
        <button className="mb-4">{assets.menu_icon}</button>

        <div className="bg-white p-2 rounded-lg flex items-center gap-2 shadow-md">
          {assets.plus_icon}
          <p className="text-gray-700">New Chat</p>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 text-sm">Recent</p>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md mt-2">
            {assets.message_icon}
            <p className="text-gray-800">Who is Kumsa ...</p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.question_icon}
          <p className="text-gray-700">Help</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.history_icon}
          <p className="text-gray-700">Activity</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
          {assets.setting_icon}
          <p className="text-gray-700">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
