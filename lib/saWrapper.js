const TRACK_TIMER_EVENT = 'track_timer_event';

const durationMap = new Map([
  ['ms', 1],
  ['s', 1000],
  ['min', 1000 * 60],
  ['hour', 1000 * 60 * 60],
])

// 增加神策时间统计支持
export const saWrapper = (config = {}) => targetClass => {
  const eventName = config.eventName || TRACK_TIMER_EVENT;
  const durationType = config.durationType || 's'
  if (typeof sa !== 'undefined') {
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
  }

  const unloadHandler = function (event) {
    if (sa && sa.trackTimerEnd) {
      let properties;
      if (typeof targetClass.prototype.getTrackTimerProperties === 'function') {
        properties = targetClass.prototype.getTrackTimerProperties.apply(this);
      }
      sa.trackTimerEnd(eventName, properties);
      event.preventDefault();
      const msg = 'Are you sure';
      event.returnValue = msg;

      // in case user does not leave
      sa.trackTimerStart(eventName);
      return msg;
    }
  };

  const originComponentDidMount = targetClass.prototype.componentDidMount;
  let unloadHandlerWrap;
  targetClass.prototype.componentDidMount = function cdm(...args) {
    originComponentDidMount.apply(this, args);

    // 神策时间记录
    if (sa && sa.trackTimerStart) {
      sa.trackTimerStart(eventName);
    } else {
      console.log('sa.trackTimerStart does not exist');
    }
    unloadHandlerWrap = unloadHandler.bind(this)
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', unloadHandlerWrap, false);
    }
  };

  const originComponentWillUnmount = targetClass.prototype.componentWillUnmount;
  targetClass.prototype.componentWillUnmount = function cwu(...args) {
    if (originComponentWillUnmount) {
      originComponentWillUnmount.apply(this, args);
    }
    if (sa && sa.trackTimerEnd) {
      let properties;
      if (typeof targetClass.prototype.getTrackTimerProperties === 'function') {
        properties = targetClass.prototype.getTrackTimerProperties.apply(this);
      }
      sa.trackTimerEnd(eventName, properties);
    } else {
      console.log('sa.trackTimerEnd does not exist');
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('beforeunload', unloadHandlerWrap, false);
    }
  };

  return targetClass;
};
