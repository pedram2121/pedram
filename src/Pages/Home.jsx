import Group from '../../src/Image/Group 88.png'
import Group12 from '../../src/Image/Group12.png'
import Group1 from '../../src/Image/Group 89.png'
import Group2 from '../../src/Image/Group.png'
import Group3 from '../../src/Image/arrow-left.png'
import tik from '../../src/Image/badge-check 1.png'
import image1 from '../../src/Image/image 1.png'
import image2 from '../../src/Image/image 2.png'
import image3 from '../../src/Image/image 3.png'
import image4 from '../../src/Image/image 4.png'
import image5 from '../../src/Image/image 5.png'
import image16 from '../../src/Image/image16.png'
import GroupA from '../../src/Image/GroupA.png'
import GroupB from '../../src/Image/Groupb.png'
import GroupC from '../../src/Image/Groupc.png'
import Plus from '../../src/Image/Plus.png'
import icon from '../../src/Image/icon.png'
import Telegram from '../../src/Image/Telegram.png'
import Linkdin from '../../src/Image/Linkdin.png'
import instagram from '../../src/Image/instagram.png'
import Line2 from "../../src/Image/Line2.png";
import Tabs from '../components/Tabs'
import React from 'react';
import "./ResponsiveText.css";





function Home () {

  return (
    <>
    <div style={{}}>
   {/* ___________________________________ شروع قسمت اول - لاین اول هوم پیچ ________________________________________ */}
   
    <div style={{  width: "100%", 
  height: "100%", 
  alignContent: "center", 
  alignItems: "center", 
  textAlign: "center", 
  backgroundColor: "#F5F6F7", 
  position: "relative", 
  zIndex: 1 ,
  fontFamily:"Vazirmatn2",
  position:"relative",
  marginTop:"100px"}}>

      <div className='grid grid-cols-3'>

        {/* ////// End Col 1 */}
        <div>
        <div className='ml-40 mt-40'>
        <svg xmlns='http://www.w3.org/2000/svg' width='539' height='480' viewBox='0 0 539 483' fill='none'  >
         <path
         d='M3.65692 278.074C8.67114 299.495 17.6069 320.017 29.7568 339.189C111.013 467.547 333.697 536.927 446.582 431.621C462.782 416.497 476.732 400.81 488.561 384.73C527.26 331.993 542.753 275.207 537.932 221.401C534.01 177.659 516.653 135.941 487.468 100.014C475.896 85.7336 462.397 72.3523 447.097 60.1518C236.884 -108.181 -34.7214 113.227 3.65692 278.074Z'
        fill='#387CFF'/> </svg>
        </div>                             
        <img style={{marginTop:"60px",marginLeft:"650px"}} src={Group2}></img>   
         </div>
        {/* ////// Col 2  */}
        <div> 
         <img style={{  marginTop: '80px', marginLeft: '-30px', width: '10', height: '10'}}
            src={Group} ></img>
             <div style={{ width: '65%', height: '70%', background: 'white',  
                borderRadius: '20px', boxShadow: '1px 1px 20px', marginLeft: '-355px', marginTop: '-65px' }}>
             <div style={{ width: '65%', marginLeft: '-40px' }}>
             {Tabs()}
                </div>
                  </div>  
             <img style={{ marginLeft: '-415px', marginTop: '-560px' }} src={Group1} ></img>
                     <img style={{ marginLeft: '-430px', marginTop: '325px' }} src={Group12} ></img>
           
            </div>
        {/* ////// End Col 2 */}

        {/* ////// Col 3  */}

        <div className="responsive-container">
      <h1 className="main-title">
        معامله <span className="highlight">طــــــــلـا</span> آب شده
      </h1>
      <h1 className="subtitle">بـدون اجـرت</h1>
      <h1 className="subtitle">آنــلایــن و بــــه ســـادگی</h1>
      <h1 className="description">
        خرید طلای بدون اجرت حتی با ۱۰۰ هزار تومان به صورت ۲۴ ساعته و تحویل
        فیزیکی طلا
      </h1>
      </div>
        
        {/* ////// End Col 3 */}
        </div>
    </div>

  
   {/* ___________________________________ پایان قسمت اول هوم پیچ ________________________________________ */}


<br></br>
<br></br>
<br></br>
<br></br>



 {/* ___________________________________ شروع قسمت دوم لاین دوم هوم پیچ ________________________________________ */}

 <div style={{ marginTop: "150px"  }}>
  <div className="bg-white -mt-44 w-screen h-screen font-Vazirmatn1 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ml-4 mr-4 sm:ml-12 sm:mr-12 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96   ">
      
      {/* ////// Col 1 */}
      <div className="text-sm mt-32 flex flex-col gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6 pr-28 ">
        {/* Card 1 */}
        <div className="bg-slate-100 shadow mt-5 rounded-lg w-full h-[250px] p-4 sm:w-full md:w-64 lg:w-64 xl:w-64">
          <div className="mt-4 ml-48 w-16">
            <img className="-mt-4" src={tik} alt="Icon" />
          </div>
          <div className="text-right mt-6 mr-3 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}> دریافت فیزیکی طلای 18 عیار </h1>
          </div>
          <div className="text-right mt-6 mr-3 ml-5 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}>
              طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون اجرت،
              مالیات و کمیسیون فروشنده است
            </h1>
          </div>
          <div className="mt-5 ml-10">
            <button>
              <span className="font-Vazirmatn3 text-blue-700">
                خرید طـلای آب شده 18 عیار
              </span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-100 shadow -mt-2 rounded-lg w-full h-[250px] p-4 sm:w-full md:w-64 lg:w-64 xl:w-64 ">
          <div className="mt-4 ml-48 w-16">
            <img className="-mt-4" src={tik} alt="Icon" />
          </div>
          <div className="text-right mt-6 mr-3 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}> دریافت فیزیکی طلای 18 عیار </h1>
          </div>
          <div className="text-right mt-6 mr-3 ml-5 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}>
              طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون اجرت،
              مالیات و کمیسیون فروشنده است
            </h1>
          </div>
          <div className="mt-5 ml-10">
            <button>
              <span className="font-Vazirmatn3 text-blue-700">
                خرید طـلای آب شده 18 عیار
              </span>
            </button>
          </div>
        </div>
      </div>


      {/* ////// Col 2 */}
      <div className="text-sm mt-14 -ml-20 flex flex-col gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-6">
        {/* Card 1 */}
        <div className="bg-slate-100 shadow mt-5 rounded-lg w-full h-[250px] p-4 sm:w-full md:w-64 lg:w-64 xl:w-64">
          <div className="mt-4 ml-48 w-16">
            <img className="-mt-4" src={tik} alt="Icon" />
          </div>
          <div className="text-right mt-6 mr-3 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}> دریافت فیزیکی طلای 18 عیار </h1>
          </div>
          <div className="text-right mt-6 mr-3 ml-5 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}>
              طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون اجرت،
              مالیات و کمیسیون فروشنده است
            </h1>
          </div>
          <div className="mt-5 ml-10">
            <button>
              <span className="font-Vazirmatn3 text-blue-700">
                خرید طـلای آب شده 18 عیار
              </span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-100 shadow -mt-2 rounded-lg w-full h-[250px] p-4 sm:w-full md:w-64 lg:w-64 xl:w-64">
          <div className="mt-4 ml-48 w-16">
            <img className="-mt-4" src={tik} alt="Icon" />
          </div>
          <div className="text-right mt-6 mr-3 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}> دریافت فیزیکی طلای 18 عیار </h1>
          </div>
          <div className="text-right mt-6 mr-3 ml-5 font-Vazirmatn3">
            <h1 style={{ fontSize: '16px'}}>
              طلایی که از میلی می‌خرید، دارای کارمزدی شفاف و بدون اجرت،
              مالیات و کمیسیون فروشنده است
            </h1>
          </div>
          <div className="mt-5 ml-10">
            <button>
              <span className="font-Vazirmatn3 text-blue-700">
                خرید طـلای آب شده 18 عیار
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ////// Col 3 */}
      <div className="-mr-64 mt-48 sm:mt-24 px-4 sm:px-8 lg:px-16">
        <h1 className="text-right font-Vazirmatn1 text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10">
          <p className="font-Vazirmatn2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-right text-[#ECA700]">
            چــرا طــلای خــرداد؟
          </p>
          <br />
          <p className="text-base" style={{textAlign: "justify", direction: "rtl"}}>
            طلای خرداد سامانه‌ای ثبت‌شده و معتبر است که امکان معامله‌ی طلا
            با کمترین کارمزد و بدون محدودیت در مبلغ و زمان را فراهم آورده.
            طلای شما به صورت فیزیکی تامین شده و همراه با فاکتور رسمی قابل
            تحویل است
          </p>
        </h1>

        <div className="text-center sm:text-left mt-8 sm:mt-12">
          <button className="bg-blue-500 px-7 py-3 rounded-xl font-Vazirmatn2 text-white ml-[410px] sm:ml-0">
            خرید طلای آب شده
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

 {/* ___________________________________ پایان قسمت دوم هوم پیچ ________________________________________ */}







 {/* ___________________________________ شروع قسمت سوم و چهارم هوم پیچ ________________________________________ */}

  <div>

<div className='-mt-44 w-screen h-screen font-Vazirmatn1' style={{background:"#387CFF"}}>

<div className='grid grid-cols-2'>





  {/* ////// Col 1  */}

  <div className="h-80 font-Vazirmatn2 text-white ml-36 flex flex-col gap-5 sm:ml-10 sm:mx-auto -mt-16 pl-16">
  {/* Card 1 */}
  <div className="bg-slate-200 mt-36 rounded-xl w-80 h-52 sm:w-full sm:h-36 "
   style={{paddingBottom:"80px"}}>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"30px"}}>
      ثـبـت نـام و احـراز هویـت
    </h1>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"20px"}}>
      در کمتر از ۲ دقیقه تو میلی ثبت‌نام کن و احراز هویتت رو انجام بده
    </h1>
  </div>

  <div style={{
  width: "80px", 
  background: "#387CFF", 
  marginLeft: "320px", 
  marginTop: "-49px", 
  borderTopRightRadius: "10px", 
  borderTopLeftRadius: "10px", 
  textAlign: "center", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "flex-start"   
}}>
  <img 
    style={{
      background: '#387CFF',
      borderRadius: '5px',
      marginTop:"10px"
    }} 
    src={Group3} 
    className="sm:w-5 sm:mx-auto sm:mt-5" 
  />
