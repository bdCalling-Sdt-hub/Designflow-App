import DashboardHeader from "@/components/common/DashboardHeader";
import DashboardFooter from "@/components/common/DashboardFooter";
import React from "react";
import DashboardSidebar from "@/components/common/DashboardSidebar";

export default function layout({ children }) {
  return (
    <div>
      <div className="flex ">
        <DashboardSidebar></DashboardSidebar>
        <div className="w-full md:pl-10">{children}</div>
      </div>
    </div>
  );
}
