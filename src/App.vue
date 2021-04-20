<template>
<div class="fluid">
    <app-menu> </app-menu>
    <router-view></router-view>
 <app-footer></app-footer>
</div>
</template>

<script>

  import menu from "./components/menu";
  import footer from "./components/footer";


export default {
  components : {
    appMenu: menu,
    appFooter: footer

    
  }
}
</script>
<style>
.fluid{
  max-width: 1600px;
  margin:0 auto;
  padding:0 5%;
}
h1{
  text-align: center;
}
@media(max-width: 992px){ 

}
@media(max-width: 768px){ 

} 
@media(max-width: 576px){  
 .fluid{
   padding:0 5%;
   box-sizing : border-box;
 }
}
</style>