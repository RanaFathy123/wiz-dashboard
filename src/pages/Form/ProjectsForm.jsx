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

const FormElements = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="اضافة المشاريع" />
      <main className="container mx-auto px-4 w-full">
        <div className="flex flex-col gap-9">
          <div className="rounded-lg border border-stroke bg-white shadow-md dark:border-strokedark dark:bg-boxdark py-3 px-3">
            <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
              <h3 className="font-medium text-lg text-black dark:text-white">
                اضافة المشاريع
              </h3>
            </div>
            <div className="flex flex-col gap-6 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    اسم المشروع
                  </label>
                  <input
                    type="text"
                    placeholder="اسم المشروع"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    مبلغ المشروع
                  </label>
                  <input
                    type="text"
                    placeholder="مبلغ المشروع"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    كم المدفوع
                  </label>
                  <input
                    type="text"
                    placeholder="كم المدفوع"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    كم باقي
                  </label>
                  <input
                    type="text"
                    placeholder="كم باقي"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    مدير المشروع
                  </label>
                  <input
                    type="text"
                    placeholder="مدير المشروع"
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    اختار العميل
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">عميل</option>
                  </select>
                </div>
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

export default FormElements;
