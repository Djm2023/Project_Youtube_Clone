import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div className="w-menuOpenMainContainer border-2 overflow-hidden mt-4">
        <ButtonList />
        <VideosContainer />
      </div>
    );
  }
  return (
    <div className="w-maincontainerWidth border-2 overflow-hidden">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};
export default MainContainer;
