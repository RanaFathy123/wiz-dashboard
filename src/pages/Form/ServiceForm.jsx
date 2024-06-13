import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "../../components/Checkboxes/CheckboxFive";
import CheckboxFour from "../../components/Checkboxes/CheckboxFour";
import CheckboxOne from "../../components/Checkboxes/CheckboxOne";
import CheckboxThree from "../../components/Checkboxes/CheckboxThree";
import CheckboxTwo from "../../components/Checkboxes/CheckboxTwo";
import SwitcherFour from "../../components/Switchers/SwitcherFour";
import SwitcherOne from "../../components/Switchers/SwitcherOne";
import SwitcherThree from "../../components/Switchers/SwitcherThree";
import SwitcherTwo from "../../components/Switchers/SwitcherTwo";
import DefaultLayout from "../../layout/DefaultLayout";
import DatePickerOne from "../../components/Forms/DatePicker/DatePickerOne";
import DatePickerTwo from "../../components/Forms/DatePicker/DatePickerTwo";
import SelectGroupTwo from "../../components/Forms/SelectGroup/SelectGroupTwo";
import MultiSelect from "../../components/Forms/MultiSelect";

const ServiceForm = () => {
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="اضافة الخدمات" />
      <main className="container mx-auto px-4 w-full">
        <div className="flex flex-col gap-9">
          <div className="rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark py-3 px-3">
            <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
              <h3 className="font-medium text-lg text-black dark:text-white">
                اضافة الخدمات
              </h3>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    اسم الخدمة
                  </label>
                  <input
                    type="text"
                    placeholder="اسم الخدمة"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    عنوان الخدمة
                  </label>
                  <input
                    type="text"
                    placeholder="عنوان الخدمة"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <label className="block text-sm font-medium text-black dark:text-white">
                  وصف الخدمة
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  placeholder="وصف الخدمة"
                ></textarea>
              </div>
              {/* f */}
              <h1 className="text-[2rem] mt-5">المميزات</h1>
              <div>
                <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                  اسم الخدمة
                </label>
                <input
                  type="text"
                  placeholder="اسم الخدمة"
                  className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <button className="mt-4 w-full rounded-lg bg-primary py-2 px-4 text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                اضافة
              </button>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ServiceForm;
