
import React from 'react';

const GameEnd = ({ correct }) => (
  <div id="result">
    {"Result: " + correct + "/20"}
  </div>
);

export default GameEnd;
