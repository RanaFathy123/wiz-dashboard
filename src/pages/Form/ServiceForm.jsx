import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../layout/DefaultLayout";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const ServiceForm = () => {
  const [featuresInputValue, setFeaturesInputValue] = useState([
    { bulletPointTitle: "", bulletPointDescription: "" },
  ]);
  const [featureData, setFeatureData] = useState({
    featureName: "",
    heroSectionTitle: "",
    heroSectionDescription: "",
    heroImage: "",
    imageAlt: "",
    featureServiceName: "",
  });
  const [tasksInputValue, setTasksInputValue] = useState([{ task: "" }]);
  const [serviceInput, setServiceInput] = useState([
    { bulletPointTitle: "", bulletPointDescription: "" },
  ]);
  const handleAddFeaturesInputs = () => {
    setFeaturesInputValue([
      ...featuresInputValue,
      {
        bulletPointTitle: "",
        bulletPointDescription: "",
      },
    ]);
  };

  const handleDeleteFeatures = (index) => {
    const filteredInputs = featuresInputValue.filter((input, inputIndex) => {
      return index !== inputIndex;
    });
    if (index > 0) {
      setFeaturesInputValue(filteredInputs);
    }
  };
  const handleAddTask = () => {
    setTasksInputValue([...tasksInputValue, { task: "" }]);
  };
  const handleDeleteTask = (index) => {
    const filteredInputs = tasksInputValue.filter((input, inputIndex) => {
      return index !== inputIndex;
    });
    if (index > 0) {
      setTasksInputValue(filteredInputs);
    }
  };
  const handleAddService = () => {
    setServiceInput([...serviceInput, { service: "" }]);
  };
  const handleDeleteService = (index) => {
    const filteredInputs = serviceInput.filter((input, inputIndex) => {
      return index !== inputIndex;
    });
    if (index > 0) {
      setServiceInput(filteredInputs);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedFeatures = featuresInputValue.map((feature, i) =>
      i === index ? { ...feature, [field]: value } : feature
    );

    setFeaturesInputValue(updatedFeatures);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: "https://wiz-deploy.onrender.com/features",
      data: {
        featureName: featureData.featureName,
        featureHeroSection: {
          heroSectionTitle: featureData.heroSectionTitle,
          heroImage: featureData.heroImage,
          heroSectionDescription: featureData.heroSectionDescription,
          imageAlt: featureData.imageAlt,
        },
        featureBodySection: {
          bodySectionTitle: featureData.featureServiceName,
          featureBodyBulletPoints: featuresInputValue,
        },
        previousWorkImages: [
          {
            image: "https://example.com/previous-work1.jpg",
            workLink: "https://example.com",
            imageAlt: "Work img",
          },
          {
            image: "https://example.com/previous-work2.jpg",
            workLink: "https://example.com",
            imageAlt: "Work img",
          },
        ],
        featureFooterSection: {
          footerSectionTitle: "Conclusion of the Feature",
          footerSectionBulletPoints: [
            {
              bulletPointTitle: "Footer Point One",
              bulletPointDescription: "Description for footer point one.",
              bulletPointImage: "https://example.com/previous-work2.jpg",
              imageAlt: "task img",
            },
            {
              bulletPointTitle: "Footer Point Two",
              bulletPointDescription: "Description for footer point two.",
              bulletPointImage: "https://example.com/previous-work2.jpg",
              imageAlt: "task img",
            },
          ],
        },
      },
    });
  };
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
            <form onSubmit={handleSubmit}>
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
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      value={featureData.heroImage}
                      onChange={(e) =>
                        setFeatureData({
                          ...featureData,
                          heroImage: e.target.value,
                        })
                      }
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      اسم الخدمة
                    </label>
                    <input
                      type="text"
                      placeholder="اسم الخدمة"
                      value={featureData.featureName}
                      className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFeatureData({
                          ...featureData,
                          featureName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      عنوان الخدمة
                    </label>
                    <input
                      type="text"
                      placeholder="عنوان الخدمة"
                      value={featureData.heroSectionTitle}
                      className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFeatureData({
                          ...featureData,
                          heroSectionTitle: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      alt
                    </label>
                    <input
                      type="text"
                      placeholder="alt"
                      value={featureData.imageAlt}
                      className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      onChange={(e) =>
                        setFeatureData({
                          ...featureData,
                          imageAlt: e.target.value,
                        })
                      }
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
                    value={featureData.heroSectionDescription}
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    placeholder="وصف الخدمة"
                    onChange={(e) =>
                      setFeatureData({
                        ...featureData,
                        heroSectionDescription: e.target.value,
                      })
                    }
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
                    value={featureData.featureServiceName}
                    className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    onChange={(e) =>
                      setFeatureData({
                        ...featureData,
                        featureServiceName: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="mt-4 w-full rounded-lg bg-primary py-2 px-4 text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  onClick={handleAddFeaturesInputs}
                >
                  اضافة الميزة
                </button>
                {featuresInputValue.map((featuresInput, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          value={featuresInput.bulletPointTitle}
                          placeholder={`اسم الميزة ${index + 1}`}
                          className="w-full mb-3 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "bulletPointTitle",
                              e.target.value
                            )
                          }
                        />
                        <button
                          onClick={() => handleDeleteFeatures(index)}
                          className="px-4 py-3 mb-3 rounded-lg border-2 border-stroke bg-transparent text-black outline-none transition-all duration-200 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        >
                          <MdDelete />
                        </button>
                      </div>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        placeholder={`وصف الميزة ${index + 1}`}
                        value={featuresInput.bulletPointDescription}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "bulletPointDescription",
                            e.target.value
                          )
                        }
                      ></textarea>
                    </div>
                  </div>
                ))}
                <h1 className="text-[2rem] mt-3">الاعمال</h1>
                <button
                  className="mt-4 w-full rounded-lg bg-primary py-2 px-4 text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  onClick={handleAddTask}
                >
                  اضافة الاعمال
                </button>
                {tasksInputValue.map((taskInput, index) => (
                  <div className="grid grid-cols-1 gap-4" key={index}>
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        placeholder={`اسم العمل ${index + 1}`}
                        className="w-full mb-3 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <button
                        onClick={() => handleDeleteTask(index)}
                        className="px-4 py-3 mb-3 rounded-lg border-2 border-stroke bg-transparent text-black outline-none transition-all duration-200 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <MdDelete />
                      </button>
                    </div>
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder={`لينك العمل ${index + 1}`}
                      className="w-full my-2 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder={`alt ${index + 1}`}
                      className="w-full my-2 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                ))}
                <h1 className="text-[2rem] mt-3">الخدمات</h1>
                <button
                  className="mt-4 w-full rounded-lg bg-primary py-2 px-4 text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  onClick={handleAddService}
                >
                  اضافة الخدمات
                </button>
                {serviceInput.map((serviceInput, index) => (
                  <div key={index} className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        placeholder={`عنوان الخدمة ${index + 1}`}
                        className="w-full mb-3 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <button
                        onClick={() => handleDeleteService(index)}
                        className="px-4 py-3 mb-3 rounded-lg border-2 border-stroke bg-transparent text-black outline-none transition-all duration-200 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <MdDelete />
                      </button>
                    </div>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="وصف الخدمة"
                    ></textarea>
                    <input
                      type="text"
                      placeholder={`alt ${index + 1}`}
                      className="w-full my-2 rounded-lg border-2 border-stroke bg-transparent py-2 px-4 text-black outline-none transition-all duration-200 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-200 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-primary py-2 px-4 text-white transition-all duration-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  اضافة
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ServiceForm;
