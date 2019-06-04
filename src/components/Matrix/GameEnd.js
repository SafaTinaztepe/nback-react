
import React from 'react';

const GameEnd = ({ gameend, correct }) => (
  <div id="result">
    {(gameend ?
      "Result:" + correct + "/20" :
      "")}
  </div>
);

export default GameEnd;
