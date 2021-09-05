import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'My name is Anup and I was born and brought up in Buxar, Bihar. I am working as a Senior Software Developer with Astrum Labs. I have a total experience of 3 years in various projects with various roles and responsibility.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'In this short span of 3 years, I have had the previlege to lead a team of three members to create seperate module for our software. I have Experience in React, C#, ASP.NET, ASP.NET MVC, HTML5, JavaScript, JQuery, Web APIs, CSS, Bootstrap, SQL Server and Dynamic 365 CRM.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 
                  'Analysis, Designing, Coding and Unit Testing are the prime responsibilities. Others include Requirement Gathering, Creation of Functional Specification.'}
                </p>
                <p className="about-wrapper__info-text">
                  { 
                  'Responsible for interacting with the clients in various phases of the project.'}
                </p>
                <p className="about-wrapper__info-text">
                  {
                  'Managing end to end Requirement Traceability, performed Project Estimation and Planning also Hands on experience of UAT and Demo.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
