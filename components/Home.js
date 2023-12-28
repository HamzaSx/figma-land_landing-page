import Image from "next/image";
import mbImg from "../public/mobile/mb-img.png";
import img from "../public/mobile/img.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="home__headline">Work at the speed of thought.</h1>
      <p className="home__sub-headline">
        Most calendars are designed for teams. Slate is designed for freelancers
        who want a simple way to plan their schedule.
      </p>

      <div className="home__btn-container">
        <button className="btn-1">Try For Free</button>
        <button className="btn-2">Learn More</button>
      </div>

      <Image alt="" src={mbImg} width={2548} height={2048} />
      {/* <Image alt="" src={img} width={3780} height={2048} /> */}
    </section>
  );
}
