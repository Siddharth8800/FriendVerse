import {pages} from "../components/pagedir"

function NavBar() {
  let navStyle = `bg-gray-800 
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
  shadow-2xl 
  mt-15 
  mb-25`;

  const renderOptions = () => {
    return pages.map((page, index) => (
      <p
        key={index}
        className="
          text-white 
          p-4 
          text-lg
          font-bold
          rounded-lg 
          transition-all duration-900 ease-in-out
          hover:bg-gradient-to-r from-rose-400 to-orange-300 
          hover:text-gray-800"
      >
        <a href={page + ".html"}>{page}</a>
      </p>
    ));
  };

  return (
    <>
      <div className={navStyle}>{renderOptions()}</div>
    </>
  );
}

export default NavBar;
