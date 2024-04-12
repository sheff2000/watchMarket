import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AdminMenu from '../AdminMenu/AdminMenu';
import ProductControl from '../ProductControl/ProductControl';
import CategoryControl from '../CategpryControl/CategoryControl';
import BrandControl from '../BrandControl/BrandControl';
import TypeWatchControl from '../TypeWatchControl/TypeWatchControl';

function AppAdmin() {

  const [activeButton, setActiveButton] = useState('control_product');

    const handleActiveButtonChange = (newButton) => {
        setActiveButton(newButton);
    };

  // в зависимости что за меню у нас активно - выводим форму управления для него
  const getActiveComponent = () => {
    switch (activeButton) {
        case 'control_product':
            return <ProductControl />;
        case 'control_category':
            return <CategoryControl />;
        case 'control_brand':
            return <BrandControl />;
        case 'control_type':
            return <TypeWatchControl />;
        default:
            return <ProductControl />;
    }
  };

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
                  <AdminMenu nowActiveBtn={activeButton} onActiveBtnChange={handleActiveButtonChange}/>
              </div>
            </div>
            
          </div>
          <div className='col-md-8'>
            {getActiveComponent()}
          </div>
       </div>
    </div>
  );
}
export default AppAdmin;