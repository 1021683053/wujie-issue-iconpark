import React from 'react'
import ReactDOM from 'react-dom/client'
import { AllApplication, Bill, BookmarkOne } from '@icon-park/react'

const App = ()=>{
  return (
    <div>
      <div>Wujie React Children</div>
      <h3>Iconpark 公共库</h3>
      <p>
        <AllApplication theme="filled" size="24" fill="#333" strokeWidth={2} strokeLinejoin="miter"/>
        <Bill theme="filled" size="24" fill="#333" strokeWidth={2} strokeLinejoin="miter"/>
        <BookmarkOne theme="filled" size="24" fill="#333" strokeWidth={2} strokeLinejoin="miter"/>
      </p>
      <h3>Iconpark 私有库 WebComponent渲染</h3>
      <p>
        <iconpark-icon name="zhipinzhongxinxuanzhong"></iconpark-icon>
        <iconpark-icon name="chajianxuanzhong"></iconpark-icon>
        <iconpark-icon name="zhipinxuanzhong"></iconpark-icon>
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
