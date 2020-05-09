# SA-HOC-WRAPPER
基于神策的业务高阶组件
暂时只在题库项目中使用

## 使用
```shell
  npm i @zhike/sa-hoc-wrapper
```

```js
import { saWrapper } from '@zhike/sa-hoc-wrapper';

@saWrapper({
  eventName: 'ti-practice-ielts'
})
class extends Component{
  getTrackTimerProperties(){
    return {
      name: '测试',
    }
  }
}

```

## 开发指南
```shell
 # 编译打包 
 npm run build
 #  修改版本
 npm version major|minor|patch
 # 发布
 npm publish --access public
```

## API
``` js
// saWrapper 配置参数 
{
  // 神策打点，时间名字，不传默认为 'track_timer_event'
  eventName: 'ti-practice-ielts’
}
// 绑定在类原型上
getTrackTimerProperties(){} 返回打点属性信息
```
默认会将当前包裹组件的 componentDidmount 和 compoentwillunmount 之间的时间 duration 自动上传