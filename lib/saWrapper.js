import { addSaEvent, getVisibilityEvent, watchTabChange, pageUnload, getProperties, TRACK_TIMER_EVENT } from './eventListener';

// 增加神策时间统计支持
export const saWrapper = (config = {}) => targetClass => {
  const { eventName = TRACK_TIMER_EVENT, durationType = 's' } = config;
  const originComponentWillUnmount = targetClass.prototype.componentWillUnmount;
  const originComponentDidMount = targetClass.prototype.componentDidMount;
  const visibilityChangeEvent = getVisibilityEvent();
  
  if (typeof sa !== 'undefined') {
    sa = addSaEvent(sa, durationType);
  }

  let unloadHandlerWrap, handleTabChange;
  targetClass.prototype.componentDidMount = function cdm(...args) {
    originComponentDidMount && originComponentDidMount.apply(this, args);

    // 神策记录开始时间
    if (sa && sa.trackTimerStart) {
      sa.trackTimerStart(eventName);
    }

    // 获取事件的监听函数
    unloadHandlerWrap = pageUnload.bind(this, sa, targetClass, eventName);
    handleTabChange = watchTabChange.bind(this, sa, targetClass, eventName);

    // 绑定事件
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', unloadHandlerWrap, false);
    }

    if (typeof document !== 'undefined') {
      document.addEventListener(visibilityChangeEvent, handleTabChange);
    }
  };

  targetClass.prototype.componentWillUnmount = function cwu(...args) {
    originComponentWillUnmount && originComponentWillUnmount.apply(this, args);

    // 组件卸载，上报打点数据
    if (sa && sa.trackTimerEnd) {
      let properties = getProperties.apply(this);
      sa.trackTimerEnd(eventName, properties);
    }

    // 移出监听事件
    if (typeof window !== 'undefined') {
      window.removeEventListener('beforeunload', unloadHandlerWrap, false);
    }

    if (typeof document !== 'undefined') {
      document.removeEventListener(visibilityChangeEvent, handleTabChange);
    }
  };

  return targetClass;
};