import React from 'react'
import './HeaderBlock.css'
import HeaderBlockSection from './HeaderBlockSection'

function HeaderBlock() {
  return (
    <div className='headerBlock'>
      <div className='headerBlock__info'>
        {/* <div className='headerBlock__infoText'>
          <h1>Model 3</h1>
          <h4>
            Order Online for <span>Touchless Delivery</span>
          </h4>
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>custom order</button>
          <button className='headerBlock__buttonSecondary'>
            existing inventory
          </button>
        </div> */}
        <HeaderBlockSection 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a new Roof Plus Solar Pannel"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            
            />
      </div>
      <div className='headerBlock__info'>
          <HeaderBlockSection 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            
            />
      </div>
      
    </div>
  )
}

export default HeaderBlock
