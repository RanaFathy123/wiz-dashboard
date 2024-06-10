import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import TableThree from "../components/Tables/TableThree";
import DefaultLayout from "../layout/DefaultLayout";

const Tables = () => {
  const navigate = useNavigate();
  const goToAddClients = () => {
    navigate("/forms/form-elements");
  };
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
          onClick={goToAddClients}
        >
          اضافة المشاريع
        </button>
        <Breadcrumb pageName="جدول العملاء" />
      </div>
      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
