import React from 'react';

const ScoreBoard = ({ history }) => (
  <div id="ScoreBoard">
    <table border={1}>
      <tr><th>N</th><th>Score</th></tr>
      {history}
    </table>
  </div>
);

export default ScoreBoard;
