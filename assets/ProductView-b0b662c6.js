import{_ as s,o as i,c as n,a as t,t as c,F as u}from"./index-a41702eb.js";const d={data(){return{product:{}}},methods:{getProduct(){const{id:e}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/Jmimiding4104/product/${e}`).then(r=>{this.product=r.data.product}).catch(()=>{alert("異常情況，請重試~")})}},mounted(){this.getProduct()}},l=t("h1",null,"單一產品",-1),p={class:"container"},a=["src"];function h(e,r,_,m,o,g){return i(),n(u,null,[l,t("div",p,[t("img",{src:o.product.imageUrl,class:"card-img-top",alt:"..."},null,8,a),t("div",null,c(o.product.category),1),t("div",null,c(o.product.title),1),t("div",null,c(o.product.description),1),t("div",null,c(o.product.content),1),t("div",null,c(o.product.price)+"元",1)])],64)}const f=s(d,[["render",h]]);export{f as default};