import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Samuel Osborn Kwame Adamtey",
    location: "Accra, Ghana",
    tagline: "I'm a FullStack Web Developer",
    email: "Ossytravels@gmail.com",
    availability: "Open for work",
    briefIntro:
      "I’m focused on building responsive fullstack web applications while learning & exploring other technologies.",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
