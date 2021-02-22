<template>
  <div class="home">
    <carousel :urls="url"></carousel>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {getUrl} from "@/api/get.js"
// import carousel1 from "@/components/carousel.vue";

export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      url: [],
      image: []
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
