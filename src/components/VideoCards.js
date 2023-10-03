import { useSelector } from "react-redux";

const VideoCards = ({ props }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("DEV", props);
  const { snippet
    , statistics
  } = props;
  const { channelTitle, thumbnails, title } = snippet;

 if(!isMenuOpen){
  return(
    <div className="w-80 h-72 mx-4 mb-7 my-2 text-ellipsis overflow-hidden whitespace-nowrap">
      <img className="w-96 h-56 rounded-lg" src={thumbnails.high.url} alt="videos" />
      <ul>
         <li className="font-bold text-base font-sidebarfont">{title}</li> 
        <li className="text-sm">{channelTitle}</li> 
        <li className="text-sm">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
 }

  return (
    <div className="w-96 h-72 mx-4 my-2 text-ellipsis overflow-hidden whitespace-nowrap">
      <img className="w-96 h-56 rounded-lg" src={thumbnails.high.url} alt="videos" />
      <ul>
         <li className="font-bold text-base font-sidebarfont">{title}</li> 
        <li className="text-sm">{channelTitle}</li> 
        <li className="text-sm">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};
export default VideoCards;
