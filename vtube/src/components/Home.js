import React from 'react'
import { useSidebar } from './SidebarContext';
function Home() {
  const { isSidebarOpen } = useSidebar(); // サイドバーの状態を取得
  return (
    <div className={`content ${isSidebarOpen ? 'content-small' : 'content-full'}`}>
    <div className='Home'>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>
        <p>こんにちわ世界</p>

    </div>
    </div>
  )
}

export default Home