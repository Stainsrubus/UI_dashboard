import React from 'react'
import './dashboard.css'
import Table from 'react-bootstrap/Table';


function dashboard() {
  return<>
  <div className='container-fluid dashboard'>
    <div className='top-bar d-flex '>
        <div class="search-bar">
            <div class="search-icon">
                <img src="src/assets/search-normal.svg" />
            </div>
            <input type="text" placeholder="Search" />
        </div>
        <div className='notification-icon'>
            <img src='src/assets/Notification.svg'/>
        </div>
    </div> 

    <div className='info-bar container-fluid '>
        <h1>Sales Information</h1>
        <div className='entry-fields d-flex'>
            <div>
                <h3>Customer</h3>
                <input type='text' placeholder='Enter customer Name'/>
            </div>
            <div>
                <h3>Invoice Id</h3>
                <input type='text' placeholder='Enter Invoice Id'/>
            </div>
            <div>
                <h3>Start Date</h3>
                <input type='text' placeholder='Start Date'/>
            </div>
            <div>
                <h3>End Date</h3>
                <input type='text' placeholder='End Date'/>
            </div>
        </div>

    </div>

    <div className='container-fluid data-table' >
    <div className='row'>
            <Table>
                <thead >
                    <tr>
                        <td className='invoice d-flex'><input type='checkbox' />Invoice ID</td>
                        <td>Date</td>
                        <td>Customer</td>
                        <td>Payable Amount</td>
                        <td>Paid Amount</td>
                        <td>Due</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                    <tr>
                        <td className='invoice id  d-flex'>
                            <input type='checkbox' /> #AHGA68</td>
                        <td>23/09/2022</td>
                        <td>Jacob Marcus</td>
                        <td>$100</td>
                        <td>$000</td>
                        <td>$000</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>

  </div>
  </>
}

export default dashboard
