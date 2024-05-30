
import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import ReactPlayer from "react-player";

function VideoPlayer(myvd) {
  return (
    <Container>
      <h1 id="txt" className="d-flex justify-content-center">
        {myvd.tx}
      </h1>
      <p id="mo" className="p-2">
        {myvd.md}
      </p>
      <Row>
        <Col>
          <ReactPlayer
            url={myvd.ur}
            width={myvd.wd}
            height={myvd.he}
            loop={myvd.lp}
            // controls={myvd.con}
            playing={myvd.pl}
            muted={myvd.mu}
          />
        </Col>
      </Row>
     
    </Container>
  );
}
export default VideoPlayer;
