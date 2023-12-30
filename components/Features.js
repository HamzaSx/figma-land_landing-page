import Image from "next/image";
import chatBot_mb from "../public/mobile/Chat Bot.png";
import lineChart_mb from "../public/mobile/Line Chart.png";
import chatBot_dt from "../public/mobile/Chat Bot.png";
import lineChart_dt from "../public/mobile/Line Chart.png";
import icon1 from "../public/icons/Vector.svg";
import icon2 from "../public/icons/Vector-1.svg";
import icon3 from "../public/icons/Vector-2.svg";

export default function Features() {
  return (
    <section className="features">
      <h2 className="features__headline">FEATURES</h2>
      <p className="features__sub-headline">
        Most calendars are designed for teams.
        <br />
        Slate is designed for freelancers who want <br />a simple way to plan
        their schedule.
      </p>
      <div className="features__flex">
        <div className="images">
          <Image
            className="images__mb"
            src={chatBot_mb}
            alt="Chat bot"
            width={377}
            height={355}
          />
          <Image
            className="images__mb"
            src={lineChart_mb}
            alt="Line chart"
            width={294}
            height={222}
          />
          <Image
            className="images__dt"
            src={chatBot_dt}
            alt="Chat bot"
            width={756}
            height={695}
          />
          <Image
            className="images__dt"
            src={lineChart_dt}
            alt="Line chart"
            width={463}
            height={303}
          />
        </div>
        <div className="content-rows">
          <div className="text-block">
            <Image
              className="icon"
              src={icon1}
              alt="icon"
              width={25.49}
              height={23.66}
            />
            <h3 className="title">A single source<br /> of truth</h3>
            <p className="paragraphe">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div className="text-block">
            <Image
              className="icon"
              src={icon2}
              alt="icon"
              width={29}
              height={30}
            />
            <h3 className="title">Intuitive interface</h3>
            <p className="paragraphe">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
          <div className="text-block">
            <Image
              className="icon"
              src={icon3}
              alt="icon"
              width={41}
              height={19}
            />
            <h3 className="title">Or with rules </h3>
            <p className="paragraphe">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
