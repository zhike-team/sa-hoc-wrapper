import React from 'react';
import ReactDOM from 'react-dom';
import { MyComponent1, MyComponent2 } from './component'

class MyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTrue: false
    }
  }

  render() {
    const Child = this.state.isTrue ? MyComponent1 : MyComponent2;
    return <div>
      <button onClick={this.handleClick.bind(this)}>点击</button>
      <Child />
    </div>;
  }

  handleClick(){
    this.setState({
      isTrue: !this.state.isTrue
    })
  }

}
 
ReactDOM.render(<MyComponent />, document.getElementById('app'));