</div>

  
  

  {/* Card 2 */}
  <div className="bg-slate-200 mt-12 rounded-xl w-80 h-52 sm:w-full sm:h-36 "
   style={{paddingBottom:"80px"}}>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"30px"}}>
    واریز به کیف پول
    </h1>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"20px"}}>
    به میزان دلخواه و شبانه‌روزی، کیف‌پولت رو شارژ کن
    </h1>
  </div>

  <div style={{
  width: "80px", 
  background: "#387CFF", 
  marginLeft: "320px", 
  marginTop: "-49px", 
  borderTopRightRadius: "10px", 
  borderTopLeftRadius: "10px", 
  textAlign: "center", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "flex-start"   
}}>
  <img 
    style={{
      background: '#387CFF',
      borderRadius: '5px',
      marginTop:"10px"
    }} 
    src={Group3} 
    className="sm:w-5 sm:mx-auto sm:mt-5" 
  />
</div>

  {/* Card 3 */}
  <div className="bg-slate-200 mt-12 rounded-xl w-80 h-52 sm:w-full sm:h-36 "
   style={{paddingBottom:"80px" , background:"#FFD56F"}}>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"30px"}}>
    خرید طلا
    </h1>
    <h1 className="text-center text-black text-sm sm:text-base" style={{marginTop:"20px"}}>
    هر قدر که مایلی، به صورت آنی و بدون محدودیت زمانی طلا بخر
    </h1>
  </div>

  <div style={{
  width: "80px", 
  background: "#387CFF", 
  marginLeft: "320px", 
  marginTop: "-49px", 
  borderTopRightRadius: "10px", 
  borderTopLeftRadius: "10px", 
  textAlign: "center", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "flex-start"   
}}>
  <img 
    style={{
      background: '#387CFF',
      borderRadius: '5px',
      marginTop:"10px"
    }} 
    src={Group3} 
    className="sm:w-5 sm:mx-auto sm:mt-5" 
  />
