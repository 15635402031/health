// 1.设置导出
export default function(obj) {
  const { baseUrl } = obj;
  // 这个导出的函数：被vue.use调用 
  return function(Vue) {
    Vue.prototype.request = async function(opts) {
      const { url, data, method, header } = opts;
      uni.showLoading({
        title: "数据加载中...",
        mask: true,//是否显示蒙层
      });
      const [err, res] = await uni.request({
        url: '',
        header: header,
        method: method,
        data: data
      });
      uni.hideLoading();
      // 请求到数据：返回
      return res;
    }
  }
}

