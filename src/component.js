import React from 'react';
import { saWrapper } from './index'

@saWrapper({
  eventName: 'ti_practice_ielts',
  durationType: 'min'
})
class MyComponent1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subjectIds: '5,6,7,8'
    }
  }

  render() {
    return <div>
      子组件1
    </div>;
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  getTrackTimerProperties() {
    const { subjectIds } = this.state;
    return {
      subjectIds: '5,6,7,8'
    }
  }

}

@saWrapper({
  eventName: 'ti_practice_ielts',
  durationType: 'min'
})
class MyComponent2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subjectIds: '5,6,7'
    }
  }
  render() {
    return <div>
      子组件2
    </div>
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  getTrackTimerProperties() {
    // const { subjectIds } = this.state;
    console.log(global)
    return {
      subjectIds: '5,6,7'
    }
  }
}

export {
  MyComponent1,
  MyComponent2
}