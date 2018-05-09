var sliderWidth = 64; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["一键绑定", "手动绑定"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})