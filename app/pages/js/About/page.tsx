"use client";
import React from "react";
import Navbar from "../Navbar";
import "../../css/About.css"
import Image from "next/image";
import office from "../../images/office.jpg";
import us from "../../images/us.png";
import gr from "../../images/gr.jpg";
import Team from "../Team";
import img1 from "../../images/galery.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about_left">
          <h1>About Us</h1>
          <h4>
            How the adventure ended will be seen anon. Aouda was anxious, though
            she said nothing.
          </h4>
          <p className="about_info">
            As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
            glorious. The captain had said “between eleven and twelve knots,”
            and the Henrietta confirmed his prediction. How the adventure ended
            will be seen anon. Aouda was anxious, though she said nothing. As
            for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious.
            The captain had said.
          </p>
          <p className="about_border">
            During the first days, they went along smoothly enough. The sea was
            not very unpropitious, the wind seemed stationary in the north-east.
          </p>
          <p className="about_info">
            As for Passepartout, he thought Mr. Fogg’s manoeuvre simply
            glorious. The captain had said “between eleven and twelve knots,”
            and the Henrietta confirmed his prediction. How the adventure ended
            will be seen anon. Aouda was anxious, though she said nothing. As
            for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious.
            The captain had said.
          </p>
        </div>
        <Image src={office} alt="" className="aboutImage" />
      </div>
      <div className="seo">
        <div className="seo_left">
          <Image src={us} alt="" />
          <div className="left_box">
            <h2>Our Ceo Say</h2>
            <p>
              Quality is never an accident; it is always the result of high
              intention.
            </p>
          </div>
        </div>
        <Image src={gr} alt="" className="seo_img" />
        <div className="seo_center">
          <h3>Book a Test Drive!</h3>
          <button className="center_btn">Contact Us</button>
        </div>
      </div>
      <Team />
      <div className="about_images">
        <div className="image_left">
          <Image src={img1} alt="" className="about_img1" />
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
        <div className="image_right">
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
          <div className="img_box">
            <Image src={img1} alt="" className="about_img2" />
            <Image src={img1} alt="" className="about_img2" />
          </div>
        </div>
      </div>
      <div className="question">
        <h1>Frequently Asked Questions</h1>
        <div className="question_body">
          <div className="question_left">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography>Do you offer any sort of warranty?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
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
          </div>
          <div className="question_right">
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
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
          </div>
        </div>
        <button className="question_btn">Learn More</button>
      </div>
    </div>
  );
}
