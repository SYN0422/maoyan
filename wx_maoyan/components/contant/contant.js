// components/contant/contant.js
var cityData = require('../../utils/city.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: [],
    nv: [],
    px: [],
    qyopen: false,
    qyshow: false,
    nzopen: false,
    pxopen: false,
    nzshow: false,
    pxshow: false,
    isfull: false,
    cityleft: cityData.getCity(),
    citycenter: {},
    cityright: {},
    select1: '',
    select2: '',
    shownavindex: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function () {
      this.setData({
        nv: {
          "subItems": [
            {
              "count": 79,
              "id": -1,
              "name": "全部"
            },
            {
              "count": 4,
              "id": 102642,
              "name": "万达影城"
            },
            {
              "count": 3,
              "id": 1079568,
              "name": "金逸影城"
            },
            {
              "count": 3,
              "id": 26497,
              "name": "今世界影城"
            },
            {
              "count": 3,
              "id": 24745,
              "name": "橙天嘉禾影城"
            },
            {
              "count": 3,
              "id": 1319936,
              "name": "恒大影城"
            },
            {
              "count": 3,
              "id": 26172,
              "name": "华臣影城"
            },
            {
              "count": 2,
              "id": 383854,
              "name": "大商影城"
            },
            {
              "count": 2,
              "id": 30032,
              "name": "星美国际影城"
            },
            {
              "count": 2,
              "id": 292030,
              "name": "卢米埃影城"
            },
            {
              "count": 2,
              "id": 2020418,
              "name": "CGV影城"
            },
            {
              "count": 2,
              "id": 26045,
              "name": "横店电影城"
            },
            {
              "count": 1,
              "id": 27617,
              "name": "美嘉欢乐影城"
            },
            {
              "count": 1,
              "id": 384262,
              "name": "大地影院"
            },
            {
              "count": 1,
              "id": 28741,
              "name": "世茂国际影城"
            },
            {
              "count": 1,
              "id": 30053,
              "name": "幸福蓝海国际影城"
            },
            {
              "count": 1,
              "id": 24525,
              "name": "比高电影城"
            },
            {
              "count": 1,
              "id": 28975,
              "name": "太平洋电影城"
            },
            {
              "count": 1,
              "id": 275830,
              "name": "华谊兄弟影院"
            },
            {
              "count": 1,
              "id": 30227,
              "name": "耀莱成龙国际影城"
            },
            {
              "count": 1,
              "id": 29462,
              "name": "沃美影城"
            },
            {
              "count": 1,
              "id": 2880988,
              "name": "SFC上影影城"
            },
            {
              "count": 1,
              "id": 29880,
              "name": "新东北影城"
            },
            {
              "count": 39,
              "id": 0,
              "name": "其他"
            }
          ]
        },
         px: {

          "hallType": {
            "name": "特殊厅",
            "subItems": [
              {
                "count": 0,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 0,
                "id": 2,
                "name": "IMAX厅"
              },
              {
                "count": 0,
                "id": 3,
                "name": "CGS中国巨幕厅"
              },
              {
                "count": 0,
                "id": 9,
                "name": "杜比全景声厅"
              },
              {
                "count": 0,
                "id": 10,
                "name": "RealD厅"
              },
              {
                "count": 0,
                "id": 11,
                "name": "RealD 6FL厅"
              },
              {
                "count": 0,
                "id": 4,
                "name": "4DX厅"
              },
              {
                "count": 0,
                "id": 25,
                "name": "DTS:X 临境音厅"
              },
              {
                "count": 0,
                "id": 24,
                "name": "儿童厅"
              },
              {
                "count": 0,
                "id": 8,
                "name": "4K厅"
              },
              {
                "count": 0,
                "id": 6,
                "name": "巨幕厅"
              }
            ]
          },
          "service": {
            "name": "服务",
            "subItems": [
              {
                "count": 79,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 61,
                "id": 4,
                "name": "会员卡"
              },
              {
                "count": 19,
                "id": 3,
                "name": "可改签"
              },
              {
                "count": 18,
                "id": 2,
                "name": "可退票"
              }
            ]
          },
        }
      })
    },
    listqy: function (e) {
      if (this.data.qyopen) {
        this.setData({
          qyopen: false,
          nzopen: false,
          pxopen: false,
          nzshow: true,
          pxshow: true,
          qyshow: false,
          isfull: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          qyopen: true,
          pxopen: false,
          nzopen: false,
          nzshow: true,
          pxshow: true,
          qyshow: false,
          isfull: true,
          shownavindex: e.currentTarget.dataset.nav
        })
      }

    },
    list: function (e) {
      if (this.data.nzopen) {
        this.setData({
          nzopen: false,
          pxopen: false,
          qyopen: false,
          nzshow: false,
          pxshow: true,
          qyshow: true,
          isfull: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          content: this.data.nv,
          nzopen: true,
          pxopen: false,
          qyopen: false,
          nzshow: false,
          pxshow: true,
          qyshow: true,
          isfull: true,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
    },
    listpx: function (e) {
      if (this.data.pxopen) {
        this.setData({
          nzopen: false,
          pxopen: false,
          qyopen: false,
          nzshow: true,
          pxshow: false,
          qyshow: true,
          isfull: false,
          shownavindex: 0
        })
      } else {
        this.setData({
          content: this.data.px,
          nzopen: false,
          pxopen: true,
          qyopen: false,
          nzshow: true,
          pxshow: false,
          qyshow: true,
          isfull: true,
          shownavindex: e.currentTarget.dataset.nav
        })
      }
      console.log(e.target)
    },
    selectleft: function (e) {

      this.setData({
        cityright: {},
        citycenter: this.data.cityleft[e.currentTarget.dataset.city],
        select1: e.target.dataset.city,
        select2: ''
      });
    },
    selectcenter: function (e) {

      this.setData({
        cityright: this.data.citycenter[e.currentTarget.dataset.city],
        select2: e.target.dataset.city
      });
    },
    hidebg: function (e) {

      this.setData({
        qyopen: false,
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        qyshow: true,
        isfull: false,
        shownavindex: 0
      })
    }
  }
  })
