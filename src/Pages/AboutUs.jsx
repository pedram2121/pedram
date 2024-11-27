

import React from 'react'
import mmm from '../../src/Image/mmm.png'
import user from '../../src/Image/user.png'
import ssm from '../../src/Image/ssm.png'
import bg from '../../src/Image/bg.png'
import jm from '../../src/Image/jm.png'

function AboutUs() {
  return (
    <div>
      {/* بخش عنوان درباره ما */}
      <div className="text-center mt-20 sm:mt-24 md:mt-36 lg:mt-44 font-YekanBakh2">
        <h1 className="text-2xl mt-96 sm:text-3xl md:text-4xl lg:text-5xl font-YekanBakh1">
          درباره ما
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-5 mx-auto max-w-3xl mb-20 sm:mb-24 md:mb-36 lg:mb-44" style={{textAlign: "justify", direction: "rtl" , fontSize:"20px"}}>
          خرید و فروش طلای آب‌شده به عنوان یکی از متداول‌ترین و موثرترین روش‌های حفظ ارزش سرمایه و افزایش قدرت خرید است. طلا به دلیل دو ویژگی ارزش ذاتی و قابلیت نقدشوندگی بالا، همواره در سبد سرمایه گذاری قرار دارد. با طلا میتوان در مقابل نوسانات بازار قدرتمند شد. در میلی می‌توان به هر میزان طلای آب شده خرید و یا طلای خریداری شده را به میلی فروخت. هم‌چنین امکان انتقال و هدیۀ طلا در میلی به راحتی و آنی وجود دارد.
        </p>
      </div>

      {/* ___________________________________________ لاین دوم زرد رنگ ____________________________________________ */}

      <div className="grid grid-rows-1" style={{ background: "#FFF4DB" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-14 md:mt-20">
          <div className="flex flex-col items-center md:items-start px-6 md:px-16 lg:px-24">
            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-YekanBakh1 mt-8 sm:mt-14 md:mt-20 ml-52">
             ... طلای خرداد انتخابی درست
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mx-20 mt-5 max-w-3xl
             mb-10 sm:mb-14 md:mb-20 lg:mb-24 font-YekanBakh2"
              style={{fontSize:"18px" ,  textAlign: "justify", direction: "rtl"}}>
              ما در میلی با هدف تسهیل سرمایه‌گذاری عموم مردم، بستری برای خرید و فروش آنلاین طلا فراهم کرده‌ایم. واحد سرمایه‌گذاری در میلی، یک میلی‌گرم طلای ۱۸ عیاره. کاربر تو هر
               زمان می‌تونه طلای آنلاین خریداری شده‌اش تو میلی رو بفروشه و وجه اون رو دریافت کنه و یا معادل طلای خریداری شده‌اش رو در قالب شمش‌های طلای گرمی 18 عیار (مورد تایید اتحادیه) همراه با فاکتور رسمی تحویل بگیره
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4
             md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-14 ml-20">
              <div
                style={{
                  background: "#E7F5E8",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
                className="w-full h-20 md:w-64 lg:w-72">
              <div className='grid grid-rows-2'>
                <div  className='-mr-20'>
                <h1 style={{fontSize:"15px" , fontFamily:"YekanBakh2",
                marginTop:"19px"
                 }}> دسترسی آسان </h1>
                </div>

                <div className='-mr-20'>
                <h1 style={{fontSize:"13px" , fontFamily:"YekanBakh2"
                 }}> برای کاربران عادی  </h1> 
                </div>
                </div>

              <div>
              <img style={{marginLeft:"100px"}} src={jm}></img>
              </div>
                
              </div>



              <div
                style={{
                  background: "#E7F8E8",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
                className="w-full h-20 md:w-64 lg:w-72">  

                <div className='grid grid-rows-2'>
                <div  className='-mr-20'>
                <h1 style={{fontSize:"15px" , fontFamily:"YekanBakh2",
                marginTop:"19px"
                 }}> دسترسی آسان </h1>
                </div>

                <div className='-mr-20'>
                <h1 style={{fontSize:"13px" , fontFamily:"YekanBakh2"
                 }}> برای کاربران عادی  </h1> 
                </div>
                
                </div>

              <div>
              <img style={{marginLeft:"100px"}} src={user}></img>
              </div>
              


              </div>

              <div
                style={{
                  background: "#E7F5E8",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
                className="w-full h-20 md:w-64 lg:w-72">
              
              <div className='grid grid-rows-2'>
                <div  className='-mr-20'>
                <h1 style={{fontSize:"15px" , fontFamily:"YekanBakh2",
                marginTop:"19px"
                 }}> دسترسی آسان </h1>
                </div>

                <div className='-mr-20'>
                <h1 style={{fontSize:"13px" , fontFamily:"YekanBakh2"
                 }}> برای کاربران عادی  </h1> 
                </div>
                </div>
              <div>
              <img style={{marginLeft:"100px"}} src={ssm}></img>
              </div>
              
              </div>

              <div
                style={{
                  background: "#E7F5E8",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px",
                }}
                className="w-full h-20 md:w-64 lg:w-72">
              <div className='grid grid-rows-2'>
                <div  className='-mr-20'>
                <h1 style={{fontSize:"15px" , fontFamily:"YekanBakh2",
                marginTop:"19px"
                 }}> دسترسی آسان </h1>
                </div>

                <div className='-mr-20'>
                <h1 style={{fontSize:"13px" , fontFamily:"YekanBakh2"
                 }}> برای کاربران عادی  </h1> 
                </div>
                </div>

              <div>
              <img style={{marginLeft:"100px"}} src={bg}></img>
              </div>
                
              </div>
            </div>
          </div>

          {/* تصویر */}
          <div className="flex justify-center mt-8 md:mt-0">
            <img src={mmm} alt="Image" className="max-w-full h-auto" />
          </div>




        </div>
      </div>
      
       {/* ___________________________________________ لاین سوم سفید رنگ ____________________________________________ */}

      <div>
      <div
  style={{
    width: '100%',
    padding: '40px 20px', // کاهش padding در صفحات کوچک
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap', // برای تنظیم عناصر در خطوط مختلف در صفحات کوچک
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '24px',
    fontFamily: 'YekanBakh2',
  }}
>
  {[
    { value: '580', label: 'تعداد تراکنش ها' },
    { value: '3000', label: 'مقدار طلای فروخته شده به گرم' },
    { value: '2000', label: 'مقدار طلای خریداری شده به گرم' },
    { value: '1230', label: 'کاربر فعال' },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        flex: '1 1 300px', // اندازه پایه هر آیتم (min-width 300px)
        maxWidth: '312px', // حداکثر عرض
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            color: '#387CFF',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '56px',
            wordWrap: 'break-word',
          }}
        >
          {item.value}
        </span>
        <span
          style={{
            color: '#387CFF',
            fontSize: '48px',
            fontFamily: 'Lexend',
            fontWeight: 300,
            lineHeight: '56px',
            wordWrap: 'break-word',
          }}
        >
          +
        </span>
      </div>
      <div
        style={{
          textAlign: 'center',
          color: '#747481',
          fontSize: '16px',
          fontWeight: 450,
          textTransform: 'uppercase',
          lineHeight: '16px',
          letterSpacing: '0.16px',
          wordWrap: 'break-word',
        }}
      >
        {item.label}
      </div>
    </div>
  ))}
</div>

      </div>


    </div>
  );
}


export default AboutUs
