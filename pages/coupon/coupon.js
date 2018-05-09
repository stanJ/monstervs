var sliderWidth = 64; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["领券中心", "我的优惠券"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    coupon: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      },
      {
        id: 7
      },
      {
        id: 8
      },
      {
        id: 9
      },
      {
        id: 10
      },
      {
        id: 11
      },
      {
        id: 12
      }
    ]
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