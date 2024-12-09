import DashboardHome from '@/components/dashboard/dashboardHome/DashboardHome'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import React from 'react'

export default function page() {
  return (
    <div className="ml-5">
        <DashboardHomeHeader></DashboardHomeHeader>
        <DashboardHome></DashboardHome>
    </div>
  )
}
