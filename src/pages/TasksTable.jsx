import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import BlogsTableDesign from "../components/Tables/BlogsTableDesign";
import DefaultLayout from "../layout/DefaultLayout";
import TasksTableDesign from "../components/Tables/TasksTableDesign";

const TasksTable = () => {
  const navigate = useNavigate();
  const goToAddTask = () => {
    navigate("/forms/tasks");
  };
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
          onClick={goToAddTask}
        >
          اضافة الاعمال
        </button>
        <Breadcrumb pageName="جدول الاعمال" />
      </div>
      <div className="flex flex-col gap-10">
        <TasksTableDesign />
      </div>
    </DefaultLayout>
  );
};

export default TasksTable;
