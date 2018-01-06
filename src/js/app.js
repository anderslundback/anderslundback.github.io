import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

var buildOrderArray = ["pp", "rax", "ref", "ref", "pp", "wf", "ref", "sd", "rax?", "pp", "rax", "rax", "ref", "rd", "af"];
var buildInfoArray = ["@ rax: 2k to spend, usually 20 rifles or 15 + engi", "pp 2: ~20k, 3+ rockets", "@ wf: 2 harvesters and early scouting unit", "@ sd queue MCV, then tanks", "when MCV is in position, ref should be ready", "@ af: hinds / yaks", "@ rd: arty / v2"];

function calculateStuff() {
  const numbers = [1, 2, 3, 8];
  const doubled = numbers.map(x => x * 2);
  console.log(doubled);
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function OrderedList(props) {
  const array = props.array;
  const type = props.type;
  const listItems = array.map((listItem) =>
    <ListItem key={listItem.toString()}
              value={listItem} />
  );
  if (type === "ol") {
    return (
      <ol>
        {listItems}
      </ol> 
    )
  }
  else if (type === "ul") {
    return (
      <ul>
        {listItems}
      </ul> 
      )
  }
  else {
    return (
      <p>Please select list type</p>
    )
  }
}

export default class Hello extends Component {
  render() {
    {calculateStuff()};
    return (
      <div className="wrapper">
        <header>
          <h1>OpenRA build orders</h1>
        </header>
        <h2>3x ref</h2>
        <section>
          <h3>Build order</h3>
          <OrderedList array={buildOrderArray} type={"ol"} />
          <h3>Build order info</h3>
          <OrderedList array={buildInfoArray} type={"ul"} />
          <OrderedList array={buildOrderArray}/>
        </section>
        <footer>Written by: Anders Lundback</footer>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));