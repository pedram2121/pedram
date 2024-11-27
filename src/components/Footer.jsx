

import React from 'react'
import GroupA from '../../src/Image/GroupA.png'
import GroupB from '../../src/Image/Groupb.png'
import GroupC from '../../src/Image/Groupc.png'
import icon from '../../src/Image/icon.png'
import Telegram from '../../src/Image/Telegram.png'
import Linkdin from '../../src/Image/Linkdin.png'
import instagram from '../../src/Image/instagram.png'
import pp from '../Image/pp.png'
import Un from '../Image/Un.png'


function Footer() {
  return (
   
    <div className='w-screen'>
    <div className='text-center text-white font-Vazirmatn4 w-full '>
    {/* Row 1 */}
    <div className='flex flex-col lg:flex-row items-center bg-blue-500
     py-10 px-10 '>
     
     <div className="relative w-[431px] h-[560px] mt-16 mx-auto">
  {/* قاب گوشی */}
  <div className="absolute top-2 left-3 w-[407px] rounded-l-[40px] h-[880px] border-2 border-[#C4B5FD] rounded-r-[30px] rounded-3xl"></div>
  <div className="absolute -top-1 left-1 w-[423px] rounded-r-[40px] h-[860px] border-2 border-[#C4B5FD] rounded-l-[53px]"></div>
  {/* نوارهای سمت چپ */}
  <div className="absolute left-0 top-[177px] w-1 h-10 border-2 border-[#C4B5FD] rounded-t-md"></div>
  <div className="absolute left-0 top-[233px] w-1 h-10 border-2 border-[#C4B5FD] rounded-t-md"></div>
  <div className="absolute left-0 top-[289px] w-1 h-10 border-2 border-[#C4B5FD] rounded-t-md"></div>

  {/* نوار سمت راست */}
  <div className="absolute right-0 top-[221px] w-1 h-16 border-2 border-[#C4B5FD] rounded-t-md rotate-180"></div>

  {/* تصویر گوشی */}
  <img
    className="absolute top-6 left-7 w-[375px] h-[512px] border-2 border-[#C4B5FD] rounded-2xl"
    src={pp} 
    alt="گوشی"/></div>
  


    {/* نوشته کنار گوشی */}
     
    <div className='lg:w-1/2 text-right px-4 -mt-40 -mr-80 '>
    <h1 className='text-2xl sm:text-xl md:text-3xl lg:text-4xl mb-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
      دریافت اپلیکیشن طلای خرداد
    </h1>
    <p className='text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 leading-loose'>
      خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
    </p>
    </div>


    {/* عکس‌ها در گوشه راست */}
   
   <div className='mt-64  -ml-10 lg:mr-44'>
  <div className='grid grid-cols-2 gap-4 justify-end '>
  <img className='w-40 h-12' src={GroupA} alt='اپلیکیشن A' />
  <img className='w-40 h-12' src={GroupB} alt='اپلیکیشن B' />
  <img className='w-40 h-12' src={GroupC} alt='اپلیکیشن C' />
  <img className='w-40 h-12 rounded-lg' src={Un} alt='اپلیکیشن D' />
  </div>
   </div>

   </div>
    


    {/* Row 2 */}
    <div className='bg-blue-950  -mt-20 absolute w-screen py-16' style={{ fontSize: '16px'}}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white '>
        
        {/* ستون شبکه‌های اجتماعی */}
        <div className='flex flex-col items-center py-14'>

        
          <div className='bg-opacity-10 bg-white py-6 px-16 rounded-md '>
          </div>
          <p style={{color:"white" , marginTop:"-35px" , marginRight:"60px" , fontSize: '16px' }}>تلگرام</p>
          <img style={{ marginTop:"-22px" , marginLeft:"60px"}} src={Telegram} alt='تلگرام' />

        <br/>

         <div className='bg-opacity-10 bg-white py-6 px-16 rounded-md '>
          </div>
          <p style={{color:"white" , marginTop:"-35px" , marginRight:"60px" , fontSize: '16px' }}>تلگرام</p>
          <img style={{ marginTop:"-22px" , marginLeft:"60px"}} src={Linkdin} alt='تلگرام' />
          <br/>

          <div className='bg-opacity-10 bg-white py-6 px-16 rounded-md '>
          </div>
          <p style={{color:"white" , marginTop:"-35px" , marginRight:"60px" , fontSize: '16px' }}>تلگرام</p>
          <img style={{ marginTop:"-22px" , marginLeft:"60px"}} src={instagram} alt='تلگرام' />


          
        </div>

        {/* ستون لینک‌ها */}
        <div className='flex flex-col items-center py-14'>
          <h1 className='text-lg mb-4'>ارتباط بیشتر</h1>
          <ul className='space-y-3'>
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>قوانین و مقررات</li>
            <li>حریم خصوصی</li>
          </ul>
        </div>

        {/* ستون دیگر لینک‌ها */}
        <div className='flex flex-col items-center py-14 mr-80'>
          <h1 className='text-lg mb-4'>دسترسی سریع</h1>
          <ul className='space-y-3'>
            <li>مجوز ها</li>
            <li>مشتریان حقوقی</li>
            <li>کارمزد ها</li>
            <li>راهنمای استفاده</li>
          </ul>
        </div>

        {/* ستون برند */}
        <div className='flex flex-col items-center py-14 mr-20' style={{ fontSize: '16px'}} >
          <div className='flex flex-row-reverse items-center mb-4'>
            <img className='-mr-20' src={icon} alt='آیکون' />
            <h1 className='text-3xl mr-2' style={{ fontSize: '36px'}}>طلای خرداد</h1>
          </div>
          <p className='text-ls text-white leading-loose  mr-11 -mx-20 ' style={{textAlign: "justify", direction: "rtl" , fontSize: '17px'}}>
          خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید
           و سود ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار سریع‌تر، راحت‌تر و امن‌تر است
          </p>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className='text-center mt-10'>
        <div className='border-t border-gray-600 mx-auto my-5' style={{ width: '80%' , fontSize: '16px' }}></div>
        <p className='text-xs' style={{ fontSize: '16px' , color:"white"}}>تمامی حقوق مادی و معنوی برای سرمایه زرین ماندگار محفوظ می باشد</p>
      </div>
    </div>
    </div>
    </div>


  )
}

export default Footer
