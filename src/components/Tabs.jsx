import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './Tabs.css'; // فایل CSS جداگانه برای استایل‌ها

const apiUrl = 'https://demo.meetwork.ir/api/v1/public/rates';

// تابع برای دریافت داده‌ها از API
const fetchRates = async () => {
  const response = await axios.get(apiUrl);
  return response.data.data;
};

function Tabs() {
  const tabs = [
    { id: 'tab1', label: 'فـروش' },
    { id: 'tab2', label: 'خـریـد' }
  ];

  const [activeTab, setActiveTab] = useState('tab1');
  const [buyAmount, setBuyAmount] = useState(''); // مقدار خرید (گرم طلا)
  const [sellAmount, setSellAmount] = useState(''); // مقدار فروش (گرم طلا)
  const [equivalentAmount, setEquivalentAmount] = useState(''); // معادل تومان برای خرید
  const [sellEquivalentAmount, setSellEquivalentAmount] = useState(''); // معادل تومان برای فروش

  // استفاده از React Query برای بارگذاری داده‌ها
  const { data: rates, isLoading, isError, error } = useQuery({
    queryKey: ['rates'], // کلید کوئری
    queryFn: fetchRates, // تابعی که داده‌ها را می‌آورد
  });

  // بررسی وضعیت بارگذاری و خطا
  if (isLoading) {
    return <div>در حال بارگذاری داده‌ها...</div>;
  }

  if (isError) {
    return <div>خطا در بارگذاری داده‌ها: {error.message}</div>;
  }

  // تابع محاسبه معادل تومان برای خرید
  const handleBuyAmountChange = (e) => {
    const weightInGrams = parseFloat(e.target.value); // وزن به گرم
    if (!isNaN(weightInGrams) && weightInGrams > 0) {
      setBuyAmount(e.target.value);

      // فرض میکنیم قیمت خرید رو از اولین آیتم API می‌گیریم
      const priceBuy = rates[0]?.price_buy;
      if (priceBuy) {
        // تبدیل وزن از گرم به مثقال
        const weightInMithqals = weightInGrams / 4.3318;
        const equivalent = weightInMithqals * priceBuy; // محاسبه معادل تومان
        const equivalentInThousand = equivalent / 1000; // تقسیم بر 1000 تومان
        setEquivalentAmount(equivalentInThousand.toLocaleString()); // نمایش معادل به فرمت عددی
      }
    } else {
      setBuyAmount(''); // اگر ورودی اشتباه است مقدار خرید به صورت خالی تنظیم شود
      setEquivalentAmount(''); // معادل هم به صورت خالی تنظیم شود
    }
  };

  // تابع محاسبه معادل تومان برای فروش
  const handleSellAmountChange = (e) => {
    const weightInGrams = parseFloat(e.target.value); // وزن به گرم
    if (!isNaN(weightInGrams) && weightInGrams > 0) {
      setSellAmount(e.target.value);

      // فرض میکنیم قیمت فروش رو از اولین آیتم API می‌گیریم
      const priceSale = rates[0]?.price_sale;
      if (priceSale) {
        // تبدیل وزن از گرم به مثقال
        const weightInMithqals = weightInGrams / 4.3318;
        const equivalent = weightInMithqals * priceSale; // محاسبه معادل تومان برای فروش
        const equivalentInThousand = equivalent / 1000; // تقسیم بر 1000 تومان
        setSellEquivalentAmount(equivalentInThousand.toLocaleString()); // نمایش معادل به فرمت عددی
      }
    } else {
      setSellAmount(''); // اگر ورودی اشتباه است مقدار فروش به صورت خالی تنظیم شود
      setSellEquivalentAmount(''); // معادل هم به صورت خالی تنظیم شود
    }
  };

  const tabContent = {
    tab1: (
      <div className="tab-content sale-text">
        <div className="form-group">
          <div className="grid grid-rows-2">
            <div>
              <label className="gold-label">مقدار فـروش</label>
            </div>
            <div>
              <span className="gold-label">گرم طـلا</span>
              <input
                type="number"
                className="input-field"
                value={sellAmount}
                onChange={handleSellAmountChange}
                placeholder="مثال: 10"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="grid grid-rows-2">
            <div>
              <label className="gold-label">معـادل</label>
            </div>
            <div>
              <span className="gold-label">تومان</span>
              <input
                type="text"
                className="input-field"
                value={sellEquivalentAmount}
                readOnly
                placeholder="معادل را ببینید"
              />
            </div>
          </div>
        </div>
        <button className="action-button">فـروش</button>
      </div>
    ),

    tab2: (
      <div className="tab-content">
        <div className="form-group">
          <div className="grid grid-rows-2">
            <div>
              <label className="gold-label">مقدار خریـد</label>
            </div>
            <div>
              <span className="gold-label">گرم طـلا</span>
              <input
                type="number"
                className="input-field"
                value={buyAmount}
                onChange={handleBuyAmountChange}
                placeholder="مثال: 10"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="grid grid-rows-2">
            <div>
              <label className="gold-label">معـادل</label>
            </div>
            <div>
              <span className="gold-label">تومان</span>
              <input
                type="text"
                className="input-field"
                value={equivalentAmount}
                readOnly
                placeholder="معادل را ببینید"
              />
            </div>
          </div>
        </div>
        <button className="action-button">خـریـد</button>
      </div>
    )
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
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
      <div className="tabs-content">
        <h1>خرید طــلای آب شـده</h1>
        {tabContent[activeTab]}
      </div>
    </div>
  );
}

export default Tabs;
