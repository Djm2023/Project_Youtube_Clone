const Button = ({ data }) => {
  return (
    <div className="buttons">
      <button className="bg-gray-200 whitespace-nowrap mr-2 ml-2 px-2 py-1.5 rounded-lg outline-none font-sidebarfont">
        {data}
      </button>
    </div>
  );
};
export default Button;
