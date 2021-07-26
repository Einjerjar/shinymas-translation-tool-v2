import React, { useEffect } from 'react'
import Icon from './Icon'
import { parse, unparse } from 'papaparse'

import { useDataSet } from '@/state/DataSet'
import SideCard from '@/components/SideCard'
import Tooltip from '@/components/Tooltip'

// Prepacked name library
import TNames from '@/data/Names'

// Tutorial-esque sample data
import TTest from '@/data/TestTranslations'


const Sidebar = (props: { hidden: boolean }) => {
  const { hidden } = props

  const {
    dataSet,
    setDataSet,
    setNameSet,
    setActiveItemID,
    fileName,
    setFileName,
    sidebarVis,
    setSidebarVis
  } = useDataSet()

  // Apply test data and name lib
  useEffect(() => {
    setDataSet(TTest)
    setNameSet(TNames)
  }, [])

  const fileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null || e.target.files?.length == 0) {
      return
    }

    const fName = e.target.files[0].name

    parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (res) => {
        // Only update file name if load succeeded
        setFileName(fName)
        setDataSet(res.data as TranslationMapT[])
      }
    })
  }

  const selectItem = (i: number) => {
    setActiveItemID(i)
    setSidebarVis(false)
  }

  const exportData = () => {
    // Append `-edit` to the filename and change file extension
    //  (file extension is ignored tho, since mimetype takes over)
    const fName = fileName.split('.')
    const nfName = fName.slice(0, fName.length-1).join('.') + '-edit.csv'

    const a = document.createElement('a')
    a.download = nfName
    // Make sure we get a csv file
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(unparse(dataSet))
    a.click()
  }

  const closeSidebar = () => {
    setSidebarVis(false)
  }

  const visClass = () =>
    hidden
      ? 'hidden md:flex'
      : sidebarVis
        ? 'flex md:hidden'
        : 'hidden'

  return (
    <div className={`card auto-bg-card sidebar ${visClass()}`}>
      <div className="card-header">
        <div className={'text-xl'}>
          {fileName}
        </div>
        <div className="flex children:mx-1">
          <Tooltip content="Export">
            <div className={'btn'} onClick={exportData}>
              <Icon icon="carbon:download" />
            </div>
          </Tooltip>
          <Tooltip content="Import">
            <div>
              <input onChange={fileLoad}
                type="file"
                id="f_input"
                className="hidden"
                accept=".csv, .txt" />
              <label htmlFor="f_input">
                <div className={'btn'}>
                  <Icon icon="carbon:upload" />
                </div>
              </label>
            </div>
          </Tooltip>
          <Tooltip content="Close sidebar">
            <div className={`btn ${hidden ? 'hidden' : ''}`} onClick={closeSidebar}>
              <Icon icon="carbon:close" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="card-body overflow-y-auto">
        {
          dataSet.map((v, i) => {
            return (
              <div key={i} onClick={() => selectItem(i)}>
                <Tooltip
                  content={v.trans}
                  // Tooltip on top for last item to avoid clipping
                  position={i == dataSet.length -1 ? 'top' : 'down'}
                >
                  <SideCard item={v}/>
                </Tooltip>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar
