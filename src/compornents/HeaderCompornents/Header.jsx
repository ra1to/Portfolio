import React from 'react'
import HeaderVideo from './HeaderVideo';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <HeaderVideo />
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
          </li>
          <li>
            <a href="/blog">SNS</a>
          </li>
        </ul>
      </nav>


    </header>
  );
};

export default Header