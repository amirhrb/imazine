import React from "react";

//imgs
import instagram from "../sources/images/instagram.svg";
import telegram from "../sources/images/telegram.svg";
import whatsapp from "../sources/images/whatsapp.svg";

const ContactUs = () => {
  return (
    <div
      className="w-fit flex justify-center p-5 pb-1 bg-transparent text-neutral-content sticky z-30 top-0 "
      id="contact"
    >
      <div className="w-full max-w-3xl">
        <h3 className="mb-3 font-bold text-2xl">ارتباط با ما</h3>
        <div className="w-20 flex justify-around items-center">
          <a href="https://www.instagram.com/invites/contact/?i=f90wmirnd6t0&utm_content=1xbkmdf">
            <img src={instagram} alt="" className="w-6" />
          </a>
          {/* <a href="https://t.me/">
            <img src={telegram} alt="" className="w-6" />
          </a> */}
          <a href="https://wa.me/message/SLOILV7T5IEAM1">
            <img src={whatsapp} alt="" className="w-6" />
          </a>
        </div>
        <div className=" w-48 my-3 flex justify-around">
          <span>شماره تماس:</span>
          <a href="tel:09037167702" dir="ltr">
            +903 716 7702
          </a>
        </div>
        <div className=" w-48 mb-3 flex justify-around">
          <span>ایمیل:</span>
          <a href="mailto:example@tst.com" dir="ltr">
            example@tst.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
