import DashboardHeader from "@/components/common/DashboardHeader";
import DashboardFooter from "@/components/common/DashboardFooter";
import React from "react";
import DashboardSidebar from "@/components/common/DashboardSidebar";

export default function layout({ children }) {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex ">
        <DashboardSidebar></DashboardSidebar>
        <div className="w-full">
        {children}
        </div>
      </div>
      <DashboardFooter></DashboardFooter>
    </div>
  );
}
