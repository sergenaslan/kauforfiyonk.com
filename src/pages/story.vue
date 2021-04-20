<template>
    <div>
        <button class="prevButton" @click="prevStory" :style="{ left :prevButtonleft+'px'}"> >  </button> 
        <button class="nextButton" @click="nextStory" :style="{ left :nextButtonleft+'px'}"> >  </button> 
        <div class="kapsayıcı">
            <div class="storySlide">
                <div class="item " :class="{active : index == 0 }" style="width: 300px;" v-for="(category , index ) in galleryData" :key="category.category">
                    <p> 
                        <span :style="{ width: (storyWidth / category.image.length)-5+'px'}" :class="{progresActive : index == 0 }" class="progress" v-for="(image , index) in category.image" :key="index">
                        </span>
                    </p>
                    <img :src="image" :class="{storyImageActive : index == 0 }" v-for="(image , index) in category.image" :key="index">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            galleryData : [
            {
                category : 'Gelin', 
                image : [
                    "../src/assets/images/gelin/gelin-1.jpg","../src/assets/images/gelin/gelin-2.jpg",
                    "../src/assets/images/gelin/gelin-3.jpg","../src/assets/images/gelin/gelin-4.jpg",
                    "../src/assets/images/gelin/gelin-5.jpg","../src/assets/images/gelin/gelin-6.jpg",
                ]
            },
            {
                category : 'Ombre', 
                image : [
                    "../src/assets/images/ombre/ombre-1.jpg","../src/assets/images/ombre/ombre-2.jpg",
                    "../src/assets/images/ombre/ombre-3.jpg","../src/assets/images/ombre/ombre-4.jpg",
                    "../src/assets/images/ombre/ombre-5.jpg","../src/assets/images/ombre/ombre-6.jpg",
                    "../src/assets/images/ombre/ombre-7.jpg","../src/assets/images/ombre/ombre-8.jpg",
                    "../src/assets/images/ombre/ombre-9.jpg",
                ]
            },
            {
                category : 'Kesim Modelleri', 
                image : [
                    "../src/assets/images/kesim-model/kesim-model-1.jpg","../src/assets/images/kesim-model/kesim-model-2.jpg",
                    "../src/assets/images/kesim-model/kesim-model-3.jpg","../src/assets/images/kesim-model/kesim-model-4.jpg",
                    "../src/assets/images/kesim-model/kesim-model-5.jpg","../src/assets/images/kesim-model/kesim-model-6.jpg",
                    "../src/assets/images/kesim-model/kesim-model-7.jpg"
                ]
            },
            {
                category : 'Makyaj', 
                image : [
                    "../src/assets/images/makyaj/makyaj-1.jpg","../src/assets/images/makyaj/makyaj-2.png",
                    "../src/assets/images/makyaj/makyaj-3.jpg","../src/assets/images/makyaj/makyaj-4.jpg",
                    "../src/assets/images/makyaj/makyaj-5.jpg","../src/assets/images/makyaj/makyaj-6.png"
                ]
            },
            {
                category : 'Kalıcı Oje', 
                image : [
                    "../src/assets/images/oje/kalici-oje-1.jpg","../src/assets/images/oje/kalici-oje-2.jpg",
                    "../src/assets/images/oje/kalici-oje-3.jpg","../src/assets/images/oje/kalici-oje-4.jpg",
                    "../src/assets/images/oje/kalici-oje-5.jpg","../src/assets/images/oje/kalici-oje-6.jpg",
                ]
            },
            {
                category : 'Sombre',
                image : [
                    "../src/assets/images/sombre/sombre-1.jpg","../src/assets/images/sombre/sombre-2.jpg",
                    "../src/assets/images/sombre/sombre-3.jpg","../src/assets/images/sombre/sombre-4.jpg",
                    "../src/assets/images/sombre/sombre-5.jpg","../src/assets/images/sombre/sombre-6.jpg",
                    "../src/assets/images/sombre/sombre-7.jpg"
                ]
            }
            ],
            prevButtonleft : null,
            nextButtonleft : null,
            storySlide : null,
            storyWidth : null,
            storyLenght : null,
            slipCounter : 0,
            imageOrder : 0
        }
    },
    mounted : function(){
        this.slipCounter =  this.$route.params.id
        setTimeout(() => {
            this.prevButtonleft = document.querySelector('.active').offsetLeft + 15;
            this.nextButtonleft = document.querySelector('.active').offsetLeft + 360;
        }, 10);
        this.storyLenght = document.querySelectorAll('.item');
        let kapsayici = document.querySelector('.kapsayıcı');
        this.storySlide = document.querySelector('.storySlide');
        let progress = document.querySelector('.progress');
        let storyActive = 0;
        let mobileWidth = 576;
        let tabletwidth = 850;
        let paddingSpace = null;
        if(mobileWidth > kapsayici.offsetWidth ){
            this.storyWidth = 80*( kapsayici.offsetWidth /100 );
            paddingSpace = 11;
        }else if(tabletwidth > kapsayici.offsetWidth){
            this.storyWidth = 60*( kapsayici.offsetWidth /100 );
            paddingSpace = 20;
        }else{
            this.storyWidth = 300;
            paddingSpace = 35;
        }
        this.storySlide.style.width = (this.galleryData.length * this.storyWidth ) + (paddingSpace*2)*( kapsayici.offsetWidth /100 ) +"px";
        this.storySlide.style.paddingLeft  = paddingSpace*( kapsayici.offsetWidth /100 ) +"px";
        this.storySlide.style.paddingRight  =paddingSpace*( kapsayici.offsetWidth /100 ) +"px";
         setTimeout(() => {
             if( this.slipCounter > 0 ){
                let storyImage = document.querySelectorAll('.item');
                let progresbar = document.querySelectorAll('.item p');
                for(let i = this.slipCounter; i> -1 ; i--){
                    let storySize = storyImage[i].querySelectorAll('img').length;
                    console.log(storySize);
                    storyImage[i].querySelectorAll('img')[0].classList.remove('storyImageActive');
                    storyImage[i].querySelectorAll('img')[storySize -1].classList.add('storyImageActive');
                    console.log(storyImage[i].querySelectorAll('img')[0]);
                    progresbar[i].childNodes.forEach((image)=>{
                        if(!image.classList.contains('progresActive')){
                            image.classList.add('progresActive')
                        }
                    });
                }
                 this.storyLenght[0].classList.remove('active');
                 this.storyLenght[this.slipCounter].classList.add('active');
                 let slide =  300 * this.slipCounter;
                 this.storySlide.style.transform = "translateX(-" + (slide) + "px)";
             }
        }, 20);
    },
    methods : {
       nextStory : function(){
              if(this.slipCounter < this.storyLenght.length){
                let activeStoryLength = document.querySelectorAll('.active img');
                let progressBarAll = document.querySelectorAll('.active p  span');
                if(this.imageOrder < activeStoryLength.length-1){
                    activeStoryLength[this.imageOrder].classList.remove("storyImageActive");
                    this.imageOrder++;
                    activeStoryLength[this.imageOrder].classList.add("storyImageActive");
                    progressBarAll[this.imageOrder].classList.add("progresActive");
                }else{
                    this.imageOrder = 0;
                    this.slipCounter++
                    if(this.slipCounter < this.storyLenght.length){
                        this.storyLenght[this.slipCounter-1].classList.remove('active');
                        this.storyLenght[this.slipCounter].classList.add('active');
                        let slide =  300 * this.slipCounter;
                        this.storySlide.style.transform = "translateX(-" + (slide) + "px)";
                    }else{
                        this.slipCounter = this.storyLenght.length-1;
                        this.imageOrder =document.querySelectorAll('.active img').length-1;
                    }
                }
            }
       },
       prevStory : function(){
                console.log('sergen');
             if(this.imageOrder > 0){
                 console.log('aslan');
                let activeStoryLength = document.querySelectorAll('.active img');
                let progressBarAll = document.querySelectorAll('.active p  span');
                activeStoryLength[this.imageOrder].classList.remove("storyImageActive");
                progressBarAll[this.imageOrder].classList.remove("progresActive");
                this.imageOrder--;
                activeStoryLength[this.imageOrder].classList.add("storyImageActive");
            }else{
                if(this.slipCounter > 0){
                    this.slipCounter--;
                    if(this.slipCounter < this.storyLenght.length){
                        this.storyLenght[this.slipCounter+1].classList.remove('active');
                        this.storyLenght[this.slipCounter].classList.add('active');
                        this.imageOrder = document.querySelectorAll('.active img').length-1;
                        let slide = 300 * this.slipCounter;
                        this.storySlide.style.transform = "translateX(-" + (slide) + "px)";
                    }
                }
            }
       }
    }
}
</script>
<style scoped>

