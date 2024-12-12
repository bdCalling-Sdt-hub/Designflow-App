import DashboardHome from '@/components/dashboard/dashboardHome/DashboardHome'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import React from 'react'

export default function page() {
  return (
    <div className="md:ml-5 mx-5 md:mx-0">
        <DashboardHomeHeader></DashboardHomeHeader>
        <DashboardHome></DashboardHome>
    </div>
  )
}
