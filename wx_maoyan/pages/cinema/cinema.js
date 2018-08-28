
// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://p1.meituan.net/mmc/52a266343394e817ce13a269fbeaecae160649.jpg',
      'http://p0.meituan.net/mmc/c54f9b5f46cba8a6ea82b8077fa55773166718.jpg',
      'http://p0.meituan.net/mmc/70458439e535080b265e90323f450e06134412.jpg',
      'http://p1.meituan.net/mmc/901429f73b43648da65e3f1d7a72ea6e71031.jpg',
      'http://p0.meituan.net/mmc/073a15d36bd795dff1be9ec3d01da93f137699.jpg',
      'http://p0.meituan.net/mmc/a26f4aaa5e3b4e825459324365b97763184061.jpg',
    ],
    // 是否显示指示点
    indicatorDots: true,
    // 当前点击时候的index索引
    // 建议在标签里面去写
    //current:'???'
    // 指示点颜色
    indicatorColor: 'rgba(100, 0, 0, .3)',
    // 被选中颜色点
    indicatorActiveColor: 'white',
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 3000,
    // 滑动动画时长
    duration: 1000,
    // 可以露出后一项的一小部分
    // (页面会出现异常; 建议用大间距的时候 使用这种方案)
    nextMargin: "0px",
    width: wx.getSystemInfoSync().windowWidth,
    
  
   },
 
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.authorize({
      scope: 'scope.userLocation',
      success:function(res) {
        console.log(res);
        wx.getLocation({
          type: 'wgs84',
          success: function (res) {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            console.log(res)
          }
        })
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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