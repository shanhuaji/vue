// import Vue from "vue";
export default function filterHandler(Vue) {
  Vue.filter("dateFilter", (val, type) => {
    let date = new Date(val);
    return (
      date.getFullYear() + type + (date.getMonth() + 1) + type + date.getDate()
    );
  });
  Vue.filter('imgFilter',function (val) {
    if (navigator.userAgent.indexOf('iPhone') != -1) {
      return  val.replace('w.h','128.180')
    } 
    if (navigator.userAgent.indexOf('iPad') != -1) {
      return  val.replace('w.h','130.190')
    }
    if (navigator.userAgent.indexOf('Windows ') != -1) {
      return  val.replace('w.h','160.220')
    }
  })

}


