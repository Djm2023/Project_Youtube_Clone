const Head = () => {
  return (
    <div className="main-container w-full flex h-14 pl-6">
      <div className="logo-container w-44  flex justify-center items-center">
        <div className="hamburger-icon w-10 h-10 text-xl pt-1 cursor-pointer">
          <i className="fa-solid fa-bars text-hamburger"></i>
        </div>
        <div className="youtube-icon w-28">
          <img
            className="h-12 cursor-pointer"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="youtube-logo"
          />
        </div>
      </div>
      <div className="Search-Container w-headerSearch ml-44 flex justify-end items-center">
        <div className=" w-5/6 h-10 pl-4 rounded-l-3xl border-2 border-gray-300">
          <input
            type="text"
            placeholder="Search"
            className=" h-full w-full outline-none border-none cursor-pointer"
          />
        </div>
        <div className="w-20 h-10 bg-search rounded-r-3xl border-t-2 border-r-2 border-b-2 border-gray-300">
          <div className="text-xl pl-5 pt-1 text-gray-500 cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="ml-44 flex justify-center items-center w-52">
        <div className="w-4/12 ml-6 text-2xl text-hamburger">
          <i className="fa-solid fa-video cursor-pointer"></i>
        </div>
        <div className="w-8/12 text-2xl text-hamburger flex">
          <div className="mr-10 flex">
            <span className="relative ml-5">
              <i className="fa-solid fa-bell cursor-pointer"></i>
            </span>
            <span className="w-5 h-5 bg-red-600 absolute right-28 top-2 rounded-full text-xs pl-1 text-white">
              5+
            </span>
          </div>
          <div>
            <i className="fa-solid fa-user cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head;

