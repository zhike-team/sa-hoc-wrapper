const TRACK_TIMER_EVENT = 'track_timer_event';

const durationMap = new Map([
  ['ms', 1],
  ['s', 1000],
  ['min', 1000 * 60],
  ['hour', 1000 * 60 * 60],
])

/**
 * 添加神策绑定事件
 * @param {神策对象} sa 
 * @param  {...any} config 
 */
function addSaEvent(sa, durationType) {
  if (!sa.trackTimerStart) {
    sa.trackTimerStart = function trackTimerStart() {
      const now = Date.now();
      sa.trackTimerStartAt = now;
    };
  }

  if (!sa.trackTimerEnd) {
    sa.trackTimerEnd = function trackTimerEnd(event, properties) {
      const now = Date.now();
      // 上传时间设置为秒
      const duration = ((now - sa.trackTimerStartAt) / durationMap.get(durationType)).toFixed(2);
      sa.track(event, { duration, ...properties });
    };
  }

  return sa
}

/**
 * 获取tab页签的切换事件监听名称
 */
function getVisibilityEvent(){
  let prefixes = ['webkit','moz','ms','o'];
  let hiddenProperty = null;
  if (typeof document === 'undefined') {
    return 'visibilitychange';
  }
  if ('hidden' in document) {
    hiddenProperty = 'hidden'
  } else {
    for (let i = 0; i < prefixes.length; i++){
      if ((prefixes[i] + 'Hidden') in document) {
        hiddenProperty = prefixes[i] + 'Hidden';
      }
    }
  }
  const visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
  return visibilityChangeEvent;
}

/**
 * 获取所需要打点的属性
 * @param {目标类} targetClass 
 */
function getProperties(targetClass) {
  let properties = {}
  if (typeof targetClass.prototype.getTrackTimerProperties === 'function') {
    properties = targetClass.prototype.getTrackTimerProperties.apply(this);
  }
  return properties;
}

/**
 * tab页签切换监听事件
 * @param {} sa 
 */
function watchTabChange(sa, targetClass, eventName) {
  if (sa && sa.trackTimerEnd) {
    let properties = getProperties.call(this, targetClass);
    if (document && document.hidden) {
      sa.trackTimerEnd(eventName, properties);
    } else {
      sa.trackTimerStart(true);
    }
  }
}

/**
 * 页面关闭事件
 */
function pageUnload(sa, targetClass, eventName, event) {
  if (sa && sa.trackTimerEnd) {
    let properties = getProperties.call(this, targetClass);
    sa.trackTimerEnd(eventName, properties);
    event.preventDefault();
    const msg = 'Are you sure';
    event.returnValue = msg;
    sa.trackTimerStart(eventName);
    return msg;
  }
}

export {
  addSaEvent,
  getVisibilityEvent,
  getProperties,
  watchTabChange,
  pageUnload,
  TRACK_TIMER_EVENT
}