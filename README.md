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

 # 更新版本号
 npm version major|minor|patch
 
 # 发布
 npm publish --access public
```

## API
配置参数
``` json
{
  "eventName": "ti-practice-ielts",
  "durationType": "min", 
}
```

```js
// 返回神策打点属性
getTrackTimerProperties(){
  return {
    name: '1',
    age: '18',
  }
} 
```

默认会将当前包裹组件的 componentDidmount 和 compoentwillunmount 之间的时间 duration 自动上传