import React from 'react';
import { saWrapper } from './index'

@saWrapper({
  eventName: 'ti_practice_ielts'
})
class MyComponent1 extends React.Component {
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
    return {
      subjectIds : '5,6,7,8'
    }
  }

}

@saWrapper({
  eventName: 'ti_practice_ielts'
})
class MyComponent2 extends React.Component {
  render() {
    return <div>
      子组件2
    </div>
  }

  componentDidMount(){
    debugger
  }

  componentWillUnmount(){
  }

  getTrackTimerProperties() {
    return {
      subjectIds : '5,6,7'
    }
  }
}

export {
  MyComponent1,
  MyComponent2
}