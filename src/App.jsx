import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// import Loader from './common/Loader';
import MapOne from "./components/Maps/MapOne";
import PageTitle from "./components/PageTitle";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import BlogsTable from "./pages/BlogsTable";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";
import ECommerce from "./pages/Dashboard/ECommerce";
import BlogsForm from "./pages/Form/BlogsForm";
import FormLayout from "./pages/Form/FormLayout";
import ProjectsForm from "./pages/Form/ProjectsForm";
import ServiceForm from "./pages/Form/ServiceForm";
import Profile from "./pages/Profile";
import ProjectsTables from "./pages/ProjectsTables";
import ServicesTable from "./pages/ServicesTable";
import Settings from "./pages/Settings";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import TasksForm from "./pages/Form/TasksForm";
import TasksTable from "./pages/TasksTable";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  console.log(loading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Wiz Dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <MapOne />
            </>
          }
        />
        <Route
          path="/forms/projects"
          element={
            <>
              <PageTitle title="Projects" />
              <ProjectsForm />
            </>
          }
        />
        <Route
          path="/forms/services"
          element={
            <>
              <PageTitle title="Services" />
              <ServiceForm />
            </>
          }
        />
        <Route
          path="/forms/blogs"
          element={
            <>
              <PageTitle title="Blogs" />
              <BlogsForm />
            </>
          }
        />
        <Route
          path="/forms/tasks"
          element={
            <>
              <PageTitle title="Tasks" />
              <TasksForm />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables/projects"
          element={
            <>
              <PageTitle title="Projects Tables" />
              <ProjectsTables />
            </>
          }
        />
        <Route
          path="/tables/services"
          element={
            <>
              <PageTitle title="Setvices Tables" />
              <ServicesTable />
            </>
          }
        />

        <Route
          path="/tables/blogs"
          element={
            <>
              <PageTitle title="Blogs Tables" />
              <BlogsTable />
            </>
          }
        />
        <Route
          path="/tables/tasks"
          element={
            <>
              <PageTitle title="Tasks Tables" />
              <TasksTable />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
