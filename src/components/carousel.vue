<template>
  <div class="carousel_swipe">
    <!--    轮播区域-->
    <div class="swipe_list">
      <li v-for="(item, index) in urls" :key="index" class="list_item">
        <a :href="item.u">
          <img :src="item.i" v-show="index === currentIndex" />
        </a>
      </li>
      <!--    左右箭头-->
      <i class="el-icon-caret-left prev" @click="photoPrev()"></i>
      <i class="el-icon-caret-right next" @click="photoNext()"></i>
    </div>
    <!--    圆点-->
    <div class="point">
      <span
        v-for="(item, index) in urls"
        :class="{ isShow: index === currentIndex }"
        :key="index"
        @click="changePhoto(index)"
      ></span>
    </div>
    <!--    底部文字-->
    <div class="bottomText">
      <p v-for="(item, index) in urls"
         v-show="index === currentIndex"
         :key="index">{{item.n}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: ["urls"],
  created() {
    this.photoRun();
  },
  methods: {
    //点击圆点
    changePhoto(index) {
      clearInterval(this.num);
      this.currentIndex = index;
      this.photoRun();
      console.log(this.currentIndex + ' ' + index);
    },
    //上一张图片
    photoPrev() {
      if (this.currentIndex === 0) {
        this.index = this.urls.length - 1;
        this.currentIndex = this.urls.length - 1;
      } else {
        this.index--;
        this.currentIndex--;
      }
    },
    //下一张图片
    photoNext() {
      if (this.currentIndex === this.urls.length - 1) {
        this.index = 0;
        this.currentIndex = 0;
      } else {
        this.index++;
        this.currentIndex++;
        // console.log(this.currentIndex+'index:'+this.index);
      }
    },

    //自动播放
    photoRun() {
      let interval = setInterval(() => {
        this.photoNext();
      }, 4000);
      this.num = interval;
    },

  },
  data() {
    return {
      // images: [
      //   "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c08ad2232df662afec466fdb296bfea2.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
      //   "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ebff5f5c1f52f2dbdd611897adbefd4.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
      //   "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ef4160c861b998239bce9adb82341e7.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
      // ],
      images: [],
      currentIndex: 0,
      index: 0,
      isShow: false,
      num : ''
    };
  }
};
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }

  .carousel_swipe {
    position: relative;
  }

  .swipe_list {
    z-index: 99;
    position: relative;
  }

  .swipe_list li {
    list-style: none;
  }

  .swipe_list li img {
    width: 100%;
    height: 45vh;
    z-index: 99;
  }

  .prev,
  .next{
    position: absolute;
    top: 180px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #190f0b;
    color: white;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .point {
    position: absolute;
    bottom: 20px;
    right: 1px;
    padding: 0 5px;
    z-index: 99;
    cursor: pointer;
  }

  .point span{
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #42b983;
    z-index: 99;
    margin: 0 10px;
  }
  .point .isShow {
    background-color: aliceblue;
  }

  .bottomText {
    position: absolute;
    bottom: 0;
    z-index: 100;
    width: 80%;
    height: 70px;
    line-height: 40px;
    border-radius: 15px 15px 15px 0;
    background-color: rgba(255,255,255,0.3);
  }

  .bottomText p {
    text-align: left;
    margin-left: 30px;
    color: antiquewhite;
  }

</style>
