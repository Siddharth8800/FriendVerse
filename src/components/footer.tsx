function Footer() {
  const text = "©Siddharth 2024 FriendVerse";
  const footerStyle = 
  `bg-gray-800 
  text-white 
  font-bold 
  w-3/4
  justify-center 
  text-center 
  items-center 
  mt-5
  mb-5 
  p-2.5
  mx-auto 
  shadow-2xl 
  rounded-full`;

  return (
    <footer className={footerStyle}>{text}</footer>
  );
}

export default Footer;