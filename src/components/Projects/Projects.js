import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skilline from "../../Assets/Projects/skilline.jpg";
import movies from '../../Assets/Projects/movies.jpg';
import uzcrypto from '../../Assets/Projects/uzcrypto.jpg';
import scoot from '../../Assets/Projects/scoot.jpg';
import pomofocus from '../../Assets/Projects/pomofocus.jpg';
import dashboard from '../../Assets/Projects/dashboard.jpg';
import quiz from '../../Assets/Projects/quiz.jpg';
import eduvi from '../../Assets/Projects/eduvi.jpg';
import trazor from '../../Assets/Projects/trazor.png';
import tomor from '../../Assets/Projects/tomor.png';
import cocktail from '../../Assets/Projects/cocktail.png';
import creamShop from '../../Assets/Projects/cream-shop.png';
import brostore from '../../Assets/Projects/brostore.png';
import nextstore from '../../Assets/Projects/nextstore.png';
import tutmarket from '../../Assets/Projects/tutmarket.png';
import toolsstore from '../../Assets/Projects/toolsstore.png';
import teamsport from '../../Assets/Projects/teamsport.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trazor}
              isBlog={false}
              title="TRazor"
              link="https://startling-clafoutis-5cba39.netlify.app/"
              code="https://github.com/yakhyo04/project-3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cocktail}
              isBlog={false}
              title="Cocktail"
              link="https://meek-tiramisu-b3439b.netlify.app/"
              code="https://github.com/yakhyo04/project-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creamShop}
              isBlog={false}
              title="Cream Shop"
              link="https://peppy-kataifi-4cac1b.netlify.app/"
              code="https://github.com/yakhyo04/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomor}
              isBlog={false}
              title="Tomor"
              link="https://gregarious-crisp-6752c4.netlify.app/"
              code="https://github.com/yakhyo04/project-4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brostore}
              isBlog={false}
              title="Brostore"
              link="https://brostore.uz/"
              code="https://github.com/yakhyo04"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextstore}
              isBlog={false}
              title="Nextstore"
              link="https://nextstore.uz/"
              code="https://github.com/yakhyo04"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutmarket}
              isBlog={false}
              title="Tut market"
              link="https://tut.market/"
              code="https://github.com/yakhyo04"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toolsstore}
              isBlog={false}
              title="Toolsstore"
              link="https://toolsstore.uz/"
              code="https://github.com/yakhyo04"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamsport}
              isBlog={false}
              title="Teamsport"
              link="https://teamsport.uz/"
              code="https://github.com/yakhyo04"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies App"
              link="https://movies-react-teal.vercel.app"
              code="https://github.com/yakhyo04/movies-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skilline}
              isBlog={false}
              title="Skilline"
              link="https://skillinee.netlify.app/"
              code="https://github.com/yakhyo04/skilline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scoot}
              isBlog={false}
              title="Scoot"
              link="https://scoot-01.netlify.app/"
              code="https://scoot-01.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              link="https://dashboard1-two.vercel.app/"
              code="https://github.com/yakhyo04/dashboard1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduvi}
              isBlog={false}
              title="Eduvi"
              link="https://eduvi.netlify.app/"
              code="https://github.com/yakhyo04/eduvi2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              link="https://quiz-appreact.netlify.app/"
              code="https://github.com/yakhyo04/quiz"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uzcrypto}
              isBlog={false}
              title="Uz Crypto"
              link="https://uzcrypto.vercel.app/"
              code="https://github.com/yakhyo04/uzcrypto"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomofocus}
              isBlog={false}
              title="Pomofocus"
              link="https://pomofocus1.netlify.app/"
              code="https://github.com/yakhyo04/pomofocus1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
