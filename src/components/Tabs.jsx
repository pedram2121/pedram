import React, { useState } from 'react'
import './Tabs.css' // فایل CSS جداگانه برای استایل‌ها

function Tabs () {
  const tabs = [
    { id: 'tab1', label: 'فـروش' },
    { id: 'tab2', label: 'خـریـد' }
  ]

  const [activeTab, setActiveTab] = useState('tab1')

  const tabContent = {
    tab1: (
      <div className='tab-content'>
        <div className='form-group'>
          <div className='grid grid-rows-2'>
            <div>
              <label className="gold-label">مقدار فـروش</label>
            </div>
            <div>
              <span className="gold-label">گرم طـلا</span>
              <input type='text' className='input-field' />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div className='grid grid-rows-2'>
            <div>
              <label className="gold-label">معـادل</label>
            </div>
            <div>
              <span className="gold-label">تومان</span>
              <input type='text' className='input-field' />
            </div>
          </div>
        </div>
        <button className='action-button'>فـروش</button>
      </div>
    ),

    tab2: (
      <div className='tab-content'>
        <div className='form-group'>
          <div className='grid grid-rows-2'>
            <div>
              <label className="gold-label">مقدار خریـد</label>
            </div>
            <div>
              <span className="gold-label">گرم طـلا</span>
              <input type='text' className='input-field' />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <div className='grid grid-rows-2'>
            <div>
              <label className="gold-label">معـادل</label>
            </div>
            <div>
              <span className="gold-label">تومان</span>
              <input type='text' className='input-field' />
            </div>
          </div>
        </div>
        <button className='action-button'>خـریـد</button>
      </div>
    )
  }

  return (
    <div className='tabs-container'>
      <div className='tabs-header'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='tabs-content'>
        <h1>خرید طــلای آب شـده</h1>
        {tabContent[activeTab]}
      </div>
    </div>
  )
}

export default Tabs
