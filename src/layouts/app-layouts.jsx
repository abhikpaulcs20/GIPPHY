import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayouts = () => {
  return (
    <div className="bg-black text-white min-h-screen gap-2 ">
      <div className="container px-6 py-4 mx-auto ">
        <Header />

        <main>
          <Outlet />
          {/*  // If you don't include <Outlet />, the child routes won't render in the parent component. */}
        </main>
      </div>
    </div>
  );
};
export default AppLayouts;
