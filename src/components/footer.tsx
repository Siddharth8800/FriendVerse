function Footer() {
  const text = "©Siddharth 2024 FriendVerse";
  const footerStyle = `bg-gray-800 
  text-white 
  font-bold 
  w-3/4 
  justify-center 
  text-center 
  items-center 
  mx-auto
  mt-10 
  mb-5  
  p-2.5 
  shadow-2xl 
  rounded-full
  left-1/2 
  transform -translate-x-1/2 
  absolute 
  bottom-0`;
  return (
    <>
      <footer className={footerStyle}>{text}</footer>
    </>
  );
}

export default Footer;