.kapsayıcı{
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.storySlide{
    position: relative;
    width: 100%;
    height: 100vh;
    background:black;
    overflow: hidden;
    white-space:nowrap;
    padding-top: 10vh;
    transition: transform 700ms ease-in-out;
}
.item{
    position: relative;
    display: inline-block;
    width: 300px;
    height: 450px;
    color: white;
    text-align: center;
    margin:0 -2px;
    transform: scale(.7);
    box-sizing: border-box;
    transition: transform 700ms;
    overflow: hidden;
}
.item p{
    position: absolute;
    top: 0;
    width: 100%;
}
.item p span{
    height: 4px;
    display: inline-block;
    background-color: rgba(255,255,255,.35);
    border-radius: 2px;
    margin:0 2px;
    box-sizing: border-box;
}
.item p .progresActive{
    background-color: white;
}
.item img{
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
}
.item .storyImageActive{
    display: inline-block;
}
.active{
    transform: scale(1);
}
.bgred{
    background-color: red;
}
.bgblue{
    background-color: blue;
}
.nextButton,
.prevButton{
    position: fixed;
    z-index: 99;
    top: 40%;
    padding: 5px 8px;
    cursor: pointer;
    border-radius: 50%;
    color: black;
    font-weight: bold;
    font-size: 16px;
    border: none;
    outline: none;
    background-color:#c7c5c599;
}
.nextButton{
    left: 66%;
}
.prevButton{
    transform: rotate(180deg);
}
@media( max-width : 576px ){
    .nextButton{
        left: 90% !important;
    }
    .storySlide{
        padding-top: 16vh;
    }
}
</style>