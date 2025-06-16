
'use client'

import { useEffect } from 'react'
import grapesjs from 'grapesjs'

export default function EditorPage() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      height: '100vh',
      width: '100%',
      fromElement: true,
      storageManager: false,
      panels: { defaults: [] },
    })

    editor.setComponents(`
      <div style="padding: 25px; text-align: center">
        <h1>DONESCA BUILDER</h1>
        <p>¡Construye tu web aquí!</p>
      </div>
    `)
  }, [])

  return <div id="gjs"></div>
}
