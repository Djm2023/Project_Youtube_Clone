import Button from "./Button";

const ButtonList = () => {
  const arr = [
    "All",
    "Tarak Mehta Ka OOlata Chasma",
    "Music",
    "Songs",
    "Shorts",
    "Bollywood Music",
    "Javascript",
    "News",
    "Data Structure",
    "Computers",
    "New to You",
    "Watched",
    "Recently Uploaded",
    "mantras",
  ];
  return (
    <div className="flex overflow-scroll">
      {arr.map((items, index) => (
        <Button key={index} data={items} />
      ))}
    </div>
  );
};
export default ButtonList;
