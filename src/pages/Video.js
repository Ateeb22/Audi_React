// import React from 'react'
// import { Player } from 'video-react';

// function Video() {
//   return (
//     <div>
//        <Player>
//           <source src="C:\Users\Ateeb.Sheikh\Desktop\React_Work\assessment\public\audi-e-tron-gt-aero.mp4" />
//        </Player>
//     </div>
//   )
// }

// export default Video

// import React from 'react';
// import ReactPlayer from 'react-player';

// function VideoPlayer() {
//   return (
//     <ReactPlayer
//       url="C:\Users\Ateeb.Sheikh\Desktop\React_Work\assessment\public\audi-e-tron-gt-aero.mp4"
//       width="640"
//       height="360"
//       controls
//     />
//   );
// }

// export default VideoPlayer;

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
            controls={myvd.con}
            playing={myvd.pl}
            muted={myvd.mu}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default VideoPlayer;
