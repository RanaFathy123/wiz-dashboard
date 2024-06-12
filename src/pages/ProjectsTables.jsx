import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ProjectsTableDesign from "../components/Tables/ProjectsTableDesign";
import DefaultLayout from "../layout/DefaultLayout";

const ProjectsTables = () => {
  const navigate = useNavigate();
  const goToAddProjects = () => {
    navigate("/forms/projects");
  };
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
          onClick={goToAddProjects}
        >
          اضافة المشاريع
        </button>
        <Breadcrumb pageName="جدول المشاريع" />
      </div>
      <div className="flex flex-col gap-10">
        <ProjectsTableDesign />
      </div>
    </DefaultLayout>
  );
};

export default ProjectsTables;
