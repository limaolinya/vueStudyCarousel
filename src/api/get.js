import axios from "axios";

//向后端请求轮播图数据
export function getUrl() {
  return axios.get("http://192.168.0.198:1112/index/selectIndexMain.json");
}
