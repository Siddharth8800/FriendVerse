import { useState } from "react";
import { imagePaths } from "./imagedir";

export default function Gallery() {
  const divStyle = `max-w-[600px] h-[600px] w-full m-auto px-4 relative py-10`;
  const imgStyle = `w-full h-full rounded-2xl bg-center bg-cover duration-500`;
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImage = `url(${imagePaths[imageIndex]})`;
  const leftButtonStyle = `absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full w-16 h-16 flex justify-center items-center text-white text-xl font-bold cursor-pointer`;
  const rightButtonStyle = `absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full w-16 h-16 flex justify-center items-center text-white text-xl font-bold cursor-pointer`;
  const leftButtonHandler = () => {
    if (imageIndex === 0) {
      setImageIndex(imagePaths.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };
  const rightButtonHandler = () => {
    if (imageIndex === imagePaths.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  return (
    <>
      <div className={divStyle}>
        <div style={{ backgroundImage }} className={imgStyle}></div>
        <button className={leftButtonStyle} onClick={leftButtonHandler}>
          Prev
        </button>
        <button className={rightButtonStyle} onClick={rightButtonHandler}>
          Next
        </button>
      </div>
    </>
  );
}
