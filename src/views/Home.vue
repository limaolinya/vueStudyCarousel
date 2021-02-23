<template>
  <div class="home">
<!--    //carousel为子组件-->
    <carousel :urls="url"></carousel>
  </div>
</template>

<script>
import {getUrl} from "@/api/get.js"//得到get.js中的getUrl方法
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      url: [],//父组件数据
    }
  },
  created() {
    this.Url()//在页面加载时，获取轮播图所需要的
  },
  methods: {
    //得到轮播图数据
    Url() {
      getUrl().then(infoUrl => {
        console.log(infoUrl.data.data.d)
        this.url = infoUrl.data.data.d;
      })
    }
  }
};
</script>