</div>

  {/* Card 4 */}
  <div className="bg-slate-200 shadow-xl mt-5 rounded-xl w-96 h-40 sm:w-full sm:h-36 p-4 pb-6">
    <h1 className="text-center text-black pt-6 text-sm sm:text-base">
      فروش یا دریافت فیزیکی طلا
    </h1>
    <h1 className="text-center text-black pt-8 text-sm sm:text-base">
      هر زمان که بخوای، می‌تونی موجودی طلای خودت رو بفروشی یا به صورت
      شمش‌های گرمی طلا تحویل بگیری
    </h1>
  </div>
</div>







 {/* ////// Col 2  */}

  <div className="mt-80 mr-52 flex flex-col items-end">

<h1
  style={{
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Vazirmatn2',
    textAlign: 'right',
  }}
>
  ... به راحتی چند کلیک
</h1>

<h1
  style={{
    fontSize: '17px',
    color: 'white',
    fontFamily: 'Vazirmatn3',
    textAlign: 'right',
    marginTop: '30px',
  }}
>
  خرید و فروش طلای آب شده یکی از انواع محبوب سرمایه‌گذاری در ایران
  است که باعث می‌شود از سرمایه خود در برابر تورم محافطت کنید و سود
  ببرید. برای خرید طلا ابشده می‌توانید به صورت حضوری به
  طلافروشی‌ها مراجعه کنید؛ اما روش خرید طلای آب شده آنلاین بسیار
  سریع‌تر، راحت‌تر و امن‌تر است
