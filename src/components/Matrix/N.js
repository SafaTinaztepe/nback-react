
import React from 'react';
import Button from 'react-bootstrap/Button';

const N = ({ n, incrN, decrN }) => (
  <div id="input_div">
    <Button value="-" id="minus" onClick={decrN} />
    <input type="text" size={2} maxLength={2} defaultValue={n} id="count" />
    <Button value="+" id="plus" onClick={incrN} />
  </div>
);

export default N;
