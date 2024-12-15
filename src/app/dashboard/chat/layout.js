import ChatHeader from "@/components/dashboard/chatHeader";
import DashboardHomeHeader from "@/components/dashboard/dashboardHome/DashboardHomeHeader";

export default function layout({ children }) {
    return (
        <div>
            <DashboardHomeHeader />
            <div className="flex items-start gap-10 ">
                <ChatHeader></ChatHeader>
                {children}
            </div>
        </div>
    )
}
