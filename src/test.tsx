function Test() {
  let pages = ["Home", "Join", "Friend Catalog", "About"];
  let navStyle = 
  `bg-black 
  text-white 
  p-2.5 
  text-center 
  w-3/4 
  rounded-full 
  flex 
  justify-center 
  items-center 
  mx-auto 
  mt-10 
  mb-10 
  shadow-md 
  mt-15 
  mb-25`;
const renderOptions = () => {
  return pages.map((page, index) => (
    <p key={index} className="
    text-white 
    p-4 
    text-lg
    rounded-lg 
    transition-all duration-900 ease-in-out
    hover:bg-white 
    hover:text-black">
    {page}
    </p>
  ))
}
  return (
    <>
      <div className={navStyle}>
        {
            pages.map((page, index) => (
            <p key={index} className="
            text-white 
            p-4 
            text-lg
            rounded-lg 
            transition-all duration-900 ease-in-out
            hover:bg-white 
            hover:text-black">
            {page}
            </p>
            )) 
        }
      </div>
    </>
  );
}

export default Test;