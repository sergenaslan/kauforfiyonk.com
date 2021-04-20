<template>
    <div class="anasayfa">
        <app-story></app-story>
        <app-slider></app-slider>
        <app-brand></app-brand>
        <app-code></app-code> 
        <app-slogan></app-slogan>
        <app-galeri></app-galeri>
        <app-makale number="1"></app-makale>
        <app-salon></app-salon>
        <app-makale number="2"></app-makale> 
        <app-ekip></app-ekip> 
        <app-makale number="0"></app-makale> 
        <app-randevu></app-randevu>
        
    </div>
</template>
<script>
  import story from "../components/story";
  import ekip from "../components/ekip";
  import galeri from "../components/galeri";
  import slider from "../components/slider";
  import brand from "../components/brand";
  import slogan from "../components/slogan";
  import makale from "../components/makale";
  import code from "../components/codex7";
  import randevu from "../components/randevu";
  import salon from "../components/salon";
export default {
    components : {
        appStory : story,
        appGaleri : galeri,
        appSlider : slider,
        appBrand : brand,
        appCode : code,
        appSlogan : slogan,
        appMakale : makale,
        appSalon : salon,
        appRandevu : randevu,
        appEkip : ekip
  }
}
</script>
<style scoped>
</style>