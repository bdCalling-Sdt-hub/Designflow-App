import React from 'react'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import Notification from '@/components/dashboard/notification/Notification'

export default function page() {
  return (
    <div className="md:ml-5 mx-5 md:mx-0">
      <DashboardHomeHeader></DashboardHomeHeader>
        <Notification></Notification>
    </div>
  )
}
