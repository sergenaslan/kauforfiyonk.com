<template>
    <div class="menuContent">
        <img  class="menuIcon" @click="menuActive" src="../assets/images/menu.png" alt="">
        <div class="menuRow" :class="{ menuRowActive : menuRowActive }">
            <div class="menuLink">
                <ul>
                    <li v-for="(menuItem, id) in menu" :key="id" @mousemove="imageMove(id, $event)" @mouseout="imageOut(id, $event)">
                        <a @click="pageChange(id, $event)" @mouseover="cursorOver" @mouseout="cursorOut"> {{ menuItem.menuName }} </a>
                    </li>
                    <div class="cursor"></div>
                </ul> 
            </div>
            <div class="menuImage">
                <div class="image" v-for="img in menu" :key="img.menuPath">
                    <img :src="img.image" alt="">
                </div>
            </div>
        </div>
        <div :class="{ animationActive : animationActive }" class="routerAnimation"   >
            <div class="AnimationSlide"  :class="{ slideDown : slideDown }">
                <div class="slideWidth" style="--i:0">
                    <div :style="{ 'background-image': 'url(' + routeAnimationImage + ')' }">
                        <div class="slideImega"  :style="{ 'transform': 'translateY(-' + animationImagePosition + 'px)' }"></div>
                    </div>
                </div>
                <div class="slideWidth" style="--i:1">
                    <div :style="{ 'background-image': 'url(' + routeAnimationImage + ')' }">
                        <div class="slideImega"  :style="{ 'transform': 'translateY(-' + animationImagePosition + 'px)' }"></div>
                    </div>
                </div>
                <div class="slideWidth" style="--i:2">
                    <div :style="{ 'background-image': 'url(' + routeAnimationImage + ')' }">
                        <div class="slideImega"  :style="{ 'transform': 'translateY(-' + animationImagePosition + 'px)' }"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            menu : [
                { menuPath : '/' , menuName : 'Ana Sayfa',image:"../src/assets/images/menu/image-1.png" },
                { menuPath : '/ekip' , menuName : 'Ekibimiz',image:"../src/assets/images/menu/image-2.png"},
                { menuPath : '/galeri' , menuName : 'Galeri',image:"../src/assets/images/menu/image-3.png" },
                { menuPath : '/iletisim' , menuName : 'İletişim',image:"../src/assets/images/menu/image-4.png" },
                { menuPath : '/randevu' , menuName : 'Randevu',image:"../src/assets/images/menu/image-5.png"},
                { menuPath : '/codex7' , menuName : 'CodeX7', image:"../src/assets/images/menu/image-5.png"}
            ],
            animationActive : false,
            menuRowActive : false,
            routeAnimationImage: null,
            slideDown : null,
            animationImagePosition: null,
            
        }
    },
    mounted:(e)=>{
        let cursorPoint = document.querySelector('.cursor');
        document.addEventListener('mousemove',function(e){
            cursorPoint.style.left = (e.pageX - 12 ) + 'px';
            cursorPoint.style.top =  (e.pageY - 12 ) + 'px';
        });
    },
    methods : {
        pageChange : function(id,event){
            console.log(id);
            this.menuRowActive = false;
            /* this.animationActive = true; */
            let yol = this.menu[id].menuPath;
            this.$router.push(yol);
            /* let  node = document.querySelector('body');
            let konum = document.querySelector('.routerAnimation');
            let images = document.querySelectorAll('.slideImega img');
            let yol = this.menu[id].menuPath;
            let that = this;
            domtoimage.toPng(node)
                .then(function (dataUrl) {
                    that.animationImagePosition = event.view.scrollY;
                    that.routeAnimationImage = dataUrl;
                    let trigger = setInterval(function(){
                        if(that.routeAnimationImage !==null){
                            clearInterval(trigger);
                            that.$router.push(yol);
                            setTimeout(function(){
                                that.slideDown = true;  
                            },1000);
                            setTimeout(function(){
                                that.routeAnimationImage = null;
                                that.animationActive = false;
                                that.slideDown = false;
                            },4000)
                        }
                    },500);
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                }); */
            },
        cursorOver : function (e){
            let cursorPoint = document.querySelector('.cursor');
             cursorPoint.classList.add('cursorActive');
        },
        cursorOut : function (e){
            let cursorPoint = document.querySelector('.cursor');
             cursorPoint.classList.remove('cursorActive');
        },
        imageMove : function draw(id, event){
            let menuImage = document.querySelectorAll('.image');
            let cc = event.target.getBoundingClientRect().y;
             menuImage[id].classList.add('imageActive');
             menuImage[id].style.opacity = 1;
            let bb = event.clientY - cc;
           menuImage[id].style.transform = `translate(${event.clientX - 300}px, -${bb *2}px) rotate( ${event.clientX / 50}deg )`;
           
        },
        imageOut : function (id, event){
            let menuImage = document.querySelectorAll('.image');
             menuImage[id].classList.remove('imageActive');
            menuImage[id].style.opacity = 0;
            menuImage[id].style.transform = `translate(${-event.clientX}px, 600px`;
        },
        menuActive : function(){
            this.menuRowActive = !this.menuRowActive;
        }
    }
}
</script>
<style scoped>

