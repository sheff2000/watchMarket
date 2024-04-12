import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AdminMenu from '../AdminMenu/AdminMenu';

function AppAdmin() {
  return (
    <div className='container-fluid'>
       <div className='row'>
          <div className='col-md-4'>
            <div className='d-flex flex-column vh-100 sticky-top border-status bacground-left-block'>
              <div className="admin-menu-box">
                  <h3 className='h3-center'>Админ панель</h3><hr />
                  <div className='btn-control-group'>
                    <Link to="/" className="btn btn-outline-success">To Market</Link>
                    <button type="button" className="btn btn-outline-warning" disabled>Exit</button>
                  </div>
                  <hr/>
                  <AdminMenu />
              </div>
            </div>
            
          </div>
          <div className='col-md-8'>
            content<br></br>
            content<br></br>
            content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>
            content<br></br>content<br></br>content<br></br>content<br></br>

          </div>
       </div>
    </div>
  );
}
export default AppAdmin;