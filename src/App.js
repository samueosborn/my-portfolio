import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Samuel Osborn Kwame Adamtey",
    location: "Accra, Ghana",
    tagline: "FullStack Web Developer",
    email: "Ossytravels@gmail.com",
    availability: "Open for work",
    briefIntro:
      "I’m focused on building responsive fullstack web applications while learning & exploring other technologies.",
    oldbrand:
     "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
    brand:
    "Experienced web developer with extensive knowledge of all stages of advanced web development. Experienced inbuilding products ranging from stunning responsive web apps to outstanding mobile apps. I am Capable of managing oneself effectively during independent projects as well as collaborating in a team setting."
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
