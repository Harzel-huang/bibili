
//Page Object
Page({
  data: {
    navlistData: [],
    swiperListData: [],
    videoListData: [],
    currentIndex: 0,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000

  },
  getnavlist() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        // console.log(res);
        // console.log(res.statusCode)
        if (res.statusCode === 200) {
          that.setData({
            navlistData: res.data.data.navList
          })
        }
        // this.navlistData = res.data.data.navList;

      }
    })
  },
  activeNav(e) {
    // console.log(123)
    console.log(e.currentTarget)
    this.setData({
      currentIndex: e.currentTarget.dataset['id'],
    })
  },
  getswiperlist() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            swiperListData: res.data.data.swiperList
          })
        }

      }
    })

  },
  getVideData() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            videoListData: res.data.data.videosList
          })
        }
      }
    })
  },
  //options(Object)
  // 生命周期-监听页面加载
  onLoad: function (options) {
    this.getnavlist();
    this.getswiperlist();
    this.getVideData();
  },
  // 生命周期：数据初次渲染完成
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});