</h1>

<button
  style={{
    background: '#ECA700',
    color: 'white',
    borderRadius: '6px',
    padding: '11px',
    paddingRight: '20px',
    paddingLeft: '20px',
    fontFamily: 'Vazirmatn3',
    marginTop: '30px',
  }}
  className="mt-5 sm:mx-auto md:mx-0"
>
  <span style={{ color: 'white' }}>خـریـد طـلای آب شـده</span>
</button>
</div>




</div> 
</div>







<div className='bg-white w-auto h-screen font-Vazirmatn2'>
<div className="bg-white w-auto h-screen font-Vazirmatn2">
  <div className="mt-40 text-center">
    <h1 className="text-4xl mb-5">مـجـوز هـا</h1>
    <p className="text-lg mb-10">بستر امن طلای خرداد، تمامی مجوزهای خرید و فروش طلا آب شده رو داره؛ با خیال راحت سرمایه‌گذاری کن</p>
    <div className="flex flex-wrap justify-center gap-5 mt-14">
      <img src={image1} alt="License 1" className="w-1/4 md:w-auto" />
      <img src={image2} alt="License 2" className="w-1/4 md:w-auto" />
      <img src={image3} alt="License 3" className="w-1/4 md:w-auto" />
      <img src={image4} alt="License 4" className="w-1/4 md:w-auto" />
      <img src={image5} alt="License 5" className="w-1/4 md:w-auto" />
    </div>
  </div>
</div>

  </div>
  </div>
 {/* ___________________________________ پایان قسمت سوم و چهارم هوم پیچ ________________________________________ */}









 {/* ___________________________________ شروع قسمت پنجم سوالات متداول هوم پیچ ________________________________________ */}

 <div style={{ fontFamily: "Vazirmatn2" }}>
  <div style={{ fontFamily: "Vazirmatn1", marginTop: "-450px" }}>
    <div style={{ width: "100%", height: "100%",  paddingTop: 50,  paddingBottom: 60, flexDirection: "column",
       justifyContent: "flex-start", alignItems: "center", gap: 60, display: "inline-flex",}}>
    
       <div style={{  alignSelf: "stretch",  height: 107, flexDirection: "column", justifyContent: "center", alignItems: "center",
        gap: 8,  display: "flex", }} >

        <div style={{textAlign: "center", color: "#334155", fontSize: 40, fontWeight: "725",wordWrap: "break-word", }} >
          سوالات متداول
        </div>

        <div style={{ textAlign: "right", color: "#334155", fontSize: 24, fontWeight: "450", wordWrap: "break-word",}} >
          سوالات احتمالی شما در مورد خرید طلای آب شده
        </div>

      </div>
    </div>
  </div>


  {/* سوالات و عکس‌ها */}
  {[
    "طــلای خــرداد چیست ؟",
    "کارمزد خرید طلای آب‌شده در طلای خرداد چقدر است؟",
    "طلای خرداد چه خدماتی ارائه می‌دهد؟",
    "قیمت طلا در طلای خرداد بر چه اساسی تعیین می‌شود؟",
    "طلای ۱۸ عیار یعنی چه و چه تفاوتی با سایر عیارهای طلا دارد؟",
    "نحوه استفاده از طلای خرداد چگونه است؟",
    "آیا به‌ازای طلای آب شده که در طلای خرداد می‌فروشید طلای واقعی وجود دارد؟",
    "آیا به صورت سازمانی هم امکان خرید و فروش طلای آب شده در طلای خرداد وجود دارد؟",
   ].map((question, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px #E2E8F0 solid",
        width: "70%",
        borderColor: "black",
        textAlign: "right",
        margin: "20px auto",
        padding: "10px 20px",
        fontFamily: "Vazirmatn3",
      }}
     >
      <p
        className="mr-10 mt-5 mb-5"
        style={{
          fontSize: "16px",
          marginRight: "10px",
          textAlign: "right",
          flex: 1,
        }}
      >
        {question}
      </p>
      <img
        style={{
          width: "30px",
          height: "auto",
          marginLeft: "20px",
        }}
        src={Plus}
        alt="Plus icon"
      />
    </div>
  ))}
</div>

 {/* ___________________________________ پایان قسمت پنجم سوالات متداول هوم پیچ ________________________________________ */}



<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>





    </div>
    </>
  )
}

export default Home
