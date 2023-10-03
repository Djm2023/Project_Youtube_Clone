import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return statement
  if (!isMenuOpen) {
    return (
      <div className="w-menuOpenSideBar">
        <div className="w-full flex justify-center">
          <div className="types w-10/12 pl-7 pb-3">
            <ul>
              <li className="mb-5 mt-4 cursor-pointer">
                <span className="pr-3">
                  <i className="fa-solid fa-house text-lg"></i>
                </span>
              </li>
              <li className="mb-5 mt-4 cursor-pointer">
                <span className="pr-3">
                  <i className="fa-solid fa-bolt text-lg"></i>
                </span>
              </li>
              <li className="mb-5 mt-4 cursor-pointer">
                <span className="pr-3">
                  <i className="fa-solid fa-crown text-lg"></i>
                </span>
              </li>
              <li className="mb-5 mt-4 cursor-pointer">
                <span className="pr-3">
                  <i className="fa-solid fa-bag-shopping text-lg"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-sidebar h-screen overflow-auto">
      <div className="w-full flex justify-center">
        <div className="types w-10/12 pl-3 pb-3 font-sidebarfont">
          <ul className="border-b-2 ">
            <li className="cursor-pointer pt-3 pb-3  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-house text-lg"></i>
              </span>
              <span className="text-sidebartext ">Home</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-bolt text-lg"></i>
              </span>
              <span className="text-sidebartext">Shorts</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-crown text-lg"></i>
              </span>
              <span className="text-sidebartext">Subscription</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="heading">
        <h2 className="text-lg font-semibold pl-5">Explore</h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="types w-10/12 pl-3 pb-3 font-sidebarfont">
          <ul className="border-b-2">
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-fire-flame-curved text-lg"></i>
              </span>
              <span className="text-sidebartext">Trending</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-bag-shopping text-lg"></i>
              </span>
              <span className="text-sidebartext">Shopping</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-music text-lg"></i>
              </span>
              <span className="text-sidebartext">Music</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-brands fa-waze text-lg"></i>
              </span>
              <span className="text-sidebartext">Live</span>
            </li>
            <li className="py-3 cursor-pointer hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-gamepad text-lg"></i>
              </span>
              <span className="text-sidebartext">Gaming</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-newspaper text-lg"></i>
              </span>
              <span className="text-sidebartext">News</span>
            </li>
            <li className="py-3 cursor-pointer hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-medal text-lg"></i>
              </span>
              <span className="text-sidebartext">Sports</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-lightbulb text-lg"></i>
              </span>
              <span className="text-sidebartext">Learning</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-vest-patches text-lg"></i>
              </span>
              <span className="text-sidebartext">Fashion & Beauty</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-brands fa-waze text-lg"></i>
              </span>
              <span className="text-sidebartext">Sports</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="heading">
        <h2 className="text-lg font-semibold pl-5">More From Youtube</h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="types w-10/12 pl-3 pb-3 font-sidebarfont">
          <ul className="border-b-2">
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-brands fa-youtube text-lg"></i>
              </span>
              <span className="text-base">Youtube Premium</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-brands fa-studiovinari text-lg"></i>
              </span>
              <span className="text-sidebartext">Youtube Studio</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-play text-lg"></i>
              </span>
              <span className="text-sidebartext">Youtube Music</span>
            </li>
            <li className="py-3 cursor-pointer  hover:bg-hoverEffect hover:rounded-lg">
              <span className="pr-3">
                <i className="fa-solid fa-child text-lg"></i>
              </span>
              <span className="text-sidebartext">Youtube Kids</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
