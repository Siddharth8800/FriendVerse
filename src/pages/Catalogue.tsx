import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
export default function Catalogue() {
  const titleStyle = `text-8xl font-extrabold duration-200 text-center text-gray-800 pb-5`;

  return (
    <>
      <NavBar></NavBar>
      <h1 className={titleStyle}>Gallery</h1>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}
