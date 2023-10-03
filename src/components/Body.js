import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-screen">
      <SideBar />
      <MainContainer />
    </div>
  );
};
export default Body;
