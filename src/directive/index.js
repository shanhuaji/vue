/* 自定义指令 */
function touch(el, type, handler) {
  let hammer = new Hammer(el);
  
  hammer.on(type, handler);
}

export default function directiveHandler(Vue) {
  Vue.directive("tap", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  /* 长按 */
  Vue.directive("press", {
    inserted(el, binding) {
      inserted(el, binding.name, binding.value);
    },
  });
  /* 长按离开 */
  Vue.directive("pressup", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  /* 按下移动 */
  Vue.directive("pan", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("panleft", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("panright", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("panup", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("pandown", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  /* 滑动 */
  Vue.directive("swipe", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipeleft", {
    inserted(el, binding) {
     
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swiperight", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipeup", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("swipedown", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  /* 两手指 */
  Vue.directive("pinch", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
  Vue.directive("rotate", {
    inserted(el, binding) {
      touch(el, binding.name, binding.value);
    },
  });
}
