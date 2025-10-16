import React from "react";
import "./ProjectSection.css";
export default function ProjectSection() {
  const data = [
    {
      text: "Bizning jamoamiz IT bozorida yillar davomida ishlagan tajribali mutaxassislardan iborat. Sifat, savdo, xavfsizlik va ishonch borasida tajribamiz bilan biz yuqori darajadagi yechimlarni taqdim etish uchun sizga shartnoma va sherikchilik taklif qilamiz.",
    },
    {
      text: "Biz texnologiyalar orqali biznesingizni yanada kuchaytirishga intilamiz. Tajribali dasturchilar, dizaynerlar va menejerlardan iborat jamoamiz sizga sifatli, xavfsiz va samarali IT yechimlarni yaratishda ishonchli hamkor bo‘lishni kafolatlaydi.",
    },
    {
      text: "Biz har bir mijoz uchun individual yondashuvni tanlaymiz. Jamoamiz veb, mobil va telegram bot tizimlari bo‘yicha katta tajribaga ega. Bizning maqsad — sifat, xavfsizlik va innovatsiyani uyg‘unlashtirgan holda biznesingizni yangi raqamli bosqichga olib chiqish",
    },
  ];
  return (
    <section className="project bg-[#2F2F34] pt-[127px] pb-[121px] xl:pt-0 xl:pb-[137px] overflow-x-hidden">
      <div className="container project__container w-full flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
        <hr className="project__hr hidden border-none outline-none w-full h-[2px] bg-[#ffffff] opacity-10 xl:mt-[156px] xl:block" />
        <h2 className="project__title w-full text-start font-black text-[56px] leading-[48px] tracking-tighter-[-2%] text-white uppercase mb-[127px] lg:w-[992px] xl:pt-[56px] xl:text-[120px] xl:leading-[100px]">
          Bizning jamoamiz sizning loyihangizni haqiqatga aylantirmoqda
        </h2>
        <div className="project__bottom-box flex flex-col justify-center items-center gap-6 md:gap-8">
          {data.map((item, index) => (
            <div className="project__bottom-mini-box" key={index}>
              <p className="project__bottom-box-texts w-full font-black text-[20px] leading-[20px] tracking-tighter-[-2%] text-white text-center xl:w-[371px] uppercase">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
