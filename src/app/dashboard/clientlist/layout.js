import DashboardHomeHeader from "@/components/dashboard/dashboardHome/DashboardHomeHeader";

export default function layout({ children }) {
    return (
        <div>
            <DashboardHomeHeader />
            {children}
        </div>
    )
}