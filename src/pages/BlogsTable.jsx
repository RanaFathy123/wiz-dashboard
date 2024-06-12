import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import BlogsTableDesign from "../components/Tables/BlogsTableDesign";
import DefaultLayout from "../layout/DefaultLayout";

const BlogsTable = () => {
  const navigate = useNavigate();
  const goToAddBlogs = () => {
    navigate("/forms/blogs");
  };
  return (
    <DefaultLayout>
      <div className="flex justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2"
          onClick={goToAddBlogs}
        >
          اضافة المقالات
        </button>
        <Breadcrumb pageName="جدول المقالات" />
      </div>
      <div className="flex flex-col gap-10">
        <BlogsTableDesign />
      </div>
    </DefaultLayout>
  );
};

export default BlogsTable;
