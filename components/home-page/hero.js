import Image from "next/image";
import classes from "./hero.module.css";
import icon from "../../public/images/vercel.svg";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={icon} alt="Author" width={300} height={300} />
      </div>
      <h1>Hi, Im Mahi</h1>
      <p>
        Im testing with different frameworks in UI. Currently working on nextJs
      </p>
    </section>
  );
};

export default Hero;
