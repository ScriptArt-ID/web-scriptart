import WebsTable from '@/components/adminView/websView/WebsTable'
import React from 'react'
import NavbarView from '@/components/adminView/navbarView/NavbarView'

export default function page() {
  return (
    <div>
      <NavbarView>
      <WebsTable/>
      </NavbarView>
    </div>
  )
}
