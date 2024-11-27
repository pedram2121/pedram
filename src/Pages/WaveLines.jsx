import React, { useState } from 'react';

const WaveLines = () => {
  const [lineCount, setLineCount] = useState(20); // تعداد خطوط
  const [amplitude, setAmplitude] = useState(10); // انحنا
  const [waveFrequency, setWaveFrequency] = useState(2); // فرکانس موج
  const [opacity, setOpacity] = useState(0.03); // تنظیم مقدار opacity

  // تابع برای رسم خط موج‌دار به صورت عمودی
  const generateVerticalWaveLine = (xOffset, amplitude, frequency) => {
    const points = [];
    for (let y = 0; y <= 400; y++) {
      // تبدیل به موج سینوسی برای تغییرات عمودی
      const wave = amplitude * Math.sin(frequency * y * Math.PI / 180);  // موج عمودی
      const x = xOffset;  // موقعیت ثابت x برای خط عمودی
      const yPos = y + wave;  // تغییرات عمودی برای ایجاد موج
      points.push(`${x},${yPos}`);
    }
    return `M ${points.join(' L ')}`;
  };

  // تابع برای رسم خط موج‌دار به صورت افقی
  const generateHorizontalWaveLine = (yOffset, amplitude, frequency) => {
    const points = [];
    for (let x = 0; x <= 400; x++) {
      // تبدیل به موج سینوسی برای تغییرات افقی
      const wave = amplitude * Math.sin(frequency * x * Math.PI / 180);  // موج افقی
      const y = yOffset;  // موقعیت ثابت y برای خط افقی
      const xPos = x + wave;  // تغییرات افقی برای ایجاد موج
      points.push(`${xPos},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const verticalWavePaths = [];
  const horizontalWavePaths = [];

  // رسم خطوط عمودی
  for (let i = 0; i < lineCount; i++) {
    const xOffset = (i + 1) * 20;  // فاصله خطوط عمودی
    const frequency = waveFrequency + i * 0.1;
    verticalWavePaths.push(
      <path
        key={`vertical-${i}`}
        d={generateVerticalWaveLine(xOffset, amplitude, frequency)}  // رسم هر خط عمودی
        stroke="black"  // رنگ سیاه برای خطوط عمودی
        strokeWidth="2"
        fill="none"
        strokeOpacity={opacity}  // تنظیم opacity برای خطوط عمودی
      />
    );
  }

  // رسم خطوط افقی
  for (let i = 0; i < lineCount; i++) {
    const yOffset = (i + 1) * 20;  // فاصله خطوط افقی
    const frequency = waveFrequency + i * 0.1;
    horizontalWavePaths.push(
      <path
        key={`horizontal-${i}`}
        d={generateHorizontalWaveLine(yOffset, amplitude, frequency)}  // رسم هر خط افقی
        stroke="black"  // رنگ سیاه برای خطوط افقی
        strokeWidth="2"
        fill="none"
        strokeOpacity={opacity}  // تنظیم opacity برای خطوط افقی
      />
    );
  }

  return (
    <div>
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        {/* رسم خطوط عمودی موج‌دار */}
        {verticalWavePaths}

        {/* رسم خطوط افقی موج‌دار */}
        {horizontalWavePaths}
      </svg>

      {/* کنترل‌های قابل تنظیم برای تعداد خطوط، انحنا، فرکانس موج و opacity */}

    </div>
  );
};

export default WaveLines;
