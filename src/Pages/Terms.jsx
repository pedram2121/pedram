import React from 'react'


import Frame from '../../src/Image/Frame.png'
import cir from '../../src/Image/cir.png'
import Gre from '../../src/Image/Gre.png'
import WaveLines from './WaveLines'
import './Terms.css'



function Terms () {
  return (

       <div >

        <div className='grid grid-cols-1 md:grid-cols-3 justify-between text-white font-YekanBakh1' 
     style={{
       background: "#325FB3", 
       width: "100%", 
       maxWidth: "1600px", 
       height: "500px", 
       borderRadius: "25px", 
       alignItems: "center", 
       justifyContent: "center", 
       placeContent: "center", 
       placeItems: "center", 
       margin: "0 auto", 
       marginTop: "250px", // فاصله بیشتر
       marginBottom: "150px", 
       overflow: "hidden",
     }}>




{/* _____________________________________ ردیف اول سمت چپ قسمت بالا ___________________ Col 1 __________________ */}

         <div className='grid grid-rows-2' style={{ width: "100%", height: "100%",
            objectFit: "cover", marginRight:"466px" , marginTop:"-80px"}}>

{/* _____________________________________________ردیف اول________________________________________________ */}

<div style={{
  marginRight: "90px", 
  marginTop: "-80px", 
  zIndex: 1,
  transform: "rotate(100deg)", 
  position: "relative"
}}>
  <img src={cir} style={{
    // width: "100%",
    // maxWidth: "200px", // محدود کردن اندازه تصویر
    height: "auto",
  }} />
</div>

{/* _____________________________________ ردیف دوم سمت چپ قسمت پایین _____________________________________ */}

<div style={{
  marginTop: "170px", 
  marginLeft: "205px", 
  position: "relative"
}}>
  <img src={Frame} style={{
    // width: "100%", // تصویر را به اندازه div تنظیم می‌کند
    maxWidth: "300px", // حداقل عرض تصویر
    height: "auto"
  }} />
</div>


          </div>
{/* _________________________________________________ پایان Col 1  ________________________________________________________ */}






{/* _________________________________________________ شروع Col 2  ________________________________________________________ */}

<div style={{ marginTop: "-30px", width: "100%", maxWidth: "600px", padding: "0 10px" , marginTop:"20px" }}>
  <div>
    <div style={{
      marginTop:"",
      textAlign: "center",
      width: "15%", // Adjusted to be more responsive
      marginLeft: "220px",
      height: "25px",
      marginBottom: "40px",
      fontSize: "16px",
      fontFamily: "YekanBakh2",
      padding: "6px 12px",
      background: '#F59E0B',
      boxShadow: '0px 1px 2px rgba(105, 81, 255, 0.05)',
      borderRadius: "36px",
      overflow: "hidden",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center", }}>
      <div style={{textAlign: "center", color: '#FFFAF3', fontSize: "16px", fontFamily: "YekanBakh2", lineHeight: "18px", wordWrap: 'break-word', }}>توجه</div>
    </div>
  </div>

  <h1 style={{
    textAlign: "center", fontSize: "46px", marginBottom: "20px", letterSpacing: "1px", wordWrap: 'break-word'
  }}>
    قوانین و مقررات طلای خرداد
  </h1>
  <h1 style={{
    textAlign: "justify", direction: "rtl", fontSize: "16px", fontFamily: "YekanBakh2", letterSpacing: "1px"
  }}>
    کاربر گرامی، قوانین و مقررات پیش رو، به منزله قرارداد بین شما و شرکت سرمایه زرین ماندگار به شناسه ملی ۱۴۰۱۱۷۴۵۱۹۱ و شماره ثبت ۶۰۵۹۸۷؛ و تایید آن توسط شما و استفاده از خدمات سامانه طلای خرداد، به معنای امضای این قرارداد است. بنابراین خواهشمندیم پیش از هرگونه استفاده از سامانه، این سند را به طور کامل و به دقت مطالعه فرمایید. تعامل در طلای خرداد، منوط به موافقیت با قوانین و مقرراتی اسیت که 
    در زیر خدمت شما به تفصیل ارائه شده است.
  </h1>
</div>


{/* _________________________________________________ پایان Col 2  ________________________________________________________ */}






{/* _________________________________________________ شروع Col 3  ________________________________________________________ */}

<div className='grid grid-rows-3'>

<div>
 1
   <img style={{marginTop:"170px" , marginLeft:"455px"}} src={Gre}></img>
 </div>


 <div className='-mt-32 ml-72'>
   {
   WaveLines()
   }
</div>


<div style={{ marginLeft:"340px" , marginTop:"-80px" , zIndex:1}}>
   <img style={{width:"100%" , height:"100%" , transform: "rotate(90deg)"}} src={cir}></img>
</div> 
   </div>
      </div>



            <div style={{textAlign: "justify", direction: "rtl" , fontSize:"24px" ,
             padding:"100px" , fontFamily:"YekanBakh3" , marginBottom:"60px" 
             , marginTop:"-120px" , color:"#387CFF", marginRight:"60px" , marginLeft:"60px"}}>

              <h1> تعاریف اولیه طلای خرداد </h1>
              <br/>
              <p style={{color:"black" , fontSize:"24px"}}> میلی: برگرفته از عبارت «میلی گرم طلا» و نشان‌دهنده تعهد شرکت به تحویل یک میلی‌گرم (یک هزارم گرم) طلای ۱۸ عیار (عیار ۷۵۰) یا معادل آن با عیار دیگر به دارنده هر میلی است. معادل‌سازی طلای تحویلی به کاربر با استفاده از فرمول زیر انجام می‌شود: </p>
              <br/>
              <p style={{color:"black" , fontSize:"24px"}}> وزن طلای تحویلی به گرم = ۷۵۰/۱۰۰۰ / تعداد میلی * عیار تحویلی </p>
              <br/>
              <p style={{color:"black" , fontSize:"24px" , fontFamily:"YekanBakh3"}}> مثال: سامانه با رعایت رویه ذکر شده در بخش قوانین تحویل طلا، به دارنده هر ۴۰۰۰ میلی، ۴ گرم طلای ۱۸ عیار یا معادل آن یعنی ۳ گرم طلای ۲۴ عیار، تحویل می‌دهد. </p>
              <br/>
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 1. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه میلی: بستر نرم‎افزاری خرید و فروش و تبادل میلی بر اساس شرایط و ضوابط مندرج در این موافقت‎نامه است. </p>
              </div>
              
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 2. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه: در این موافقت‌نامه حسب مورد به سامانه میلی یا سایر سامانه‌های متعلق به شرکت که خدمات موضوع موافقت‌نامه حاضر بر بستر آن‌ها ارائه می‌شوند اطلاق می‌شود. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 3. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> شرکت: منظور شرکت سرمایه زرین ماندگار به شناسه ملی ۱۴۰۱۱۷۴۵۱۹۱ و شماره ثبت ۶۰۵۹۸۷، به عنوان طرف قرارداد کاربر و مالک سامانه میلی است </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 4. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> کاربر: شخصی حقیقی یا حقوقی که  با افتتاح حساب کاربری در سامانه و پذیرش این موافقتنامه به سامانه متصل می‌شود و از خدمات آن استفاده می‌کند. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 5. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> حساب کاربری: برای استفاده از خدمات سامانه، کاربران باید با تکمیل فرآیند ثبت نام، نسبت به ایجاد حساب کاربری در سامانه اقدام کنند. هر شخص فقط یک حساب کاربری می‌تواند داشته باشد. حساب کاربری شخص حقوقی، می‎تواند به صورت یک حساب کاربری جداگانه به نام شخص حقوقی باشد و یا از طریق حساب کاربری نماینده/نمایندگان معرفی شده از سوی شخص حقوقی در دسترس قرار گیرد. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 6. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> حساب میلی: منظور حساب کاربر نزد دفاتر الکترونیک سامانه است که کاربر می‌تواند از طریق آن میزان خالص موجودی میلی خود را مشاهده کند. هر کاربر می‌تواند یک یا چند حساب میلی در سامانه داشته باشد. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 7. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> کیف پول ریالی: منظور کیف پول الکترونیک کاربر در سامانه است که امکان شارژ آن از طریق واریز وجه به حساب شرکت به وسیله درگاه پرداخت و یا سایر ابزارهای بانکی وجود دارد و همچنین مبلغ ریالی حاصل از فروش میلی، به این کیف پول واریز می‌شود. کاربر امکان برداشت از این کیف پول و انتقال وجه موجود در آن، به حساب بانکی خود را دارد. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 8. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> خدمات: هر یک از قابلیت‌ها، امکانات و خدماتی که بر بستر یا توسط سامانه میلی و یا شرکت در اختیار کاربران قرار می‌گیرد. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 9. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> دسترسی: قابلیت استفاده خدمات ارائه شده توسط سامانه به موجب این موافقت‌نامه برای کاربر </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 10. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> اطلاعات شخصی: هر گونه اطلاعات متعلق به کاربر، از قبیل نشانی ایمیل، شماره تلفن همراه، شماره ملی، شماره حساب بانکی و شماره شبا، که به تنهایی یا در ترکیب با سایر اطلاعات برای شناسایی یک پروفایل، حساب کاربری یا سایر قابلیت‌های اختصاص یافته به کاربر مورد استفاده قرار می‌گیرد. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 11. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> موافقت‌نامه: منظور از موافقت‌نامه سند حاضر است که کاربر با ایجاد حساب کاربری مفاد و تعهدات آن را پذیرفته و سامانه میلی صرفاً با التزام کاربر به این تعهدات، خدمات خود را به کاربر ارائه مینماید. این موافقت‌نامه الکترونیکی، مطابق قانون تجارت الکترونیکی بوده و با اعلام موافقت الکترونیکی کاربر که در هنگام ایجاد حساب کاربری اخذ می‌شود، منعقد شده و برای طرفین لازم‌الرعایه است. این موافقت‌نامه الحاقی است و هرگونه تغییری در این موافقت‌نامه به تایید کاربر می‌رسد؛ در صورت عدم پذیرش، کاربر باید فوراً استفاده از خدمات را متوقف کرده و نسبت به لغو عضویت اقدام نماید. </p>
              </div>

            </div>
           
            <div style={{textAlign: "justify", direction: "rtl" , fontSize:"24px" ,
             padding:"100px" , fontFamily:"YekanBakh3" , marginBottom:"60px" 
             , marginTop:"-120px" , color:"#387CFF", marginRight:"60px" , marginLeft:"60px"}}>

              <h1> قوانین و تعهدات تغییرناپذیر سامانه میلی </h1>
              <br/>
              <p style={{color:"black" , fontSize:"24px"}}> قوانین زیر، تعهدات اساسی شرکت به کاربران میلی است و شرکت امکان تغییر این تعهدات را از خود سلب می‌کند: </p>
              <br/>
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 1. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> همواره معادل مجموع موجودی میلی کاربران سامانه، طلا به صورت فیزیکی در خزانه میلی نگهداری می‎شود. از لحظه خرید کاربران تا زمان تحویل طلای معادل میلی خریداری شده، مسئولیت حفظ و نگهداری این میزان طلا، بر عهده سامانه است. طلای معادل میلی، در تعریف میلی توضیح داده شده است. </p>
              </div>
              
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 2. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> شرکت همواره متعهد است پس از درخواست کاربر مبنی بر دریافت طلای معادل موجودی میلی، طلای معادل را به کاربر تحویل دهد. محدودیت‎های عملیاتی (مانند تعطیلات رسمی یا ساعت کاری) ممکن است در تحویل طلا تاخیر ایجاد کند ولی محدودیت‎ها نباید به شکلی باشد که به منزله تعلل یا امتناع شرکت از تحویل طلا به کاربر محسوب شود. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 3. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه ملزم است در صورت ثبت درخواست برداشت وجه، پس از استعلام حساب بانکی، وجه را حداکثر ظرف ۳ روز کاری به حساب کاربر به صورت ساتنا و پایا منتقل نماید. </p>
              </div>   

            </div>


            <div style={{textAlign: "justify", direction: "rtl" , fontSize:"24px" ,
             padding:"100px" , fontFamily:"YekanBakh3" , marginBottom:"60px" 
             , marginTop:"-120px" , color:"#387CFF", marginRight:"60px" , marginLeft:"60px"}}>

              <h1> حقوق و تعهدات سامانه </h1>
              <br/>
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 1. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه متعهد است همواره معادل میلی فروخته شده به کاربران، طلا در مالکیت خود داشته باشد و از لحظه خرید کاربران تا زمان تحویل طلای معادل میلی خریداری شده، مسئولیت حفظ و نگهداری این میزان طلا، بر عهده سامانه است. </p>
              </div>
              
              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 2. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> با توجه به قوانین و مقررات جاری کشور و شرایط مختلف، سامانه می‌تواند برای خرید و فروش میلی توسط کاربران، محدودیت‌هایی از قبیل سقف خرید و فروش و… تعیین کند. </p>
              </div>

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 3. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> هم‌زمان با انجام هرگونه عملیات اعم از خرید، فروش، برداشت از حساب، معامله، انتقال یا ثبت درخواست تحویل طلا، تمامی کارمزدهای سامانه دریافت می‌گردد. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 4. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه ملزم است در صورت ثبت درخواست برداشت وجه، پس از استعلام حساب بانکی، وجه را حداکثر ظرف ۳ روز کاری به حساب کاربر به صورت ساتنا یا پایا منتقل نماید. برداشت مبالغ کمتر از ۱۰۰ هزار ريال امکان‌پذیر نیست و انتقال وجه تنها به شماره حساب/شبا/کارت بانکی متعلق به کاربر انجام می‌شود. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 5. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> اگر اشتباهاً یا من غیر حق یا به جهت تداخل و مشکلات سیستمی، اعتبار و یا دارایی‌ای در کیف پول کاربر منظور (افزوده یا کاسته) گردد، سامانه می‌تواند بدون نیاز به اقدام قانونی یا قضایی نسبت به تصحیح اشتباه و بازگرداندن وضعیت به حالت صحیح اقدام نماید. اقدامات سامانه در راستای اصلاح اشتباهات مورد تایید کاربر بوده و از این جهت کاربر مسئولیت و ادعایی را متوجه سامانه نخواهد کرد. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 6. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> در صورتی ‌که به‌ موجب دستور مقام قضائی و یا مرجع انتظامی فعالیت‌های کاربر غیرقانونی اعلام گردد و یا دستور توقیف وصول شود، حساب کاربری و حساب‎های میلی مرتبط با آن، تعلیق و هرگونه فعالیت کاربری و موجودی حساب میلی و کیف پول کاربر تا تعیین تکلیف نهایی، مسدود می‌گردد. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 7. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> سامانه میلی یک سامانه آنلاین است که دستورات و سفارش‌های کاربران را به نام و حساب آنان انجام می‌دهد و هیچ‌گونه عملیاتی را خارج از حدود اختیار و دستورات کاربران انجام نمی‌دهد. کاربران اعلام و اذعان می‌کنند رابطه سامانه با ایشان مشمول قوانین کار و تأمین اجتماعی یا سایر قوانین و مقررات مرتبط با آن نیست. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 8. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> با توجه به نوسانات احتمالی قیمت، خرید میلی تنها پس از پرداخت، نهایی می‌شود و ثبت درخواست خرید میلی، تا پیش از پرداخت نهایی از سوی کاربر، قطعی محسوب نمی‌گردد. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 9. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> شرکت هیچ‌گونه تعهدی در خصوص معاملات درخواست شده در خارج از سامانه، ندارد. </p>
              </div>   

              <div className='flex'>
                <p style={{color:"black" , fontSize:"24px"}}> 10. </p> 
                <p style={{color:"black" , fontSize:"24px"}}> محدودیت‌های تراکنش در میلی به تفکیک حساب‌های کاربران حقیقی و حقوقی در صفحه محدودیت‌های تراکنش در میلی آورده شده است.  </p>
              </div>   
            </div>

        
       </div>
  )
}

export default Terms
