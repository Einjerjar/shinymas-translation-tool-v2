import React from 'react'

import '@/App.css'
import loadable from '@loadable/component'

const Sidebar = loadable(() => import('@/components/Sidebar'))
const FloatingSidebar = loadable(() => import('./components/FloatingSidebar'))
const EditorField = loadable(() => import('@/components/EditorField'))
import { DarkModeProvider } from '@/state/DarkMode'
import { DataSetProvider } from '@/state/DataSet'

function App() {
  return (
    <DarkModeProvider>
      <DataSetProvider>
        <div className="App h-full overflow-hidden">
          <FloatingSidebar/>
          <div className="grid grid-cols-3 gap-1 p-3 overflow-hidden h-full">
            <Sidebar hidden={true}/>
            <EditorField/>
          </div>
        </div>
      </DataSetProvider>
    </DarkModeProvider>
  )
}

export default App
