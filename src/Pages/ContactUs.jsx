import React from 'react'
import Envelope from '../../src/Image/Envelope.png'
import PhoneCall from '../../src/Image/PhoneCall.png'
import MapPinLine from '../../src/Image/MapPinLine.png'
import Vector from '../../src/Image/Vector.png'
import instagram from '../../src/Image/instagram.png'
import Linkdin from '../../src/Image/Linkdin.png'
import Line2 from '../../src/Image/Line2.png'


function ContactUs () {
  return (
    <>
    
      
        <div  style={{ fontFamily: 'Vazirmatn2', padding: '20px' , width:"80%" , margin:"auto" }}>
      {/* بخش عنوان */}
      <div className="text-center mt-96 ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Vazirmatn2">
          پاسخگوی شما هستیم
        </h1>
        <p className="text-base sm:text-sm lg:text-xl mt-5 mx-auto max-w-3xl mb-44">
          طلای خرداد در روزهای شنبه تا چهارشنبه از ساعت ۹ صبح تا ۱۸ پاسخگوی سوالات، نظرات، پیشنهادات و انتقادات کاربران است. شما می‌توانید سوالات مربوط به خرید، فروش، تبادل و دریافت طلا را از پشتیبانان طلای خرداد بپرسید. هم‌چنین می‌توانید، پاسخ سوالات رایج خود را در صفحه سوالات متداول مشاهده کنید. اگر پاسخ سوالتان را پیدا نکردید، از طریق تماس تلفنی یا ایمیل، با ما مطرح کنید
       </p>
      </div>

      {/* بخش فرم تماس */}
      <div className="flex flex-col lg:flex-row justify-center items-center
       my-20 space-y-10 lg:space-y-0 lg:space-x-10 mb-44">
        {/* ستون اول */}
        <div className="bg-gray-100 p-14 rounded-lg lg:w-2/3 h-[700px] -mr-10
        rounded-tr-none rounded-br-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* فیلد نام خانوادگی و ایمیل */}
            <div className="flex flex-col space-y-4">
              <label className="text-right font-YekanBakh2">نام خانوادگی</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="نام خانوادگی خود را وارد کنید"
              />
              <label className="text-right font-YekanBakh2">ایمیل</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>

            {/* فیلد نام و شماره تماس */}
            <div className="flex flex-col space-y-4 ">
              <label className="text-right font-YekanBakh2">نام</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="نام خود را وارد کنید"
              />
              <label className="text-right font-YekanBakh2">شماره تماس</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                placeholder="شماره تماس خود را وارد کنید"
              />
            </div>
            <br/>
          </div>
          <div className="flex flex-col space-y-4 text-right ">
              <label className="text-right font-YekanBakh2">موضوع</label>
              <input
                className="w-full p-3 rounded-lg border border-gray-300 text-right" 
                placeholder=" موضوع خود را اینجا بنویسید "
              />
              <label className="text-right font-YekanBakh2"> متن پیام </label>
              <input
                className="w-full h-40 p-3 rounded-lg border border-gray-300 text-right"
                placeholder=" متن پیام خود را اینجا بنویسید "
              />
               <div className=''>
                <button className='bg-blue-500 py-3 rounded-xl text-white mt-4 text-right px-10'>
                ثبت و ارسال
                </button>
                </div>
            </div>

               
            

        </div>

        {/* ستون دوم */}
        <div className="bg-blue-500 text-white p-14 rounded-lg lg:w-1/3 relative text-right h-[700px] rounded-l-none">

   {/* _______________ */}
    <div style={{width: '20%', height: '13%',  marginLeft:"430px" ,
     transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.1,
      background: 'white', borderRadius: 10.73 , marginTop:"-40px"}} />

    <div style={{width: '20%', height: '13%',  marginLeft:"370px" ,
     transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.1,
      background: 'white', borderRadius: 10.73 , marginTop:"-15px"}} />


    <div style={{width: '20%', height: '13%',  marginLeft:"330px" ,
     transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.1,
      background: 'white', borderRadius: 10.73 , marginTop:"-160px"}} /> 

     <div style={{width: '20%', height: '13%',  marginLeft:"390px" ,
     transform: 'rotate(45deg)', transformOrigin: '0 0', opacity: 0.1,
      background: 'white', borderRadius: 10.73 , marginTop:"-140px"}} /> 
   {/* _______________ */}

         <h1 className="text-4xl font-YekanBakh1 mb-5 mt-20">تماس با ما</h1>

          {/* اطلاعات تماس و شکل های نامه و تلفن*/}
          <div className="space-y-5 mt-20">
            <div>
              <div style={{width:"65px" , height:"65px", opacity: 0.1,
               background: 'white', borderRadius:"100%" , marginLeft:"300px" , marginTop:"-25px" }}>  
               </div>
               <img style={{zIndex:1 , marginLeft:"317px" , marginTop:"-47px"}} src={Envelope}></img>
               <h2 className="text-lg opacity-70 text-slate-300 mr-24 -mt-10" style={{fontSize:"16px"}}>ایمیل</h2>
               <p className="opacity-90 text-white mr-24" style={{fontSize:"16px"}}>info@TJMKK.com</p>
            </div>           

            <div> 
            <div style={{width:"65px" , height:"65px", opacity: 0.1,
               background: 'white', borderRadius:"100%" , marginLeft:"300px" , marginTop:"30px" }}>  
               </div>
               <img style={{zIndex:1 , marginLeft:"317px" , marginTop:"-47px"}} src={PhoneCall}></img>
              <h2 className="text-lg opacity-70 text-slate-300 mr-24 -mt-10" style={{fontSize:"16px"}}>شماره تماس پشتیبانی</h2>
              <p className="opacity-90 text-white mr-24" style={{fontSize:"16px"}}>021-91200150</p>
            </div>

            <div>
            <div style={{width:"65px" , height:"65px", opacity: 0.1,
               background: 'white', borderRadius:"100%" , marginLeft:"300px" , marginTop:"30px" }}>  
               </div>
               <img style={{zIndex:1 , marginLeft:"317px" , marginTop:"-47px"}} src={MapPinLine}></img>
              <p className="opacity-90 text-white mr-24 -mt-10 " style={{fontSize:"16px"}}>
                بلوار نلسون ماندلا، نرسیده به چهار  راه جهان کودک، کوچه ناوک، پلاک ۶، طبقه ۳
              </p>
            </div>
          </div>
          
          <div className='mt-24 ml-80'>
            <img src={Line2}></img>
          </div>
          <div className='-mt-3 mr-20'>
            <h1 style={{fontSize:"16px"}}> ما را در شبکه های اجتماعی دنبال کنید </h1>
          </div>

          {/* آیکون‌های شبکه‌های اجتماعی در آخر قسمت آبی رنگ */}

          <div className="flex justify-center items-center mt-16 -mr-36 space-x-5 relative">
         <img src={Vector} alt="Icon" className="absolute -mr-16 transform -translate-x-1/2"/>
         <div className="opacity-10 bg-white w-12 h-12 rounded-xl
          absolute left-1/2 transform -translate-x-1/2"></div>
        </div>

        <div className="flex justify-center items-center -mt- ml-5 -mr-[12px] space-x-5 relative">
         <img src={instagram}alt="Icon" className="absolute -mr-14 transform -translate-x-1/2"/>
         <div className="opacity-10 bg-white w-12 h-12 rounded-xl
        absolute left-1/2 transform -translate-x-1/2"></div>
          </div>

        <div className="flex justify-center items-center  -ml-[80px] space-x-5 relative">
         <img src={Linkdin} alt="Icon" className="absolute -mr-14 transform -translate-x-1/2"/>
        <div className="opacity-10 bg-white w-12 h-12 rounded-xl absolute left-1/2 transform -translate-x-1/2"></div>
        </div>



        </div>
      </div>
        </div>
        

    </>
  )
}

export default ContactUs
