import React from 'react'
import './header.css'

const listHeader = ['SACOLA', 'PAGAMENTO', 'CONFIRMAÇÃO']

const Header = () => (
  <div id="main-header" className="container">
    <div className="row">
      <ul className="steps">
        {listHeader.map(list => {
          return (
            <div>
              <li key={list}>{list}</li>
            </div>
          )
        })}
      </ul>
    </div>
  </div>
);

export default Header
