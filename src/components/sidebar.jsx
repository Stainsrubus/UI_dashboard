import React from 'react'
import './sidebar.css'

function sidebar() {
  return <>
      <div className="navbar-nav sidebar  ">
            <div className='brand'>
                <div className="sidebar-brand"> <h1>Medico Sales</h1></div>
            </div>
            <ul className='nav-item-list'>
            <div className='frame1'>
            <li className="nav-item active d-flex ">
                <div className="nav-link" >
                        <img src='src/assets/dashboard.svg'></img>
                        <span>Dashboard</span>
                </div>
            </li>
            <li className="nav-item ">
                <div className="nav-link" >
                        <img src='src/assets/bag-tick-2.svg'></img>
                        <span>Lab Test</span>
            
                </div>
            </li>
            <li className="nav-item ">
                <div className="nav-link" >
                    <img src='src/assets/calendar-tick.svg'></img>
                        <span>Appoinment</span>
                
                </div>
            </li>
            <li className="nav-item ">
                <div className="nav-link" >
                        <img src='src/assets/bag-tick-2.svg'></img>
                        <span>Medicine Order</span>
                   
                </div>
            </li>
            <li className="nav-item ">
                <div className="nav-link" >
                        <img src='src/assets/sms.svg'></img>
                        <span>Message</span>
                    
                </div>
            </li>
            <li className="nav-item ">
                <div className="nav-link" >
                        <img src='src/assets/empty-wallet.svg'></img>
                        <span>Payment</span>
                    
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link" >
                    <img src='src/assets/setting-2.svg'></img>
                        <span>Settings</span>
                   
                </div>
            </li>
            </div>
            <div className='frame2'>
                <li className="nav-item help">
                    <div className="nav-link" >
                            <img src='src/assets/Question.svg'></img>
                            <span>Help</span>
                    
                    </div>
                </li>
            </div>
            </ul>
           
        </div>
  </>
}

export default sidebar
