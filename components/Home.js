import Image from "next/image";
import mbImg from "../public/mobile/mb-img.png";
import img from "../public/desktop/img.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <h1 className="home__headline">
        Work at the
        <br /> speed
        <br /> of
        <br /> thought.
      </h1>
      <p className="home__sub-headline">
        Most calendars are designed for teams.
        <br /> Slate is designed for
        <br className="break" /> freelancers who
        <br /> want a simple way to plan
        <br /> their schedule.
      </p>

      <div className="home__btn-container">
        <button className="btn btn-1">Try For Free</button>
        <button className="btn btn-2">Learn More</button>
      </div>
      <div className="home__img-container">
        <Image className="img1" alt="" src={mbImg} width={2548} height={2048} />
        <Image className="img2" alt="" src={img} width={3780} height={2048} />
      </div>
    </section>
  );
}
