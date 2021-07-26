import React, { useRef, useEffect, useState } from 'react'
import Icon from './Icon'

import { useDataSet } from '@/state/DataSet'
import { useDarkMode } from '@/state/DarkMode'
import Tooltip from '@/components/Tooltip'

import cvImg from '@/assets/img/text-bg-b.png'

class Point {
  x = 0
  y = 0

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  as_array() {
    return [ this.x, this.y ]
  }
}

function genAppState(): AppStateT {
  const w = 0
  const h = 0
  const baseW = 722
  const baseH = 146
  const baseNameH = 26
  const baseTextH = 22
  const baseNameOffset = new Point(42, 2)
  const baseTextOffset = new Point(30, 53)
  const baseLineOffset = -4
  const baseTextMaxWidth = baseW - baseTextOffset.x * 2
  const baseLetterSpacing = 0.3

  const nameRatio = baseNameH / baseH
  const textRatio = baseTextH / baseH
  const nameOffsetRatio = new Point(
    baseNameOffset.x / baseW,
    baseNameOffset.y / baseH,
  )
  const textOffsetRatio = new Point(
    baseTextOffset.x / baseW,
    baseTextOffset.y / baseH,
  )
  const baseLineOffsetRatio = baseLineOffset / baseH
  const baseLetterSpacingRatio = baseLetterSpacing / baseW

  const localNameH = baseNameH
  const localTextH = baseTextH
  const localNameOffset = baseNameOffset
  const localTextOffset = baseTextOffset
  const localBaseLineOffset = baseLineOffset
  const localBaseLetterSpacing = baseLetterSpacing

  return {
    w, baseW,
    h, baseH,
    baseNameH,
    baseTextH,
    baseLineOffset,
    nameRatio,
    textRatio,
    baseNameOffset,
    baseTextOffset,
    nameOffsetRatio,
    textOffsetRatio,
    baseLineOffsetRatio,
    localNameH,
    localTextH,
    localNameOffset,
    localTextOffset,
    localBaseLineOffset,
    baseTextMaxWidth,
    baseLetterSpacing,
    baseLetterSpacingRatio,
    localBaseLetterSpacing,
  }
}

function appResize(app: AppStateT, w: number, h: number) {
  app.w = w
  app.h = h

  app.localNameH = app.nameRatio * h
  app.localTextH = app.textRatio * h

  app.localNameOffset = new Point(
    app.nameOffsetRatio.x * w,
    app.nameOffsetRatio.y * h
  )
  app.localTextOffset = new Point(
    app.textOffsetRatio.x * w,
    app.textOffsetRatio.y * h
  )
  app.localBaseLetterSpacing = app.baseLetterSpacingRatio * w
}

