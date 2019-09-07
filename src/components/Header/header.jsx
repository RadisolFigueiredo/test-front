import React from 'react';
import './header.css';

let listHeader = ['SACOLA','PAGAMENTO','CONFIRMAÇÃO'];



const Header = () => (
  <header id="main-header">
    <ul className="container">
      {listHeader.map((list) => {
        return <li className="d-inline" key={list}>
          {list}
        </li>
      })}
    </ul>
  </header>
);

export default Header;
