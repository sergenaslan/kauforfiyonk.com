<template>
    <div class="sliderRow">
        <div class="imgSlider">
            <img src="../assets/images/slider/slide-1.jpg">
            <span class="oneWord">FİYONK TİPİ </span>
            <span class="twoWord">SARIŞINLIK</span>
            
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.sliderRow{
    display: flex;
    flex-wrap: wrap;
    margin-top:80px;
    color:white;
}
.imgSlider{
    width: 100%;
    position: relative;
}
.imgSlider img{
    width: 100%;
}
.imgSlider .oneWord{
    position: absolute;
    top: 25%;
    right: 8%;
    font-size: 85px;
    font-family: 'Kalam', cursive;
}
.imgSlider .twoWord{
    position: absolute;
    top: 50%;
    right: 8%;
    font-size: 85px;
    font-family: 'Kalam', cursive;
}
@media(max-width: 992px){ 
    .sliderRow{
        margin-top: 20px;
    }
    .imgSlider .oneWord{
        position: absolute;
        top: 25%;
        right: 8%;
        font-size: 60px;
    }
    .imgSlider .twoWord{
        position: absolute;
        top: 50%;
        right: 8%;
        font-size: 60px;
    }

}
@media(max-width: 768px){ 
    .sliderRow{
        margin-top: 40px;
    }
} 
@media(max-width: 576px){  
    .imgSlider img{
        height:175px;
    }
    .sliderRow{
        margin-top: 40px;
    }
    .imgSlider .oneWord{
        position: absolute;
        top: 25%;
        right: 8%;
        font-size: 30px;
    }
    .imgSlider .twoWord{
        position: absolute;
        top: 50%;
        right: 8%;
        font-size: 30px;
    }
}
</style>