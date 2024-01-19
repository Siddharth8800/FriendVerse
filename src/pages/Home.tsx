import Footer from "../components/footer";
import NavBar from "../components/navbar";

function Home() {
  let title = "FriendVerse";
  const titleStyle = `text-8xl font-extrabold duration-200 text-center text-gray-800 pb-10`;
  const paraStyle = `text-2xl font-extrabold duration-200 text-center text-gray-800 w-1/2 mx-auto`;

  let paraText = `In the tapestry of life, friendships form the vibrant threads that weave together moments of joy, support, and shared experiences. 
            The importance of friends and the depth of friendship are unparalleled, shaping our journey in ways that resonate far beyond mere companionship. 
            True friends are the pillars that uphold us during challenging times and the companions who amplify our joys.
            Friendship is a sanctuary where trust and understanding flourish, creating a space where we can be our authentic selves without fear of judgment. 
            In the ebb and flow of life, friends provide a constant, offering solace in times of adversity and celebrating alongside us during moments of triumph. 
            They are the mirrors that reflect our true essence and the sounding boards that resonate with laughter and shared memories.`;
  return (
    <>
      <NavBar />
      <div>
        <h1 className={titleStyle}>{title}</h1>
        <p className={paraStyle}>{paraText}</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
