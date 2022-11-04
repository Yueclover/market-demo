var express = require('express');
var router = express.Router();
var books = require('../router_handler/books')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/home/lytab', function (req, res, next) {
  res.send({
    lyTab: {
      type: 'lytab',
      goodsList: [
        {
          name: '推荐',
          path: '',
        },
        {
          name: '幼教',
          path: '',
        },
        {
          name: '小学',
          path: '',
        },
        {
          name: '初中',
          path: '',
        },
        {
          name: '高中',
          path: '',
        },
        {
          name: '四六级',
          path: '',
        },
        {
          name: '考研',
          path: '',
        },
        {
          name: '出国',
          path: '',
        },
        {
          name: '408',
          path: '',
        },
        {
          name: '大学数学',
          path: '',
        },
      ],
    },
  })
})
//recomend page
router.get('/api/home/page', function (req, res) {
  console.log(typeof req.query.id);
  console.log(req.query);
  console.log(req.params);
  if (req.query.id == 0) {
    // console.log("推荐页");
    res.send({
      pageType: req.query.name,
      //轮播图
      swipers: {
        type: 'swiper',
        swiperImg: [
          {
            id: 0,
            imgUrl: 'http://localhost:3000/images/swiper1.jpg',

          },
          {
            id: 1,
            imgUrl: 'http://localhost:3000/images/swiper2.jpg',

          },
          {
            id: 2,
            imgUrl: 'http://localhost:3000/images/swiper3.jpg',

          },
          {
            id: 3,
            imgUrl: 'http://localhost:3000/images/swiper4.jpg',

          },
          {
            id: 4,
            imgUrl: 'http://localhost:3000/images/swiper5.jpg',

          },
        ]
      },
      //爆款推荐
      recomends: {
        type: 'recomend',
        recomendList: [
          {
            id: 1,
            imgUrl: "http://localhost:3000/images/recomend1.jpg",
            title: "高考真题解密 英语",
            description:
              " 金太阳教育 卷霸2023版高考真题英语全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 2,
            imgUrl: "http://localhost:3000/images/recomend2.jpg",
            title: "高考真题解密 文综",
            description:
              " 金太阳教育 卷霸2023版高考真题文综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 3,
            imgUrl: "http://localhost:3000/images/recomend3.jpg",
            title: "高考真题解密 理综",
            description:
              " 金太阳教育 卷霸2023版高考真题理综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 4,
            imgUrl: "http://localhost:3000/images/recomend4.jpg",
            title: "肖秀荣考研政治 1000题",
            description: "肖秀荣2023考研政治，现货速发",
            price: 41,
          },
          {
            id: 5,
            imgUrl: "http://localhost:3000/images/recomend5.jpg",
            title: "线性代数辅导讲义",
            description: "养成学习好习惯，进步不会慢",
            price: 23.3,
          },
          {
            id: 6,
            imgUrl: "http://localhost:3000/images/recomend6.jpg",
            title: " 2023王道计算机考研408教材 ",
            description: "本书特色 提供14年来考研的真题。 提供对应的双色答题卡。 提供配套答案与分析。 本书包含以下模拟题（内附答题卡和参考答案） 2022年全国硕士研究生招生考试计算机科学专业基础试题 2021年全国硕士研究生招生考试计算机科学专业基础试题 2020年全国硕士研究生招生考试计算机科学专业基础试题 2019年全国硕士研究生招生考试计算机科学专业基础试题 2018年全国硕士研究生招生考试计算机科学专业基础试题 2017年全国硕士研究生招生考试计算机科学专业基础试题 2016年全国硕士研究生招生考试计算机科学专业基础试题 2015年全国硕士研究生招生考试计算机科学专业基础试题 2014年全国硕士研究生招生考试计算机科学专业基础试题 2013年全国硕士研究生招生考试计算机科学专业基础试题 2012年全国硕士研究生招生考试计算机科学专业基础试题 2011年全国",
            price: 68,
          },
        ],
      },
      // 猜你喜欢
      likes: {
        type: 'like',
        likeList: [
          {
            id: 1,
            imgUrl: "http://localhost:3000/images/like1.jpg",
            title: " 雅思王听力真题语料库 2022新版 ",
            description: "",
            price: 68,
          },
          {
            id: 2,
            imgUrl: "http://localhost:3000/images/like2.jpg",
            title: " 新东方 100个句子记完7000个雅思单词",
            description:
              " 本书是俞敏洪老师的又一词汇力作，书中收录雅思考试中的100个典型句子，通过对其中核心词、主题归纳词及重要语法点的讲解，帮助考生用句子识记单词，用语境强化记忆，有效解决词汇难题。 每个句子下面都深度分析了该句的语法结构，帮助考生掌握雅思考查的语法难点。本书为四色印刷，配有100余张全彩配图，记忆单词不再枯燥。本书还配有由外教朗读的音频，纯正英音，扫描封底二维码或登录网址即可下载收听，随听随学。另外，新东方4位雅思老师全力助阵，录制全书配套课程，线上与线下学习完美结合，扫描封底二维码即可购课学习。 ",
            price: 68,
          },
          {
            id: 3,
            imgUrl: "http://localhost:3000/images/like3.jpg",
            title:
              " 顾家北手把手教你雅思写作 6.0版 领跑雅思IELTS写作 技法大全 雅思备考经典",
            description:
              "6.0版本是之前所有版本的升华和提炼，书中所讲述的教学体系，在目前在全球雅思行业备受推崇，写作教学口碑一致好评、提分幅度大、速度快，水平遥遥领先。本书通过手把手讲述写作技巧，细致、深入，符合中国学生的学习习惯；本书精选典型题目，深入解析剑桥题库，紧扣评分标准，准确把握考官评判心理；引领考试风向标；提供适合学生学习的高水平范文，强调语言能力，快速提分。 本书设计巧妙，学习手册和练习手册并行，大书学习知识点，小书及时复习巩固。确保学习任务完成。书中所附赠二维码，可以随时补充考试动态，并获得本书配套音频。 ",
            price: 68,
          },
          {
            id: 4,
            imgUrl: "http://localhost:3000/images/like4.jpg",
            title: " 新东方 剑桥雅思语法精讲精练",
            description:
              " 命题方官方出品，覆盖雅思考试常考语法点，搭配巩固练习，诊断语法错误，为考生量身定制的雅思制胜用书！ ",
            price: 68,
          },
          {
            id: 5,
            imgUrl: "http://localhost:3000/images/like5.jpg",
            title: " 新东方 雅思词汇词根+联想记忆法 ",
            description:
              "乱序版 俞敏洪 雅思乱序 新东方绿宝书 新东方雅思乱序全新改版，收录雅思核心词，新增配套词汇课程、影视剧场景、背词小程序，“词根+联想”高效助记。 ",
            price: 68,
          },
        ],
      }
    })
  } else {
    res.send({
      pageType: req.query.name,
      swipers: {},
      //爆款推荐
      recomends: {
        type: 'recomend',
        recomendList: [
          {
            id: 1,
            imgUrl: "http://localhost:3000/images/recomend1.jpg",
            title: "高考真题解密 英语",
            description:
              " 金太阳教育 卷霸2023版高考真题英语全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 2,
            imgUrl: "http://localhost:3000/images/recomend2.jpg",
            title: "高考真题解密 文综",
            description:
              " 金太阳教育 卷霸2023版高考真题文综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 3,
            imgUrl: "http://localhost:3000/images/recomend3.jpg",
            title: "高考真题解密 理综",
            description:
              " 金太阳教育 卷霸2023版高考真题理综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 4,
            imgUrl: "http://localhost:3000/images/recomend4.jpg",
            title: "肖秀荣考研政治 1000题",
            description: "肖秀荣2023考研政治，现货速发",
            price: 41,
          },
          {
            id: 5,
            imgUrl: "http://localhost:3000/images/recomend5.jpg",
            title: "线性代数辅导讲义",
            description: "养成学习好习惯，进步不会慢",
            price: 23.3,
          },
          {
            id: 6,
            imgUrl: "http://localhost:3000/images/recomend6.jpg",
            title: " 2023王道计算机考研408教材 ",
            description: "本书特色 提供14年来考研的真题。 提供对应的双色答题卡。 提供配套答案与分析。 本书包含以下模拟题（内附答题卡和参考答案） 2022年全国硕士研究生招生考试计算机科学专业基础试题 2021年全国硕士研究生招生考试计算机科学专业基础试题 2020年全国硕士研究生招生考试计算机科学专业基础试题 2019年全国硕士研究生招生考试计算机科学专业基础试题 2018年全国硕士研究生招生考试计算机科学专业基础试题 2017年全国硕士研究生招生考试计算机科学专业基础试题 2016年全国硕士研究生招生考试计算机科学专业基础试题 2015年全国硕士研究生招生考试计算机科学专业基础试题 2014年全国硕士研究生招生考试计算机科学专业基础试题 2013年全国硕士研究生招生考试计算机科学专业基础试题 2012年全国硕士研究生招生考试计算机科学专业基础试题 2011年全国",
            price: 68,
          },
        ],
      },
      likes: {},
    })
  }
});
//search
router.get('/api/search', (req, res) => {
  console.log(req.query.name);
  if (req.query.name == '抽纸') {
    res.send({
      search: {
        type: 'search',
        recomends: {
          type: 'recomend',
          recomendList: [
            {
              id: 1,
              imgUrl: "http://localhost:3000/images/recomend1.jpg",
              title: "高考真题解密 英语",
              description:
                " 金太阳教育 卷霸2023版高考真题英语全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
              price: 68,
            },
            {
              id: 2,
              imgUrl: "http://localhost:3000/images/recomend2.jpg",
              title: "高考真题解密 文综",
              description:
                " 金太阳教育 卷霸2023版高考真题文综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
              price: 68,
            },
            {
              id: 3,
              imgUrl: "http://localhost:3000/images/recomend3.jpg",
              title: "高考真题解密 理综",
              description:
                " 金太阳教育 卷霸2023版高考真题理综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
              price: 68,
            },
            {
              id: 4,
              imgUrl: "http://localhost:3000/images/recomend4.jpg",
              title: "肖秀荣考研政治 1000题",
              description: "肖秀荣2023考研政治，现货速发",
              price: 41,
            },
            {
              id: 5,
              imgUrl: "http://localhost:3000/images/recomend5.jpg",
              title: "线性代数辅导讲义",
              description: "养成学习好习惯，进步不会慢",
              price: 23.3,
            },
            {
              id: 6,
              imgUrl: "http://localhost:3000/images/recomend6.jpg",
              title: " 2023王道计算机考研408教材 ",
              description: "本书特色 提供14年来考研的真题。 提供对应的双色答题卡。 提供配套答案与分析。 本书包含以下模拟题（内附答题卡和参考答案） 2022年全国硕士研究生招生考试计算机科学专业基础试题 2021年全国硕士研究生招生考试计算机科学专业基础试题 2020年全国硕士研究生招生考试计算机科学专业基础试题 2019年全国硕士研究生招生考试计算机科学专业基础试题 2018年全国硕士研究生招生考试计算机科学专业基础试题 2017年全国硕士研究生招生考试计算机科学专业基础试题 2016年全国硕士研究生招生考试计算机科学专业基础试题 2015年全国硕士研究生招生考试计算机科学专业基础试题 2014年全国硕士研究生招生考试计算机科学专业基础试题 2013年全国硕士研究生招生考试计算机科学专业基础试题 2012年全国硕士研究生招生考试计算机科学专业基础试题 2011年全国",
              price: 68,
            },
          ],
        },

      }
    })
  } else {
    res.send({
      search: {
        type: 'search',
        recomends: {
          type: 'recomend',
          recomendList: [
            {
              id: 5,
              imgUrl: "http://localhost:3000/images/recomend5.jpg",
              title: "线性代数辅导讲义",
              description: "养成学习好习惯，进步不会慢",
              price: 23.3,
            },
            {
              id: 6,
              imgUrl: "http://localhost:3000/images/recomend6.jpg",
              title: " 2023王道计算机考研408教材 ",
              description: "本书特色 提供14年来考研的真题。 提供对应的双色答题卡。 提供配套答案与分析。 本书包含以下模拟题（内附答题卡和参考答案） 2022年全国硕士研究生招生考试计算机科学专业基础试题 2021年全国硕士研究生招生考试计算机科学专业基础试题 2020年全国硕士研究生招生考试计算机科学专业基础试题 2019年全国硕士研究生招生考试计算机科学专业基础试题 2018年全国硕士研究生招生考试计算机科学专业基础试题 2017年全国硕士研究生招生考试计算机科学专业基础试题 2016年全国硕士研究生招生考试计算机科学专业基础试题 2015年全国硕士研究生招生考试计算机科学专业基础试题 2014年全国硕士研究生招生考试计算机科学专业基础试题 2013年全国硕士研究生招生考试计算机科学专业基础试题 2012年全国硕士研究生招生考试计算机科学专业基础试题 2011年全国",
              price: 68,
            },
          ],
        },

      }
    })
  }
})
router.get('/api/search/goods', books.showBooksInfo)
router.get('/api/search/menu', (req, res) => {
  if (req.query.name === '热搜推荐') {
    res.send({
      secondMenu: [
        {
          id: "top",
          type: "榜单",
          goodsList: [
            {
              name: "总榜",
              imgUrl: "#",
            },
            {
              name: "新书榜",
              imgUrl: "#",
            },
            {
              name: "童书榜",
              imgUrl: "#",
            },
          ],
        },
        {
          id: "lecture",
          type: "文艺",
          goodsList: [
            {
              name: "小说",
              imgUrl: "#",
            },
            {
              name: "文学",
              imgUrl: "#",
            },
            {
              name: "青春文学",
              imgUrl: "#",
            },
            {
              name: "动漫/幽默",
              imgUrl: "#",
            },
            {
              name: "成功/励志",
              imgUrl: "#",
            },
            {
              name: "传记",
              imgUrl: "#",
            },
          ],
        },
      ],
    })
  } else {
    res.send({
      secondMenu: [
        {
          id: "top",
          type: "教育",
          goodsList: [
            {
              name: "总榜",
              imgUrl: "#",
            },
            {
              name: "新书榜",
              imgUrl: "#",
            },
            {
              name: "童书榜",
              imgUrl: "#",
            },
          ],
        },
        {
          id: "lecture",
          type: "人文社科",
          goodsList: [
            {
              name: "小说",
              imgUrl: "#",
            },
            {
              name: "文学",
              imgUrl: "#",
            },
            {
              name: "青春文学",
              imgUrl: "#",
            },
            {
              name: "动漫/幽默",
              imgUrl: "#",
            },
            {
              name: "成功/励志",
              imgUrl: "#",
            },
            {
              name: "传记",
              imgUrl: "#",
            },
          ],
        },
      ],
    })
  }
})
router.get('/api/search/menu/list', (req, res) => {
  res.send({
    search: {
      type: 'search',
      recomends: {
        type: 'recomend',
        recomendList: [
          {
            id: 1,
            imgUrl: "http://localhost:3000/images/recomend1.jpg",
            title: "高考真题解密 英语",
            description:
              " 金太阳教育 卷霸2023版高考真题英语全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 2,
            imgUrl: "http://localhost:3000/images/recomend2.jpg",
            title: "高考真题解密 文综",
            description:
              " 金太阳教育 卷霸2023版高考真题文综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 3,
            imgUrl: "http://localhost:3000/images/recomend3.jpg",
            title: "高考真题解密 理综",
            description:
              " 金太阳教育 卷霸2023版高考真题理综全国卷2018-2022汇编高中高三近5五年历年试卷试题 ",
            price: 68,
          },
          {
            id: 4,
            imgUrl: "http://localhost:3000/images/recomend4.jpg",
            title: "肖秀荣考研政治 1000题",
            description: "肖秀荣2023考研政治，现货速发",
            price: 41,
          },
          {
            id: 5,
            imgUrl: "http://localhost:3000/images/recomend5.jpg",
            title: "线性代数辅导讲义",
            description: "养成学习好习惯，进步不会慢",
            price: 23.3,
          },
          {
            id: 6,
            imgUrl: "http://localhost:3000/images/recomend6.jpg",
            title: " 2023王道计算机考研408教材 ",
            description: "本书特色 提供14年来考研的真题。 提供对应的双色答题卡。 提供配套答案与分析。 本书包含以下模拟题（内附答题卡和参考答案） 2022年全国硕士研究生招生考试计算机科学专业基础试题 2021年全国硕士研究生招生考试计算机科学专业基础试题 2020年全国硕士研究生招生考试计算机科学专业基础试题 2019年全国硕士研究生招生考试计算机科学专业基础试题 2018年全国硕士研究生招生考试计算机科学专业基础试题 2017年全国硕士研究生招生考试计算机科学专业基础试题 2016年全国硕士研究生招生考试计算机科学专业基础试题 2015年全国硕士研究生招生考试计算机科学专业基础试题 2014年全国硕士研究生招生考试计算机科学专业基础试题 2013年全国硕士研究生招生考试计算机科学专业基础试题 2012年全国硕士研究生招生考试计算机科学专业基础试题 2011年全国",
            price: 68,
          },
        ],
      },

    }
  })
})
module.exports = router;
