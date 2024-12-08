import DashboardAddProject from '@/components/dashboard/DashboardAddProject'
import DashboardDreamDesign from '@/components/dashboard/DashboardDreamDesign'
import DashboardHero from '@/components/dashboard/DashboradHero'
import React from 'react'

export default function page() {
  return (
    <div className=''> 
      <DashboardHero></DashboardHero>
      <DashboardDreamDesign></DashboardDreamDesign>
      <DashboardAddProject></DashboardAddProject>
    </div>
  )
}
