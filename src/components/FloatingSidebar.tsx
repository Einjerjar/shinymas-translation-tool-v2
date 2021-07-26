import React from 'react'
import { useDataSet } from '@/state/DataSet'
import Sidebar from '@/components/Sidebar'

const FloatingSidebar = () => {
  const {
    sidebarVis
  } = useDataSet()

  return (
    <div className={`floating-sidebar ${sidebarVis ? '' : 'hidden'}`}>
      <div className="floating-sidebar-w">
        <Sidebar hidden={false}/>
      </div>
    </div>
  )
}

export default FloatingSidebar