const EditorField = () => {
  const cvImgRef = useRef<HTMLImageElement>(null)
  const textRootRef = useRef<HTMLDivElement>(null)
  const lTestRoot = useRef<HTMLDivElement>(null)
  const [ tempD, setTempD ] = useState<HTMLDivElement | null>(null)
  const [ app, setApp ] = useState<AppStateT>(genAppState())
  const [ localT, setLocalT ] = useState<TranslationMapT>({
    id: 'NONE',
    name: 'NONE',
    text: 'NONE',
    trans: 'NONE'
  })

  const {
    isDark,
    toggleDark
  } = useDarkMode()

  const {
    tryGetName,
    tryUpdateName,
    activeItemID,
    tryNextView,
    getActiveItem,
    updateActiveItem,
    setSidebarVis
  } = useDataSet()

  useEffect(() => {
    const ci = cvImgRef.current
    if (ci == null) return console.error('Cant find ImageRoot Reference')

    const handleResize = () => {
      appResize(app, ci.width, ci.height)
      setApp({ ...app })
    }

    ci.onload = handleResize

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Load the selected item when changed
  useEffect(() => {
    setLocalT(getActiveItem())
  }, [ activeItemID ])

  // Append length tester to parent as soon as
  //  parent ref is available
  useEffect(() => {
    if (tempD != null && lTestRoot.current != null) {
      lTestRoot.current.appendChild(tempD)
    }
  }, [ tempD, lTestRoot ])

  const updateNameRef = (e: string) => {
    tryUpdateName(localT.name, e)
  }

  const getTextWidth = (str: string) => {
    let temp_d = tempD
    if (temp_d == null) {
      temp_d = document.createElement('div')
      temp_d.style.pointerEvents = 'none'
      temp_d.style.opacity = '0'
      temp_d.style.width = 'fit-content'
      temp_d.style.fontFamily = 'Humming-C, sans-serif'
      temp_d.style.fontSize = `${app.baseTextH}px`
      temp_d.style.letterSpacing = `${app.baseLetterSpacing}px`

      setTempD(temp_d)
    }

    temp_d.textContent = str
    return temp_d.clientWidth
  }

  const updateLocalT = (e: string) => {
    localT.trans = e
    setLocalT({ ...localT })
    updateActiveItem(localT)
  }

  const openSidebar = () => {
    setSidebarVis(true)
  }

  return (
    <div className="editor-field card auto-bg-card">
      <div className="card-header">
        <div className={'text-xl'}>
            Edit
        </div>
        <div className="flex children:mx-1">
          <Tooltip content="Source">
            <a href="https://github.com/einjerjar" className="btn block">
              <Icon icon="carbon:logo-github"/>
            </a>
          </Tooltip>
          <Tooltip content="Toggle Theme">
            <div className="btn" onClick={() => toggleDark()}>
              <div className={!isDark ? 'hidden' : ''}>
                <Icon icon="carbon:moon" />
              </div>
              <div className={isDark ? 'hidden' : ''}>
                <Icon icon="carbon:sun" />
              </div>
            </div>
          </Tooltip>
          <Tooltip content="Sidebar">
            <div className="btn block md:hidden" onClick={() => openSidebar()}>
              <Icon icon="carbon:menu" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="separator"></div>
      <div className="card-body overflow-y-auto">
        <div className="flex justify-center select-none" onClick={() => tryNextView()}>
          <div className="relative pointer-events-none">
            <img ref={cvImgRef}
              src={cvImg}
              alt="editor_bg"
              className="block filter drop-shadow-lg drop"
              draggable={false} />

            <div style={{ fontFamily: 'Humming-C, sans-serif' }}
              className={'game-text game-view-base'}>
              <div className="relative">
                <div className="absolute" style={
                  {
                    fontSize: `${app.localNameH}px`,
                    left: `${app.localNameOffset.x}px`,
                    top: `${app.localNameOffset.y}px`,
                  }
                }>
                  {tryGetName(localT.name)}
                </div>
              </div>
              <div className="absolute bg-red-500 h-full" style={{ width: '2px', right: `${app.localTextOffset.x}px` }}></div>
              <div ref={textRootRef} className="relative w-full" style={{ paddingLeft: `${app.localTextOffset.x}px`, paddingTop: `${app.localTextOffset.y}px`, letterSpacing: `${app.localBaseLetterSpacing}px` }}>
                {
                  localT.trans.split('\n').map((v, i) => {
                    return (
                      <div key={i} className={`${getTextWidth(v) > app.baseTextMaxWidth ? 'text-red-500' : ''}`} style={{ fontSize: `${app.localTextH}px`, marginTop: `${app.localBaseLineOffset}px`, width: 'fit-content' }}>
                        {v}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="separator my-2"></div>

        <div className="grid gap-2">
          <input type="text" className="w-full inp"
            onChange={(e) => updateNameRef(e.target.value)}
            value={tryGetName(localT.name)} />
          <textarea className="w-full inp" rows={3}
            onChange={(e) => updateLocalT(e.target.value)}
            value={localT.trans}></textarea>
        </div>

        <div className="separator my-2"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 children:px-3 children:py-2">
          <div className="select-none"> ID: </div>
          <input type="text"
            className="w-full inp"
            value={localT.id}
            disabled />

          <div className="select-none"> Character: </div>
          <input type="text"
            className="w-full inp"
            value={localT.name}
            disabled />

          <div className="select-none"> Text: </div>
          <textarea
            className="w-full inp"
            value={localT.text}
            rows={3}
            disabled ></textarea>
        </div>
      </div>
      <div ref={lTestRoot} className="l-test-root">
      </div>
    </div>
  )
}

export default EditorField
