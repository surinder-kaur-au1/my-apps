import React from 'react';
import Card from './Ui/card.js'
import Logo from './logo/index.js';
import './headerMain.css';
import Navbar from './Navbar/index.js';
const HeaderMain = (props) => {
    return (<div><Card><div style={{padding:"50px 0"}}><Logo/></div><Navbar/>
        </Card></div>
     );
}
 
export default HeaderMain;