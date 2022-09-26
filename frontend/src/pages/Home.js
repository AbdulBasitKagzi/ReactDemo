import React from "react";
import Navbar from "../component/Navbar";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import truck from "../assets/truck.jpg";
import artTruck from "../assets/artTruck.jpg";
import pricing from "../assets/pricing.webp";
import employee from "../assets/employee.webp";
import person from "../assets/person.webp";
import truck_1 from "../assets/truck_1.webp";
import mail from "../assets/mail.webp";

import "./Home.css";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero">
          {/* <h1 className={classes.h1}>Kagzi Transports</h1> */}
          <img alt="banner" src={truck} />
          <div className="banner-text">
            <h1>Transports</h1>
            <p>One stop for all your transport need</p>
          </div>
        </div>

        <div className="pad">
          <div className="tag-line">
            <p>
              <strong>
                TruckGuru – India’s most reliable, dedicated and expert online
                Transport logistics services partner!
              </strong>
            </p>
          </div>
          <div className="container">
            <p className="p1">
              TruckGuru is one of the foremost trucking companies, delivering
              the plethora of
              <a href="transportation-services">transport services</a> to its
              esteemed consumers across India. We are the “best-in-class and
              cost-effective transporter” as defined by our customers and
              serving this industry for many years.
            </p>
            <p className="p1">
              We have set high standards in every facet of transportation, and
              strive to keep raising the bar. With our extensive industry
              knowledge and skilled team, you can completely focus on your core
              interests whereas leaving the tiring and complex moving process on
              us.
              <br />
              Time-critical? No worries – TruckGuru will help you!
            </p>
            <p className="p1">
              <a href="https://truckguru.co.in/about">Our company</a> is
              equipped with advanced equipment, modern tools, and expertise that
              enable us to help our consumers with crucial transportation and
              supply chain solutions. We ensure businesses that they will get
              excellent-quality, prompt, and secure transportation services
              irrespective of time-constraint, the heavy load issue, and any
              other related problem.
            </p>
            <p className="p1">
              Being the prime logistics services provider, we believe that
              people, technology, infrastructure and expertise all work together
              to help businesses to succeed and henceforth, we are offering the
              right blend of all these.
            </p>
            <p className="p1">
              We are a customer-centric firm and our every action is aimed to
              offer ease and comfort to them when it comes to booking a truck.
              Our online truck booking app has tremendously simplified the
              process of booking a truck. Whether you are looking for the
              companies of
              <a href="https://truckguru.co.in/hyderabad">
                online truck booking Hyderabad
              </a>{" "}
              or online truck booking Mumbai, TruckGuru would always be your
              right choice.
            </p>

            <h3 className="about-h3">
              Online Truck Booking- A Smart Trucking Move{" "}
            </h3>
            <p className="p1">
              Bored with traditional truck booking practices? Looking for a
              smart and quick way to book a truck? No worries! We have
              introduced an innovative and sophisticated way to book trucks. Our
              online truck booking app and online portal will allow you to book
              truck online anywhere, anytime.{" "}
            </p>
            <p className="p1">
              Online transport booking is just a click away! No matter what type
              and size of your load is, we have the necessary infrastructure,
              equipment and tools to accommodate your transportation needs. We
              are a full-service transport company backed by a wide range of
              tech-enabled trucks, and experienced &amp; skilled team players to
              offer you best-in-class logistics and supply chain solutions.{" "}
            </p>
            <p className="p1">
              We offer you an instant pricing option while you try to book a
              truck using our mobile app. It will give you a better idea to
              manage your transportation budget.{" "}
            </p>
            <h3 className="about-h3">
              A trucking company – always there for you!
            </h3>
            <p className="p1">
              Our safe and affordable transport services will help businesses to
              drive business growth. We have years of experience in handling
              different types of transportation projects which enable us to help
              our businesses to focus on their core competencies and business
              operations. Our trucking company adds value to businesses at every
              stage, right from delivering advanced truck booking solutions to
              time-bound deliveries of goods anywhere across the nation.{" "}
            </p>
            <p className="p1">
              We are your trusted partner in your digital transformation
              journey. We have designed our app while keeping your truck booking
              needs in mind. No matter whether transportation involves short
              distance or long-distance, we are committed to delivering your
              goods in a hassle-free, safe and timely manner. How we can help
              you?{" "}
            </p>

            <h3 className="about-h3"> Rich industry experience</h3>
            <p className="p1">
              {" "}
              We bring together years of diverse experience in the transport
              industry. As the best online transport booking company, we know
              what all it needs to bring you effective and affordable solutions
              to suit your every transport need.{" "}
            </p>

            <h3 className="about-h3">Advanced technology</h3>
            <p className="p1">
              {" "}
              Our adoption of technology, proven expertise and a huge network of
              fleet owners and drivers helps us to serve you anywhere, anytime
              across any part of the country.{" "}
            </p>

            <h3 className="about-h3">On-time, every time</h3>
            <p className="p1">
              {" "}
              We understand the value of time for you as well as for us. That is
              why we try to deliver your consignment on time, every time.{" "}
            </p>

            <h3 className="about-h3">Competitive pricing</h3>
            <p className="p1">
              {" "}
              By designing innovative transport solutions that are targeted to
              your unique business requirements, we have created a pricing
              strategy that works for everyone. Cost can become a major
              constraint while hiring our services, but with our most affordable
              prices, we won’t let this happen with our clients.{" "}
            </p>

            <h3 className="about-h3">Reliability and safety</h3>
            <p className="p1">
              We drive reliability and safety in transport operations through
              the effective implementation of advanced security tools and
              technologies. It further helps you to drive efficiency and achieve
              operational excellence.{" "}
            </p>

            <h3 className="about-h3">Hassle-free services</h3>
            <p className="p1">
              {" "}
              We provide hassle-free shipping and flawless logistics solutions
              for all your Transport needs, whether small or big, to all parts
              across the country.
              <br /> Are you looking for a reliable and experienced transport
              company in India? Search online for “local transport near me” or
              “transport company near me”, we are sure that you will find
              TruckGuru in top results. So, call us now to book our services!{" "}
            </p>
          </div>
        </div>

        {/* accordion */}
        <div className="accordion">
          <h1>Accordion</h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* gird: our Advantages */}
        <div className="grid">
          <h2>Our Advantages</h2>
          <div className="content">
            <div>
              <img alt="truchArt" src={artTruck} />
            </div>

            <div className="grid-p1">
              <h3 class="Full-Load">Full Load Services</h3>
              <p className="">
                We provide Full Truck load transportation services with varied{" "}
                <br />
                type of trucks available with the click of a button.
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <img alt="pricing" src={pricing} />
            </div>
            <div className="grid-p1">
              <h3 class="Full-Load">Transparent pricing</h3>
              <p className="">
                With our fare calculator, we instantaneously give you best
                <br />
                possible rates online.
              </p>
            </div>
          </div>
          <div className="content">
            <div>
              <img alt="employee" src={employee} />
            </div>
            <div className="grid-p1">
              <h3 class="Full-Load">Quick and easy porteling</h3>
              <p className="">
                Hiring a truck is now just a click away,
                <br /> through our hassle free online booking system
              </p>
            </div>
          </div>
        </div>

        {/* grid: how it works */}
        <div className="grid-1">
          <h2>How it Works ?</h2>
          <div className="content-1">
            <div>
              <img alt="person" src={person} />
              <div className="grid1-p1">
                <p className="">Book Your truck through our webiste</p>
              </div>
            </div>

            <div>
              <img alt="truck" src={truck_1} />
              <div className="grid1-p1">
                <p className="">We provide best trucks for you</p>
              </div>
            </div>

            <div>
              <img alt="mail" src={mail} />
              <div className="grid1-p1">
                <p className="">Get Updates and notification from us</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
