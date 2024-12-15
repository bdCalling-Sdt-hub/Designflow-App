'use client'
import React from 'react'
import DashboardHomeHeader from '@/components/dashboard/dashboardHome/DashboardHomeHeader'
import { Tabs } from 'antd';

export default function page() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="">
      <Tabs
        onChange={onChange}
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
    </div>
  )
}
