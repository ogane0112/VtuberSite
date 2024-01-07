import React from 'react';
import logo from "../images/icon.png";
import '../style/About.css';

import { useSidebar } from './SidebarContext';
function About() {
    const { isSidebarOpen } = useSidebar(); // サイドバーの状態を取得
  return (
 
    <div className={isSidebarOpen ? 'content-small' : 'content-full'}>
    <div className='About'>
      <main>
        <section id="visual">
          <div>
            <img src="cute.jpg" alt="Visual" />
          </div>
        </section>
        <section id="about" className="wrapper">
          <h2 className="section-title">About</h2>
          <div className="content">
            <div className="text">
              <h3 className="content-title">使用できるプログラム言語+逆引き辞典へのリンク</h3>
              <ul>
                <li><img src={logo} alt="Python" /><a href="">Python</a></li>
                {/* 他のリストアイテムも同様に */}
              </ul>
            </div>
          </div>
        </section>
        <section id="love" className="wrapper">
          <h2 className="section-title">趣味</h2>
          <ul>
            <li>
              <img src="cute.jpg" alt="Competitive Programming" />
              <h3 className="content-title">競技プログラミング</h3>
            </li>
            {/* 他のリストアイテムも同様に */}
          </ul>
        </section>
      </main>
    </div>
    </div>
  );
}

export default About;
