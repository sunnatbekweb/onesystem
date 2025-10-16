import AOS from "aos";
import "aos/dist/aos.css";
import "./FormSection.css";
import React, { useEffect, useState } from "react";
import RightChevron from "../../../assets/icons/RightChevron";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function FormSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      once: false,
    });
  }, []);

  const [form, setForm] = useState({ username: "", email: "" });
  const [correct, setCorrect] = useState({ username: "", email: "" });
  const [error, setError] = useState({ username: false, email: false });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (form.username.length === null) {
      setError({ ...error, username: "*Please fill in the empty blank." });
      setCorrect({ ...correct, username: false });
    } else if (form.username.length < 3) {
      setError({ ...error, username: "*Please enter at least 3 characters." });
      setCorrect({ ...correct, username: false });
    } else if (form.username.length > 25) {
      setError({
        ...error,
        username: "*Please enter a maximum of 25 characters.",
      });
      setCorrect({ ...correct, username: false });
    } else if (form.username.match(/\d+/)) {
      setError({
        ...error,
        username: '*Please enter only "letters" in this field.',
      });
      setCorrect({ ...correct, username: false });
    } else {
      setCorrect({
        ...correct,
        username: "This field has been filled correctly!",
      });
      setError({ ...error, username: false });
    }
  }, [form.username]);

  useEffect(() => {
    const phoneRegexp = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/; // логику не меняем, только название
    if (form.email.length === null) {
      setError({ ...error, email: "*Please enter your phone number." });
      setCorrect({ ...correct, email: false });
    } else if (!phoneRegexp.test(form.email)) {
      setError({ ...error, email: "*Please enter a valid phone number." });
      setCorrect({ ...correct, email: false });
    } else {
      setCorrect({
        ...correct,
        email: "This field has been filled correctly!",
      });
      setError({ ...error, email: false });
    }
  }, [form.email]);

  useEffect(() => {
    setIsFormValid(correct.username && correct.email);
  }, [correct]);

  const formSubmission = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      // 🧹 Удаляем все пробелы из номера перед отправкой
      const cleanPhone = form.email.replace(/\s+/g, "");

      // Отправляем очищенный номер в Telegram и на сервер
      await sendData(form.username, cleanPhone);
      await axios
        .post(`${import.meta.env.VITE_BASE_URL}/contact/`, {
          ...form,
          email: cleanPhone,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));

      // ✅ Успешный toast
      toast.success("Successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    } else {
      // ❌ Ошибка валидации
      toast.error("Error", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  async function sendData(username, email) {
    try {
      const TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const botID = import.meta.env.VITE_TELEGRAM_BOT_ID;
      const info = `User  %0A<strong>👤:</strong> ${username}%0A<strong>📧: </strong>${email}`;
      const response = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${botID}&text=${info}&parse_mode=html`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email }),
        }
      );
      const data = await response.json();
      console.log(data);
      setForm({ username: "", email: "" });
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
      />
      <section className="formSection bg-[#EAEAEA] pt-[96px] pb-[224px] xl:pt-[116px] xl:pb-[198px]">
        <div className="container formSection__container w-full flex flex-col justify-center items-center px-[16px] md:px-[36px] lg:px-[48px]">
          <form
            className="formSection__form w-full flex flex-col justify-center items-start gap-12 xl:w-[640px]"
            onSubmit={formSubmission}
          >
            <div
              className="formSection__form-input-boxes w-full flex flex-col justify-between items-start gap-3"
              data-aos="zoom-out-down"
            >
              <label
                className="formSection__form-label font-bold text-[16px] leading-[16px] text-[#2F2F34] w-full"
                htmlFor="username"
              >
                Ismingiz
              </label>
              <hr className="formSection__form-hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
              <input
                className="formSection__form-inputs bg-[#EAEAEA] w-full font-black text-[32px] leading-[28px] tracking-tighter-[-2%] not-odd:text-[#2F2F34] uppercase outline-none border-none"
                onChange={(e) => {
                  e.preventDefault();
                  setForm({ ...form, username: e.target.value.trimStart() });
                }}
                type="text"
                id="username"
                placeholder="Ismingizni kiriting"
                autoComplete="on"
                min={3}
                maxLength={26}
                value={form.username}
                required
              />
              {error.username && form.username.length > 0 ? (
                <p className="text-[#CF734A]">{error.username}</p>
              ) : null}
              {correct.username && form.username.length > 0 ? (
                <p className="text-green-800">{correct.username}</p>
              ) : null}
            </div>

            <div
              className="formSection__form-input-boxes w-full flex flex-col justify-between items-start gap-3"
              data-aos="zoom-out-down"
            >
              <label
                className="formSection__form-label font-bold text-[16px] leading-[16px] text-[#2F2F34] w-full"
                htmlFor="email"
              >
                Telefon raqamingiz
              </label>
              <hr className="formSection__form-hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
              <input
                className="formSection__form-inputs bg-[#EAEAEA] w-full font-black text-[32px] leading-[28px] tracking-tighter-[-2%] text-[#2F2F34] uppercase outline-none border-none"
                type="tel"
                id="email"
                placeholder="+998 __ ___ __ __"
                pattern="^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$"
                maxLength={17}
                value={form.email}
                onChange={(e) => {
                  let value = e.target.value;

                  // 1️⃣ Удаляем всё, кроме цифр и "+"
                  value = value.replace(/[^\d+]/g, "");

                  // 2️⃣ Гарантируем, что номер начинается с +998
                  if (!value.startsWith("+998")) {
                    // если пользователь удалил часть кода — восстанавливаем
                    if (
                      value.startsWith("+99") ||
                      value.startsWith("+9") ||
                      value === "+"
                    ) {
                      value = "+998";
                    } else if (!value.startsWith("+")) {
                      value = "+998" + value.replace(/^\+?998?/, "");
                    } else {
                      value = "+998";
                    }
                  }

                  // 3️⃣ Форматируем пробелами: +998 99 123 45 67
                  value = value
                    .replace(/^(\+998)(\d{0,2})/, "$1 $2")
                    .replace(/^(\+998\s\d{2})(\d{0,3})/, "$1 $2")
                    .replace(/^(\+998\s\d{2}\s\d{3})(\d{0,2})/, "$1 $2")
                    .replace(/^(\+998\s\d{2}\s\d{3}\s\d{2})(\d{0,2})/, "$1 $2")
                    .trim();

                  // 4️⃣ Обновляем состояние
                  setForm({ ...form, email: value });
                }}
                required
              />

              {error.email && form.email.length > 0 ? (
                <p className="text-[#CF734A]">{error.email}</p>
              ) : null}
              {correct.email && form.email.length > 0 ? (
                <p className="text-green-800">{correct.email}</p>
              ) : null}
            </div>

            <div
              className="formSection__form-input-boxes w-full flex flex-col justify-between items-start gap-3"
              data-aos="zoom-out-down"
            >
              <hr className="formSection__form-hr border-none outline-none w-full h-[2px] bg-[#D7D7D8]" />
              <button
                className={`formSection__form-button w-full flex flex-row justify-between items-start ${
                  form.username.length && form.email.length > 0
                    ? "text-[#2F2F34]"
                    : "text-[#8d8d8f]"
                }`}
                type="submit"
              >
                <p className="formSection__form-button-text cursor-pointer font-black text-[32px] leading-[28px] tracking-tighter-[-2%] uppercase">
                  Jo'natish
                </p>
                <RightChevron
                  fill={
                    form.username.length && form.email.length > 0
                      ? "#2F2F34"
                      : "#8d8d8f"
                  }
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
