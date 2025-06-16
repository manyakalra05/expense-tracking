import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Login/Register Form */}
      <div className="flex-1 flex flex-col px-12 py-8 bg-white">
        <h2 className="text-lg font-medium text-black mb-6">Expense Tracker</h2>
        <div className="flex-1 flex items-center justify-center">{children}</div>
      </div>

      {/* Right: Illustration & Stats */}
      <div className="hidden md:flex flex-1 flex-col justify-center items-center relative bg-violet-50 overflow-hidden">
        {/* Decorative Boxes */}
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

        {/* Card */}
        <div className="z-20 mb-6">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>

        {/* Chart Image */}
        <img
          src={CARD_2}
          alt="Chart"
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 z-10"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

// Card Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-200/50 items-center z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="font-semibold text-black">${value}</span>
      </div>
    </div>
  );
};