.routerAnimation{
    display: none;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
}
.AnimationSlide{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template: repeat( 1, 1fr ) / repeat( 3, 1fr );
}
.slideWidth{
    transition: transform 1s cubic-bezier(0.63, 0.01, 0.07, 0.99), 1s linear;
    transition-delay: calc( 0.s * var(--i) );
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    transform: translateY(0);
}
.slideDown .slideWidth{
    transform: translateY(100%);

}
.slideImega{
    background-image: inherit;  
    position: absolute;
    height: 2000px;
    overflow: hidden;
    width: calc(100% * 3);
    left: calc(-100% * var(--i));
    border:2px yellow red;
}
.animationActive{
    display: inline-block;
}
.menuContent{
    position: relative;
}
.menuIcon{
    position: fixed;
    top: 40px;
    left: 55px;
    z-index: 99;
    width: 40px;
    height: 40px;
}

.menuRow{
    position: fixed;
    top: 0;
    z-index: 80;
    display: none;
    background-color: black;
    min-height: 100vh;
    width: 100%;
    padding-top: 10vh;
    box-sizing: border-box;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
}
.menuRowActive{
    display: flex;
}
.menuLink{
    width: 40%;
}
ul{
    position: relative;
    z-index: 99;
    display: flex;
    flex-direction: column;
}

ul li{
    list-style-type: none;
    text-align: center;
}
ul li a{
    position: relative;
    display: inline-block;
    margin:10px 0;
    font-size: 35px;
    color:white;
    transition: .2s;
}
.cursor{
    position: fixed;
    top: -50px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: transform  300ms ease;
    pointer-events: none;
    mix-blend-mode: difference;
}
.cursorActive{
    transform: scale(2);
}
.menuImage{
    position: relative;
    width: 40%;
}
.image{
    position: absolute;
    top: 160px;
    left: 200px;
    width: 300px;
    height: 200px;
    opacity: 1;
    transition: all 200ms ease;
    will-change: left, top; 
    transform: translate(-600px, 500px); 
}
.imageActive{
    transition: all 0s ease;
}
.menuImage .image img{
    position: relative;
    width: 100%;
    object-fit: cover;
}
h1{
     color:white;
 }
ul{
    list-style-type: none;
}
ul li {
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
}
 ul li a {
    text-decoration: none;
} 
.activeMenu{
    color:red;
    border:1px soli #ccc;
}
@media(max-width: 850px){
    .cursor{
        display: none !important;
    }
    .menuLink{
        width: 100%;
        border:1px solid red;
    }
    .menuImage{
        display: none;
    }
 }
</style>