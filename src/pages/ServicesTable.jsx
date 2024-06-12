import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import TableThree from "../components/Tables/ProjectsTableDesign";
import DefaultLayout from "../layout/DefaultLayout";
import ServicesTableDesign from "../components/Tables/ServicesTableDesign";

const ServicesTable = () => {
  const navigate = useNavigate();
  const goToAddServices = () => {
    navigate("/forms/services");
  };
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
          onClick={goToAddServices}
        >
          اضافة الخدمات
        </button>
        <Breadcrumb pageName="جدول الخدمات" />
      </div>
      <div className="flex flex-col gap-10">
        <ServicesTableDesign />
      </div>
    </DefaultLayout>
  );
};

export default ServicesTable;
