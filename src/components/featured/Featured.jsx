import React from 'react'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='feturedImg' src="https://images.unsplash.com/photo-1602797882193-51cb0e037534?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            <div className="featuredTitiles">
                <h1>Dublin</h1>
                <h2>142 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='feturedImg' src="https://images.unsplash.com/photo-1625278152200-ae2d1fc87c5f?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="featuredTitiles">
                <h1>Austin</h1>
                <h2>142 Properties</h2>
            </div>
        </div>
        {/* <div className="featuredItem">
            <img className='feturedImg' src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            <div className="featuredTitiles">
                <h1>Rome</h1>
                <h2>142 Properties</h2>
            </div>
        </div> */}
        <div className="featuredItem">
            <img className='feturedImg' src="https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            <div className="featuredTitiles">
                <h1>Venice</h1>
                <h2>142 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured