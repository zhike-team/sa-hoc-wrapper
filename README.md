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
 # 开启服务
 npm start 

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
  eventName: 'ti-practice-ielts’,
  durationType: 'min', // 值可为 ms s min hour
}

// 绑定在类原型上 
getTrackTimerProperties(){
  return {
    name: '1',
    age: '18',
  }
} 
```

默认会将当前包裹组件的 componentDidmount 和 compoentwillunmount 之间的时间 duration 自动上传