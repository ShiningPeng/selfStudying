<template>
  <div class="article-container">
    <h1 class="article-title">{{title}}</h1>
    <span class="article-author">{{author}}</span>
    <div class="article-content">
      {{content}}
    </div>
    <p class="article-edit">{{editor}}</p>
    <div class="article-author-introduction">
      <span class="zuozhe">作者</span>
      <Author/>
    </div>
    <div class="article-commitlist">
      <span class="pinglunliebiao">评论列表</span>
      <ul>
        <li v-for="(comment,index) in commentList" :key="index">{{comment.userName}}---：<br/>{{comment.content}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Author from '@/components/author'
export default {
  name:'detail',
  components:{
    Author
  },
  data () {
    return {
      title:'蝉',
      author:'文/龙伟平',
      content:'一、没办法看到真迹。杨颐在地球仪的北半球上方，用指尖画了条弧线，大圆最短原理，是北极圈航线。莫奈1882年画下的《散步于布维尔悬崖》，真迹收藏于芝加哥艺术博物馆。若转机从北京出发，要经过内蒙古，兴许还能看到海拉尔，也有可能只看得到白云，接着到黑龙江省，然后进入俄罗斯境内，出来后再飞越楚科奇海和波弗特海……还有好远好远的距离，以及极地，辐射，西风带等等。这个半蹲着的姿势太累人了，杨颐松开地球仪，坐回到书桌上，椅子发出刺耳的咯吱声，地球仪被她的左手一带，惯性地转着。她心想，去到了，也不一定能看到。“今日学车学得怎么样？”母亲端着一碟车厘子，不敲门就径直进入她的房间，声音被一路拖着，像拖着支蘸满颜料的油画笔，然后重重地顿在一侧。杨颐撑了撑鼻梁上的眼镜，看不出母亲代表什么颜色。“没怎样，就这样。”杨颐拈了一颗放进嘴里，顺手把桌上A4大小的铜版纸立起来，这是打印的《散步于布维尔悬崖》，千挑万选出比较高清的一张。莫奈的画不能近看，否则像雾里看花，醉醺醺的，只看得到笔触，看不出明确的形态。她双手伸直，距离延长了一点，再延长一点，铜版纸表面反射出一片亮光，是头顶的灯。',
      editor:'责任编辑：专三千zengkaimiao@wufazhuce.com',
      commentList:[
        {
          userName:'长安',
          content:'铜版纸表面反射出一片亮光，是头顶的灯。'
        },
        {
          userName:'李白',
          content:'版纸立起来，这是打印的《散步于布维尔悬崖》，千挑万选出比较高清的一张。莫奈的画不能近看，否则像雾'
        },
        {
          userName:'张三',
          content:'，地球仪被她的左手一带，惯性地转着。她心想，去到了，也不一定能看到。“今日学车学得怎么样？”母亲端着一碟车厘子，不敲门就径直进入她的房间，声音被一路拖着，像拖着支蘸满颜料的油画笔，然后重重地顿在一侧。杨颐撑了撑鼻梁上的眼镜，看不出母亲代表什么颜色。“没怎样，就'
        },
        {
          userName:'王鹏14',
          content:'坐回到书桌上，椅子发出刺耳的咯吱声，地球仪被她'
        },
        {
          userName:'Lady first',
          content:'航线。莫奈188'
        },
        
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.article-container
  width 90%
  padding 5% 5% 0 5%
  .article-title
    font-size 25px
    margin-bottom 30px
  .article-author
    display block
    font-size 15px
    color #808080
    margin-bottom 30px
  .article-content
    font-size 16px
    line-height 30px
    margin-bottom 80px
  .article-edit
    font-size 14px
    margin 10px 0
    color #808080
  .article-author-introduction
    width 100%
    height 100px
    margin 20px 0
    .zuozhe
      display block
      font-size 15px
      width 60px
      height 30px
      box-sizing border-box
      border-bottom 3px solid #000
  .article-commitlist
    width 100%
    .pinglunliebiao
      display block
      width 60px
      height 30px
      box-sizing border-box
      border-bottom 3px solid #000
      font-size 15px
    ul
      li
        list-style none 
</style>
