// Com/xialakuang/xialakuang.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pull:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:["全城","品牌","特色"],
    'selectedIndex':"",
    height: wx.getSystemInfoSync().windowHeight,
    Json: {
      "brand": {
        "name": "品牌",
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
        ],
        height: wx.getSystemInfoSync().windowHeight,
      },
      "district": {
        "name": "行政区",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 13,
            "id": 121,
            "name": "沈河区",
            "subItems": [
              {
                "count": 13,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 4,
                "id": 915,
                "name": "北站/市府"
              },
              {
                "count": 2,
                "id": 14538,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 918,
                "name": "文艺路/文化路"
              },
              {
                "count": 1,
                "id": 14537,
                "name": "南塔"
              },
              {
                "count": 1,
                "id": 6612,
                "name": "长青街"
              }
            ]
          },
          {
            "count": 12,
            "id": 120,
            "name": "和平区",
            "subItems": [
              {
                "count": 12,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 26431,
                "name": "万达广场"
              },
              {
                "count": 2,
                "id": 6604,
                "name": "三好街"
              },
              {
                "count": 1,
                "id": 26429,
                "name": "中山广场（医大一院）"
              },
              {
                "count": 1,
                "id": 7395,
                "name": "长白岛"
              },
              {
                "count": 1,
                "id": 26407,
                "name": "太原街"
              },
              {
                "count": 1,
                "id": 912,
                "name": "南市/马路湾"
              },
              {
                "count": 1,
                "id": 19557,
                "name": "沈阳站"
              },
              {
                "count": 1,
                "id": 6603,
                "name": "彩电塔"
              },
              {
                "count": 1,
                "id": 26432,
                "name": "中华路"
              }
            ]
          },
          {
            "count": 11,
            "id": 122,
            "name": "铁西区",
            "subItems": [
              {
                "count": 11,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 9032,
                "name": "北一路万达"
              },
              {
                "count": 1,
                "id": 26616,
                "name": "财富广场"
              },
              {
                "count": 1,
                "id": 27290,
                "name": "沈辽路万达"
              },
              {
                "count": 1,
                "id": 26449,
                "name": "工人文化宫"
              },
              {
                "count": 1,
                "id": 26447,
                "name": "兴隆大都汇"
              },
              {
                "count": 1,
                "id": 26443,
                "name": "兴隆大天地"
              },
              {
                "count": 1,
                "id": 26436,
                "name": "云峰街"
              },
              {
                "count": 1,
                "id": 26437,
                "name": "星摩尔"
              },
              {
                "count": 1,
                "id": 26438,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 26434,
                "name": "兴工北街"
              }
            ]
          },
          {
            "count": 9,
            "id": 2449,
            "name": "浑南区",
            "subItems": [
              {
                "count": 9,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6611,
                "name": "奥体中心"
              },
              {
                "count": 1,
                "id": 14555,
                "name": "东陵公园"
              },
              {
                "count": 1,
                "id": 35655,
                "name": "沈阳建筑大学"
              }
            ]
          },
          {
            "count": 8,
            "id": 123,
            "name": "大东区",
            "subItems": [
              {
                "count": 8,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 3,
                "id": 6609,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 37875,
                "name": "龙之梦"
              },
              {
                "count": 1,
                "id": 925,
                "name": "东站"
              }
            ]
          },
          {
            "count": 7,
            "id": 125,
            "name": "于洪区",
            "subItems": [
              {
                "count": 7,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 14529,
                "name": "国奥现代城"
              },
              {
                "count": 1,
                "id": 14522,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 26452,
                "name": "碧桂园银河城"
              }
            ]
          },
          {
            "count": 6,
            "id": 2450,
            "name": "沈北新区",
            "subItems": [
              {
                "count": 6,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 2,
                "id": 14518,
                "name": "正良"
              },
              {
                "count": 1,
                "id": 30777,
                "name": "虎石台"
              },
              {
                "count": 1,
                "id": 14519,
                "name": "道义"
              }
            ]
          },
          {
            "count": 4,
            "id": 124,
            "name": "皇姑区",
            "subItems": [
              {
                "count": 4,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 926,
                "name": "北陵"
              },
              {
                "count": 1,
                "id": 14532,
                "name": "北行"
              },
              {
                "count": 1,
                "id": 1080,
                "name": "塔湾"
              },
              {
                "count": 1,
                "id": 6620,
                "name": "龙江广场"
              }
            ]
          },
          {
            "count": 3,
            "id": 2448,
            "name": "苏家屯区",
            "subItems": [
              {
                "count": 3,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 35653,
                "name": "苏家屯区政府"
              }
            ]
          },
          {
            "count": 2,
            "id": 2451,
            "name": "新民市"
          },
          {
            "count": 2,
            "id": 2454,
            "name": "法库县",
            "subItems": [
              {
                "count": 2,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15975,
                "name": "幸福花园"
              }
            ]
          },
          {
            "count": 1,
            "id": 2452,
            "name": "辽中县"
          },
          {
            "count": 1,
            "id": 2453,
            "name": "康平县",
            "subItems": [
              {
                "count": 1,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 1,
                "id": 15986,
                "name": "中心街"
              }
            ]
          }
        ]
      },
      "hallType": {
        "name": "特效厅",
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
        "name": "特色功能",//特色
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
      "subway": {
        "name": "地铁",
        "subItems": [
          {
            "count": 79,
            "id": -1,
            "name": "全部"
          },
          {
            "count": 37,
            "id": 64,
            "name": "1号线",
            "subItems": [
              {
                "count": 37,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 7,
                "id": 1140,
                "name": "太原街"
              },
              {
                "count": 6,
                "id": 1144,
                "name": "中街"
              },
              {
                "count": 6,
                "id": 1139,
                "name": "沈阳站"
              },
              {
                "count": 5,
                "id": 1145,
                "name": "东中街"
              },
              {
                "count": 2,
                "id": 1146,
                "name": "滂江街"
              },
              {
                "count": 2,
                "id": 1138,
                "name": "云峰北街"
              },
              {
                "count": 1,
                "id": 1135,
                "name": "启工街"
              },
              {
                "count": 1,
                "id": 1132,
                "name": "于洪广场"
              },
              {
                "count": 1,
                "id": 1133,
                "name": "迎宾路"
              },
              {
                "count": 1,
                "id": 1147,
                "name": "黎明广场"
              },
              {
                "count": 1,
                "id": 1143,
                "name": "怀远门"
              },
              {
                "count": 1,
                "id": 1142,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1141,
                "name": "南市场"
              },
              {
                "count": 1,
                "id": 1137,
                "name": "铁西广场"
              },
              {
                "count": 1,
                "id": 1136,
                "name": "保工街"
              }
            ]
          },
          {
            "count": 33,
            "id": 65,
            "name": "2号线",
            "subItems": [
              {
                "count": 33,
                "id": -1,
                "name": "全部"
              },
              {
                "count": 5,
                "id": 1155,
                "name": "工业展览馆"
              },
              {
                "count": 5,
                "id": 1158,
                "name": "市府广场"
              },
              {
                "count": 4,
                "id": 1154,
                "name": "市图书馆"
              },
              {
                "count": 3,
                "id": 1152,
                "name": "奥体中心"
              },
              {
                "count": 3,
                "id": 1159,
                "name": "金融中心"
              },
              {
                "count": 3,
                "id": 1160,
                "name": "沈阳北站"
              },
              {
                "count": 3,
                "id": 1151,
                "name": "营盘街"
              },
              {
                "count": 2,
                "id": 1161,
                "name": "岐山路"
              },
              {
                "count": 1,
                "id": 1157,
                "name": "青年大街"
              },
              {
                "count": 1,
                "id": 1156,
                "name": "青年公园"
              },
              {
                "count": 1,
                "id": 1162,
                "name": "中医药大学"
              },
              {
                "count": 1,
                "id": 1166,
                "name": "三台子"
              },
              {
                "count": 1,
                "id": 1669,
                "name": "航空航天大学"
              }
            ]
          }
        ]
      },
      "timeRanges": {
        "name": "时段",
        "subItems": [
          {
            "count": 0,
            "id": 100000000,
            "name": "不限时段"
          },
          {
            "count": 0,
            "id": 100000900,
            "name": "9点以前"
          },
          {
            "count": 0,
            "id": 109001100,
            "name": "9-11点"
          },
          {
            "count": 0,
            "id": 111001300,
            "name": "11-13点"
          },
          {
            "count": 0,
            "id": 113001500,
            "name": "13-15点"
          },
          {
            "count": 0,
            "id": 115001700,
            "name": "15-17点"
          },
          {
            "count": 0,
            "id": 117001900,
            "name": "17-19点"
          },
          {
            "count": 0,
            "id": 119002100,
            "name": "19-21点"
          },
          {
            "count": 0,
            "id": 121002300,
            "name": "21-23点"
          },
          {
            "count": 0,
            "id": 123002359,
            "name": "23点以后"
          }
        ]
      }
    },
    haha:false,
    haha1:false,
    haha2:false,
    aha:false,
    ok:true,
    on:false,
    filterName:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click:function(e){
      
      // 'selectedIndex': e.target.dataset.index,
      console.log(e.target.dataset.index)
      if (e.target.dataset.index === 1){
        this.setData({
          'haha2': false,
          'haha1': false,
          'haha': !this.data.haha,
          'aha': true
        })
      } else if (e.target.dataset.index === 0){
        this.setData({
          'haha2': false,
          'haha': false,
          'haha1': !this.data.haha1,
          'aha': true
        })
      } else if (e.target.dataset.index === 2){
        this.setData({
          'haha': false,
          'haha1': false,
          'haha2': !this.data.haha2,
          'aha': true
        })
      }
      if (this.data.haha == false && this.data.haha1 == false && this.data.haha2==false){
        this.setData({
          'aha':false
        })
        }
    },
    a2_click:function(a){
      console.log(a.target.dataset.index)
      this.setData({
        'selectedIndex': a.target.dataset.index
      })
    },
    sq:function(){
      this.setData({
        'ok': true,
        'on':false
      })
    },
    dt:function(){
      this.setData({
        'ok': false,
        'on':true
      })
    }

  }
})
