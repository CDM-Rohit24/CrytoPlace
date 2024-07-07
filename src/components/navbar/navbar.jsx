import React, { useContext } from 'react'
import './navbar.css'

import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { Link } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'



const Navbar = () => {


    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (e) => {

        switch (e.target.value) {

            case "usd": {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "E" });
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "I" });
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" });
                break;
            }
        }


    }

    return (
        <div className='navbar'>
          <Link to={`/`}>
            <img src={logo} alt="" className='logo' />
            </Link> 
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign up <img src={icon} alt="" /></button>
            </div>

        </div>
    )
}

export default Navbar