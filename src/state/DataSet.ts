import { useState } from 'react'
import { createRexStore } from 'rex-state'

const _useDataSet = () => {
  const [ dataSet, setDataSet ] = useState<TranslationMapT[]>([])
  const [ nameSet, setNameSet ] = useState<Map<string, string>>(new Map<string, string>())
  const [ activeItemID, setActiveItemID ] = useState<number>(-1)
  const [ fileName, setFileName ] = useState<string>('FileName.csv')
  const [ sidebarVis, setSidebarVis ] = useState<boolean>(false)

  const EMPTY_TRANS: TranslationMapT = {
    id: 'NONE',
    name: 'NONE',
    text: 'NONE',
    trans: 'NONE'
  }

  const tryGetName = (_name: string, _default = '--') => {
    if (_name.trim().length == 0) {
      return _default
    }
    if (nameSet.has(_name)) {
      return nameSet.get(_name) as string
    }
    return _name
  }

  const tryUpdateName = (_name: string, _val: string) => {
    nameSet.set(_name, _val)
    setNameSet(new Map(nameSet))
  }

  const getActiveItem = () => {
    if (dataSet.length == 0
      || activeItemID < 0
      || activeItemID > dataSet.length
    ) {
      return EMPTY_TRANS
    }
    return dataSet[activeItemID]
  }

  const updateActiveItem = (v: TranslationMapT) => {
    dataSet[activeItemID] = v
    setDataSet([ ...dataSet ])
  }

  const tryNextView = () => {
    if (dataSet.length == 0) {
      setActiveItemID(-1)
    } else if (dataSet.length > activeItemID + 1) {
      setActiveItemID(activeItemID + 1)
    } else if (dataSet.length == activeItemID + 1) {
      setActiveItemID(0)
    }
  }

  return {
    dataSet,
    setDataSet,
    nameSet,
    setNameSet,
    tryGetName,
    tryUpdateName,
    activeItemID,
    setActiveItemID,
    tryNextView,
    getActiveItem,
    updateActiveItem,
    fileName,
    setFileName,
    sidebarVis,
    setSidebarVis,
  }
}

const {
  useStore: useDataSet,
  RexProvider: DataSetProvider
} = createRexStore(_useDataSet)

export {
  useDataSet,
  DataSetProvider
}
