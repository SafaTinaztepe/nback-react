
import React from 'react';
import Button from 'react-bootstrap/Button';

const N = ({ n, incrN, decrN }) => (
  <div id="N">
    <Button value="-" id="minus" onClick={decrN}>-</Button>
    <input type="text" size={2} maxLength={2} value={n} id="count"/>
    <Button value="+" id="plus" onClick={incrN}>+</Button>
  </div>
);

export default N;
