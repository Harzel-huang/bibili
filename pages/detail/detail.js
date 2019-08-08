// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoTitile: '',
    videoCount: 0,
    videoSrc: '',
    author: '',
    otherVideoSrc: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    this.gstDetailList();
  },

  gstDetailList(id) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=' + id,
      success(res) {
        if (res.statusCode === 200) {
          that.setData({
            videoSrc: res.data.data.videoInfo.videoSrc,
            videoTitile: res.data.data.videoInfo.videoTitle,
            videoCount: res.data.data.videoInfo.playCount,
            author: res.data.data.videoInfo.author

          })
        }
        // console.log(res)
      },

    });
    this.getotherVideo(id);
  },
  getotherVideo(id) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+id,
      success(res) {
        if (res.statusCode === 200) {
          console.log(res);
          that.setData({
            otherVideoSrc:res.data.data.othersList,
            
          })
        }
      },

    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo');
    console.log(res);

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})