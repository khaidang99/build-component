import React from "react";
import { useForm } from "react-hook-form";

import { useStoreContext } from "./store";

function FormContactBot() {
  const { setInfoContact } = useStoreContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setInfoContact(formData);
  };

  return (
    <form className="from-contect" onSubmit={handleSubmit(onSubmit)}>
      <p className="mb-2">
        Xin hãy nhập thông tin cá nhân. Họ và tên, email, Số điện thoại, Tên
        công ty nếu có, lĩnh vực doanh nghiệp, website công ty, doanh nghiệp.
      </p>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type={"text"}
          placeholder="Họ và tên"
          {...register("first_name")}
          required
        />
        {errors.first_name && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.first_name.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type={"email"}
          placeholder="Email"
          {...register("email")}
          required
        />
        {errors.email && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type="text"
          pattern="^[0-9]*$"
          placeholder="Số điện thoại"
          {...register("phone_number")}
          required
        />
        {errors.phone_number && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.phone_number.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type={"text"}
          placeholder="Tên công ty"
          {...register("company_name")}
        />
        {errors.company_name && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.company_name.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type={"text"}
          placeholder="Lĩnh vực doanh nghiệp"
          {...register("company_business")}
        />
        {errors.company_business && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.company_business.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className="w-full border-slate-200"
          type={"text"}
          placeholder="Website công ty"
          {...register("company_website", {
            pattern: {
              value:
                /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._+~#=]{2,256}(.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*))*(.com|.vn|.net|.org|.int|.edu|.gov|.mil)/gi,
              // /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
              message: "Định dạng website sai",
            },
          })}
        />
        {errors.company_website && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.company_website.message}
          </span>
        )}
      </div>
      <div className="mb-2">
        <input
          className={`w-full border-slate-200`}
          type={"text"}
          placeholder="Doanh nghiệp"
          {...register("enterprise")}
        />
        {errors.enterprise && (
          <span className="inline-block pt-2 text-sm text-gleads-danger-500">
            {errors.enterprise.message}
          </span>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormContactBot;
