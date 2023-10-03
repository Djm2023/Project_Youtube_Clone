import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCards from "./VideoCards";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("XYZ", json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap mt-5">
      {videos?.map((items ,index) => (
        <VideoCards key={index} props = {items}/>
      ))}
      {/* <VideoCards info = {videos[0]} /> */}
    </div>
  );
};
export default VideosContainer;
