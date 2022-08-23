import React from "react";

//img
import heroBg from "../sources/images/heroBg.jpg";

const Hero = () => {
  return (
    <div
      className="hero h-screen sticky top-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center flex-col !justify-around text-neutral-content py-5 mt-5">
        <div className="max-w-lg mx-5 sm:mx-0">
          <h1 className="mt-10 mb-5 text-3xl font-bold">
            گروه تحقیقاتی آموزشی داروسازی
          </h1>
          <p className="mb-5 text-sm sm:text-base">
            گروه‌ آموزشی تحقیقاتی ایماذین با شرکت تعدادی از رتبه های برتر آزمون
            دکترای تخصصی داروسازی شروع به کار کرد. برگزاری دوره های مشاوره، چاپ
            چندین عنوان کتاب از جمله تست های میکروطبقه بندی، خلاصه های طلایی
            دوران جمع بندی و درسنامه های جامع مجموعه دروس داروسازی در کنار
            برگزاری همایش های جمع بندی و تدریس در دانشگاه های تهران و شهید بهشتی
            از جمله فعالیت ها و سوابق درخشان این گروه آموزشی به شمار می رود.
            امیدوار هستیم با تکیه بر تجربیات تحقیقاتی، آموزشی، مشاوره و تدریس
            این گروه راهگشای مشکلات و مسائل داوطلبان آزمون های تخصص، جامع،
            ارزشیابی و ارتقای داروسازی باشد. برای کسب اطلاعات بیشتر و مشاوره از
            طریق راه های ارتباطی درج شده در سایت با ما در تماس باشید.
          </p>
          <a className="btn btn-ghost animate-bounce" href="#contact">
            راه‌های ارتباطی
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
