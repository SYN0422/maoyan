// components/wrap/wrap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    another:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    //大连
    dalian: {
      "cinemas": [
        {
          "id": 6151,
          "mark": 0,
          "nm": "万达国际影城(高新店)",
          "sellPrice": "34",
          "addr": "甘井子区高新园区黄浦路500号万达广场4层",
          "distance": "700m",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "IMAX厅",
              "RealD 6FL厅",
              "4DX厅",
              "儿童厅"
            ],
            "hallTypeVOList": [
              {
                "name": "IMAX厅",
                "url": ""
              },
              {
                "name": "RealD 6FL厅",
                "url": ""
              },
              {
                "name": "4DX厅",
                "url": ""
              },
              {
                "name": "儿童厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {}
        },
        {
          "id": 12680,
          "mark": 0,
          "nm": "米高梅国际影城(高新店)",
          "sellPrice": "28",
          "addr": "甘井子区高新园区黄浦路517号（锦辉购物广场五楼）（海创国际大厦附近）",
          "distance": "800m",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallType": [
              "4D厅"
            ],
            "hallTypeVOList": [
              {
                "name": "4D厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 2381,
          "mark": 0,
          "nm": "中影华臣影城(软件园店)",
          "sellPrice": "23",
          "addr": "沙河口区数码路南段13号锦辉商城东财书香园店2楼（近弘基书香园）",
          "distance": "2.6km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 17063,
          "mark": 0,
          "nm": "中影星美国际影城(软件园店)",
          "sellPrice": "23",
          "addr": "沙河口区高新园区软件园路1A-12号",
          "distance": "3.2km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "杜比全景声厅"
            ],
            "hallTypeVOList": [
              {
                "name": "杜比全景声厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 5578,
          "mark": 0,
          "nm": "中影华臣影城(黑石礁富丽庭店)",
          "sellPrice": "23",
          "addr": "沙河口区中山路673号富丽庭生活广场3F",
          "distance": "3.3km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 15420,
          "mark": 0,
          "nm": "东融国际影城(中心店)",
          "sellPrice": "23",
          "addr": "沙河口区西南路479号中心书城4F（熟食品交易中心）",
          "distance": "6km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "DTS:X 临境音厅"
            ],
            "hallTypeVOList": [
              {
                "name": "DTS:X 临境音厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减8元"
          }
        },
        {
          "id": 1503,
          "mark": 0,
          "nm": "万达国际影城(和平店)",
          "sellPrice": "39",
          "addr": "沙河口区高尔基路695-699号和平广场4层",
          "distance": "6.7km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "杜比全景声厅",
              "Dolby Cinema厅",
              "4DX厅",
              "儿童厅",
              "4D厅"
            ],
            "hallTypeVOList": [
              {
                "name": "杜比全景声厅",
                "url": ""
              },
              {
                "name": "Dolby Cinema厅",
                "url": ""
              },
              {
                "name": "4DX厅",
                "url": ""
              },
              {
                "name": "儿童厅",
                "url": ""
              },
              {
                "name": "4D厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减14元"
          }
        },
        {
          "id": 2065,
          "mark": 0,
          "nm": "华美影城",
          "sellPrice": "23",
          "addr": "沙河口区黄河路1105号马栏广场逸彩城3楼（新玛特）",
          "distance": "7km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "会员卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减14元"
          }
        },
        {
          "id": 25107,
          "mark": 0,
          "nm": "北联中体国际影城",
          "sellPrice": "23",
          "addr": "甘井子区柳韵园1-13号3层",
          "distance": "7.3km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 1500,
          "mark": 0,
          "nm": "中影华臣影城(西安路店)",
          "sellPrice": "23",
          "addr": "沙河口区西安路123号天兴罗斯福国际中心4F",
          "distance": "7.9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "RealD 6FL厅"
            ],
            "hallTypeVOList": [
              {
                "name": "RealD 6FL厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减6元"
          }
        },
        {
          "id": 14095,
          "mark": 0,
          "nm": "博纳国际影城(中央大道店)",
          "sellPrice": "26",
          "addr": "沙河口区西安路103号中央大道旅游购物中心5层",
          "distance": "8km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "IMAX厅",
              "4D厅"
            ],
            "hallTypeVOList": [
              {
                "name": "IMAX厅",
                "url": ""
              },
              {
                "name": "4D厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1
          },
          "promotion": {}
        },
        {
          "id": 1494,
          "mark": 0,
          "nm": "金逸影城(福佳店)",
          "sellPrice": "25",
          "addr": "沙河口区西安路99号福佳新天地5楼",
          "distance": "8.2km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "杜比全景声厅"
            ],
            "hallTypeVOList": [
              {
                "name": "杜比全景声厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 0,
            "vipTag": "折扣卡"
          },
          "promotion": {}
        },
        {
          "id": 15649,
          "mark": 0,
          "nm": "百丽宫(LUXE巨幕)影城恒隆广场店",
          "sellPrice": "34",
          "addr": "西岗区五四路66号恒隆广场4层",
          "distance": "8.8km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "RealD厅",
              "LUXE巨幕厅"
            ],
            "hallTypeVOList": [
              {
                "name": "RealD厅",
                "url": ""
              },
              {
                "name": "LUXE巨幕厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1
          },
          "promotion": {}
        },
        {
          "id": 1501,
          "mark": 0,
          "nm": "万达国际影城(华府店)",
          "sellPrice": "34",
          "addr": "西岗区中山路281号悦荟广场3层（近长春路）",
          "distance": "9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "IMAX厅",
              "RealD 6FL厅",
              "儿童厅",
              "4D厅"
            ],
            "hallTypeVOList": [
              {
                "name": "IMAX厅",
                "url": ""
              },
              {
                "name": "RealD 6FL厅",
                "url": ""
              },
              {
                "name": "儿童厅",
                "url": ""
              },
              {
                "name": "4D厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {}
        },
        {
          "id": 24114,
          "mark": 0,
          "nm": "万达影城(甘井子万达广场店)",
          "sellPrice": "39",
          "addr": "甘井子区虹韵路6号万达广场2F万达影城",
          "distance": "9.6km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "IMAX厅",
              "4DX厅",
              "儿童厅"
            ],
            "hallTypeVOList": [
              {
                "name": "IMAX厅",
                "url": ""
              },
              {
                "name": "4DX厅",
                "url": ""
              },
              {
                "name": "儿童厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减14元"
          }
        },
        {
          "id": 16676,
          "mark": 0,
          "nm": "恒大影城(帝景店)",
          "sellPrice": "26",
          "addr": "沙河口区南松路恒大帝景西侧，恒大影城3楼",
          "distance": "9.7km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [],
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减8元"
          }
        },
        {
          "id": 25506,
          "mark": 0,
          "nm": "华夏为莱影城",
          "sellPrice": "23",
          "addr": "甘井子区第五郡亿家缘广场3号楼2层",
          "distance": "10.1km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallType": [
              "4K厅"
            ],
            "hallTypeVOList": [
              {
                "name": "4K厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 0,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减20元"
          }
        },
        {
          "id": 14511,
          "mark": 0,
          "nm": "SFC上影影城(百年港湾IMAX店)",
          "sellPrice": "29",
          "addr": "西岗区香炉礁百年港湾奥特莱斯A2区2楼",
          "distance": "10.5km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "IMAX厅"
            ],
            "hallTypeVOList": [
              {
                "name": "IMAX厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "限时¥25.8促销开卡，首单更优惠"
          }
        },
        {
          "id": 1652,
          "mark": 0,
          "nm": "大地影院(新华绿洲店)",
          "sellPrice": "28.9",
          "addr": "甘井子区西南路122-130号新玛特新华店4楼东南侧",
          "distance": "10.8km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "限时¥19.9促销开卡，首单更优惠"
          }
        },
        {
          "id": 9448,
          "mark": 0,
          "nm": "万达国际影城(机场店)",
          "sellPrice": "33",
          "addr": "甘井子区张前路211号乐都汇购物中心F4L008",
          "distance": "10.9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "4DX厅",
              "儿童厅"
            ],
            "hallTypeVOList": [
              {
                "name": "4DX厅",
                "url": ""
              },
              {
                "name": "儿童厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {}
        }
      ],
      "ct_pois": [
        {
          "ct_poi": "936879945111165696_a6151_c0",
          "poiid": 2496123
        },
        {
          "ct_poi": "936879945111165696_a12680_c1",
          "poiid": 40317532
        },
        {
          "ct_poi": "936879945111165696_a2381_c2",
          "poiid": 1543598
        },
        {
          "ct_poi": "936879945111165696_a17063_c3",
          "poiid": 151125927
        },
        {
          "ct_poi": "936879945111165696_a5578_c4",
          "poiid": 2389567
        },
        {
          "ct_poi": "936879945111165696_a15420_c5",
          "poiid": 94309505
        },
        {
          "ct_poi": "936879945111165696_a1503_c6",
          "poiid": 1027628
        },
        {
          "ct_poi": "936879945111165696_a2065_c7",
          "poiid": 1465630
        },
        {
          "ct_poi": "936879945111165696_a25107_c8",
          "poiid": 165628510
        },
        {
          "ct_poi": "936879945111165696_a1500_c9",
          "poiid": 1550082
        },
        {
          "ct_poi": "936879945111165696_a14095_c10",
          "poiid": 79932659
        },
        {
          "ct_poi": "936879945111165696_a1494_c11",
          "poiid": 1566826
        },
        {
          "ct_poi": "936879945111165696_a15649_c12",
          "poiid": 71219253
        },
        {
          "ct_poi": "936879945111165696_a1501_c13",
          "poiid": 1560445
        },
        {
          "ct_poi": "936879945111165696_a24114_c14",
          "poiid": 162916354
        },
        {
          "ct_poi": "936879945111165696_a16676_c15",
          "poiid": 139962919
        },
        {
          "ct_poi": "936879945111165696_a25506_c16",
          "poiid": 179294151
        },
        {
          "ct_poi": "936879945111165696_a14511_c17",
          "poiid": 82833240
        },
        {
          "ct_poi": "936879945111165696_a1652_c18",
          "poiid": 1166264
        },
        {
          "ct_poi": "936879945111165696_a9448_c19",
          "poiid": 4830346
        }
      ],
      "paging": {
        "hasMore": true,
        "limit": 20,
        "offset": 0,
        "total": 65
      },
      "resId": "1535070800402"
    },
    // 沈阳
    shenyang: {
      "cinemas": [
        {
          "id": 1071,
          "mark": 0,
          "nm": "新东北影城(百联店)",
          "sellPrice": "16",
          "addr": "沈河区青年大街55号（百联购物中心4楼）",
          "distance": "363.8km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减16元"
          }
        },
        {
          "id": 15743,
          "mark": 0,
          "nm": "盈日国际影城(白塔店)",
          "sellPrice": "20",
          "addr": "浑南区上亿广场4楼",
          "distance": "353.1km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减6元"
          }
        },
        {
          "id": 13354,
          "mark": 0,
          "nm": "百汇国际影城",
          "sellPrice": "20",
          "addr": "法库县家百惠商场4楼",
          "distance": "435.2km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减12元"
          }
        },
        {
          "id": 1052,
          "mark": 0,
          "nm": "比高电影城(沈阳店)",
          "sellPrice": "22",
          "addr": "大东区津桥路7号天润广场5层",
          "distance": "366.1km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减16元"
          }
        },
        {
          "id": 16112,
          "mark": 0,
          "nm": "北联金汇影城",
          "sellPrice": "23",
          "addr": "于洪区沙岭路2-1号",
          "distance": "355.7km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 5239,
          "mark": 0,
          "nm": "大商影城(黄海路店)",
          "sellPrice": "23",
          "addr": "于洪区黄海路45号大商新玛特购物广场7楼（家乐福对面）",
          "distance": "359.1km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减8元"
          }
        },
        {
          "id": 16230,
          "mark": 0,
          "nm": "实维影院",
          "sellPrice": "23",
          "addr": "浑南区沈阳浑南新区南平中路6号沈阳理工大学校园综合服务中心2楼",
          "distance": "359.9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 0,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减6元"
          }
        },
        {
          "id": 5380,
          "mark": 0,
          "nm": "沈阳市工人文化宫职工文化影城",
          "sellPrice": "23",
          "addr": "铁西区南九中路76号",
          "distance": "360.6km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 1068,
          "mark": 0,
          "nm": "中影华臣影城(三好街店)",
          "sellPrice": "23",
          "addr": "和平区文萃路4号诚大数码国际广场5层（KFC北面）",
          "distance": "360.9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {}
        },
        {
          "id": 1063,
          "mark": 0,
          "nm": "耀莱成龙国际影城(三好街店)",
          "sellPrice": "23",
          "addr": "沈河区青年大街185号（茂业百货7层）",
          "distance": "361km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [],
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 0,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减8元"
          }
        },
        {
          "id": 1072,
          "mark": 0,
          "nm": "文化宫影城(民主路店)",
          "sellPrice": "23",
          "addr": "和平区民主路72号（近时尚地下转盘处）",
          "distance": "361.9km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 0,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 1060,
          "mark": 0,
          "nm": "七星国际影城",
          "sellPrice": "23",
          "addr": "和平区马路湾光荣街10号（近马路湾原辽宁电台202医院对面）",
          "distance": "362.2km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [],
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减14元"
          }
        },
        {
          "id": 1053,
          "mark": 0,
          "nm": "中影华臣影城(南塔店)",
          "sellPrice": "23",
          "addr": "沈河区文化路139号箱包时装奥莱城5楼",
          "distance": "362.3km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减16元"
          }
        },
        {
          "id": 1604,
          "mark": 0,
          "nm": "新东北影城(中兴店)",
          "sellPrice": "23",
          "addr": "和平区太原北街86号，中兴沈阳商业大厦7楼（近中华路）",
          "distance": "362.4km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "DTS:X 临境音厅"
            ],
            "hallTypeVOList": [
              {
                "name": "DTS:X 临境音厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减12元"
          }
        },
        {
          "id": 1077,
          "mark": 0,
          "nm": "星辰9号幻影会",
          "sellPrice": "23",
          "addr": "和平区同泽北街9号银都大厦1楼（近北二马路）",
          "distance": "362.9km",
          "tag": {
            "allowRefund": 1,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 1,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减10元"
          }
        },
        {
          "id": 24283,
          "mark": 0,
          "nm": "星迹激光影城",
          "sellPrice": "23",
          "addr": "和平区市府大路188号，萃兮优客城市奥莱7层",
          "distance": "364.5km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减6元"
          }
        },
        {
          "id": 17182,
          "mark": 0,
          "nm": "新华国际影城(沈阳店)",
          "sellPrice": "23",
          "addr": "沈河区市府大路262-6号401（卓展购物中心正对面）",
          "distance": "365.2km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallType": [
              "杜比全景声厅",
              "4K厅",
              "巨幕厅"
            ],
            "hallTypeVOList": [
              {
                "name": "杜比全景声厅",
                "url": ""
              },
              {
                "name": "4K厅",
                "url": ""
              },
              {
                "name": "巨幕厅",
                "url": ""
              }
            ],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减16元"
          }
        },
        {
          "id": 10403,
          "mark": 0,
          "nm": "光陆影城",
          "sellPrice": "23",
          "addr": "沈河区中街路187号（近朝阳街）",
          "distance": "365.5km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减6元"
          }
        },
        {
          "id": 1070,
          "mark": 0,
          "nm": "中影华臣影城(华府天地店)",
          "sellPrice": "23",
          "addr": "沈河区哈尔滨路118号华府天地购物中心一期4楼（近北京街）",
          "distance": "365.6km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减16元"
          }
        },
        {
          "id": 1076,
          "mark": 0,
          "nm": "大商影城(千盛店)",
          "sellPrice": "23",
          "addr": "皇姑区长江街99号千盛购物中心2楼",
          "distance": "366.2km",
          "tag": {
            "allowRefund": 0,
            "buyout": 0,
            "cityCardTag": 0,
            "deal": 0,
            "endorse": 0,
            "hallTypeVOList": [],
            "sell": 1,
            "snack": 1,
            "vipTag": "折扣卡"
          },
          "promotion": {
            "cardPromotionTag": "开卡特惠，首单2张立减12元"
          }
        }
      ],
      "ct_pois": [
        {
          "ct_poi": "936879945111165696_a1071_c0",
          "poiid": 245996
        },
        {
          "ct_poi": "936879945111165696_a15743_c1",
          "poiid": 94333090
        },
        {
          "ct_poi": "936879945111165696_a13354_c2",
          "poiid": 42359804
        },
        {
          "ct_poi": "936879945111165696_a1052_c3",
          "poiid": 1459883
        },
        {
          "ct_poi": "936879945111165696_a16112_c4",
          "poiid": 100381338
        },
        {
          "ct_poi": "936879945111165696_a5239_c5",
          "poiid": 2399426
        },
        {
          "ct_poi": "936879945111165696_a16230_c6",
          "poiid": 116105422
        },
        {
          "ct_poi": "936879945111165696_a5380_c7",
          "poiid": 259480
        },
        {
          "ct_poi": "936879945111165696_a1068_c8",
          "poiid": 74054
        },
        {
          "ct_poi": "936879945111165696_a1063_c9",
          "poiid": 1433391
        },
        {
          "ct_poi": "936879945111165696_a1072_c10",
          "poiid": 1941115
        },
        {
          "ct_poi": "936879945111165696_a1060_c11",
          "poiid": 1439142
        },
        {
          "ct_poi": "936879945111165696_a1053_c12",
          "poiid": 1499462
        },
        {
          "ct_poi": "936879945111165696_a1604_c13",
          "poiid": 242888
        },
        {
          "ct_poi": "936879945111165696_a1077_c14",
          "poiid": 1439148
        },
        {
          "ct_poi": "936879945111165696_a24283_c15",
          "poiid": 164060538
        },
        {
          "ct_poi": "936879945111165696_a17182_c16",
          "poiid": 152527013
        },
        {
          "ct_poi": "936879945111165696_a10403_c17",
          "poiid": 5597070
        },
        {
          "ct_poi": "936879945111165696_a1070_c18",
          "poiid": 32376
        },
        {
          "ct_poi": "936879945111165696_a1076_c19",
          "poiid": 1524839
        }
      ],
      "paging": {
        "hasMore": true,
        "limit": 20,
        "offset": 0,
        "total": 79
      },
      "resId": "1535070942418"
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
