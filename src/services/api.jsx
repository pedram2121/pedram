import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = "https://demo.meetwork.ir/api/v1/public/rates";

// تابع برای دریافت داده‌ها از API
const fetchRates = async () => {
  const response = await axios.get(apiUrl);
  return response.data.data;
};

const GetProduct = () => {
  // استفاده از React Query برای بارگذاری داده‌ها
  const {
    data: rates,
    isLoading,
    isError,
    error,
  } = useQuery(['rates'], fetchRates, {
    // استفاده از caching و نگهداری داده‌ها در localStorage
    initialData: () => {
      const storedRates = localStorage.getItem('rates');
      if (storedRates) {
        try {
          return JSON.parse(storedRates); // اگر داده‌ها در localStorage موجود باشند
        } catch (err) {
          console.error("Error parsing localStorage data:", err);
          localStorage.removeItem("rates"); // حذف داده‌های خراب
        }
      }
      return []; // اگر هیچ داده‌ای در localStorage نبود
    },
    onSuccess: (data) => {
      localStorage.setItem('rates', JSON.stringify(data)); // ذخیره داده‌ها در localStorage
    },
  });

  // مدیریت حالت‌های مختلف بارگذاری و خطا
  if (isLoading) {
    return <div>در حال بارگذاری داده‌ها...</div>;
  }

  if (isError) {
    return <div>{`خطا: ${error.message}`}</div>;
  }

  return (
    <div>
      <h1>Rates</h1>
      {rates.length > 0 ? (
        <ul>
          {rates.map((rate) => (
            <li key={rate.id}>
              <strong>{rate.title}</strong>
              <br />
              خرید: {rate.price_buy} ریال
              <br />
              فروش: {rate.price_sale} ریال
              <br />
              تاریخ: {rate.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ داده‌ای برای نمایش وجود ندارد.</p>
      )}
    </div>
  );
};

export default GetProduct;
