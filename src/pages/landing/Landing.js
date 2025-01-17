import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import landingImage from "../../images/me.svg";
import landingProfile from "../../images/osbornheadshot-2.png";
import SocialIcons from "../../components/SocialIcons";


const Landing = ({ name, tagline, briefIntro }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      alignItems: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing" style={styles.landing}>
      
      <div className="textContainer" style={styles.textContainer}>
        <img className="image" src={landingProfile} alt="Avatar"></img>
        <motion.h1
          className="name"
          style={styles.name}
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {tagline}
        </motion.p>
        <motion.p
          className="contentDescription"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {briefIntro}
        </motion.p>
      </div>
      <div className="image-container">
        {/* <motion.img
          className="landingImage"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt=""
        /> */}
      </div>

      <SocialIcons />
    </section>
  );
};

export default Landing;
