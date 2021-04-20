<template>
    <div class="kap">
        <div class="showRoom">
            <div class="close" @click="closeWindow()">

            </div>
            <div class="row">
                <div class="showCase ">
                    
                </div>
                <div class="sliderItem">

                </div>
            </div>
        </div>
        <div class="container">
        </div>
    </div> 
</template>
<script>
export default {
    data(){
        return{
galleryData : [
   {
      category : 'Gelin', 
      image : [
         "./src/assets/images/gelin/gelin-1.jpg","./src/assets/images/gelin/gelin-2.jpg",
         "./src/assets/images/gelin/gelin-3.jpg","./src/assets/images/gelin/gelin-4.jpg",
         "./src/assets/images/gelin/gelin-5.jpg","./src/assets/images/gelin/gelin-6.jpg",
      ]
   },
   {
      category : 'Ombre', 
      image : [
         "./src/assets/images/ombre/ombre-1.jpg","./src/assets/images/ombre/ombre-2.jpg",
         "./src/assets/images/ombre/ombre-3.jpg","./src/assets/images/ombre/ombre-4.jpg",
         "./src/assets/images/ombre/ombre-5.jpg","./src/assets/images/ombre/ombre-6.jpg",
         "./src/assets/images/ombre/ombre-7.jpg","./src/assets/images/ombre/ombre-8.jpg",
         "./src/assets/images/ombre/ombre-9.jpg",
      ]
   },
   {
      category : 'Kesim Modelleri', 
      image : [
         "./src/assets/images/kesim-model/kesim-model-1.jpg","./src/assets/images/kesim-model/kesim-model-2.jpg",
         "./src/assets/images/kesim-model/kesim-model-3.jpg","./src/assets/images/kesim-model/kesim-model-4.jpg",
         "./src/assets/images/kesim-model/kesim-model-5.jpg","./src/assets/images/kesim-model/kesim-model-6.jpg",
         "./src/assets/images/kesim-model/kesim-model-7.jpg"
      ]
   },
   {
      category : 'Makyaj', 
      image : [
         "./src/assets/images/makyaj/makyaj-1.jpg","./src/assets/images/makyaj/makyaj-2.png",
         "./src/assets/images/makyaj/makyaj-3.jpg","./src/assets/images/makyaj/makyaj-4.jpg",
         "./src/assets/images/makyaj/makyaj-5.jpg","./src/assets/images/makyaj/makyaj-6.png"
      ]
   },
   {
      category : 'Kalıcı Oje', 
      image : [
         "./src/assets/images/oje/kalici-oje-1.jpg","./src/assets/images/oje/kalici-oje-2.jpg",
         "./src/assets/images/oje/kalici-oje-3.jpg","./src/assets/images/oje/kalici-oje-4.jpg",
         "./src/assets/images/oje/kalici-oje-5.jpg","./src/assets/images/oje/kalici-oje-6.jpg",
      ]
   },
   {
      category : 'Sombre',
      image : [
         "./src/assets/images/sombre/sombre-1.jpg","./src/assets/images/sombre/sombre-2.jpg",
         "./src/assets/images/sombre/sombre-3.jpg","./src/assets/images/sombre/sombre-4.jpg",
         "./src/assets/images/sombre/sombre-5.jpg","./src/assets/images/sombre/sombre-6.jpg",
         "./src/assets/images/sombre/sombre-7.jpg"
      ]
   }
],
            totalCategory : null,
            totalImage : null,
            counter : 0,
            resimsayac : -1        
        }
    },
    mounted : function(){
        const callback = ( entries )=>{
        entries.forEach( (entry) =>{
            if(entry.isIntersecting){
                entry.target.style.setProperty('--i',this.counter);
                entry.target.classList.add('active');
                this.counter++;
            }
        });
        }
        const option = {
        rootMargin : "100px"
        }


        const observer = new IntersectionObserver(callback,option);

        let showRoom = document.querySelector('.showRoom');
        let showCase = document.querySelector('.showCase');


        let container = document.querySelector('.container');
        let dataSet = container.attributes[0].name;
        this.totalCategory = this.galleryData.length;
        for(let i= 0; i < this.galleryData.length; i++){
                this.totalImage += this.galleryData[i].image.length;
                    if(i == this.galleryData.length-1) {
                for(let ctgry= 0; ctgry <= this.totalImage;){
                        this.resimsayac++ 
                        for(let b= 0; b <= this.totalCategory-1; b++){
                        if(this.resimsayac <= this.galleryData[b].image.length){
                            if(this.resimsayac == this.galleryData[b].image.length){
                                let div = document.createElement("div");
                                div.className = "imageItem";
                                div.setAttribute(dataSet, "");
                                let span = document.createElement("span");
                                span.className = "category";
                                span.setAttribute(dataSet, "");
                                span.innerText = this.galleryData[b].category;
                                div.appendChild(span);
                                let img = document.createElement("img");
                                img.setAttribute(dataSet, "");
                                let  category = b;
                                div.appendChild(img);
                                div.addEventListener('click',function(){   
                                    console.log('sergen aslan');
                                });
                                img.src = this.galleryData[b].image[this.resimsayac-1];
                                
                                observer.observe(div);
                                container.appendChild(div);
                                ctgry++;
                            }else{
                                let div = document.createElement("div");
                                div.setAttribute(dataSet, "");
                                div.className = "imageItem";
                                let span = document.createElement("span");
                                span.setAttribute(dataSet, "");
                                span.className = "category";
                                span.innerText = this.galleryData[b].category;
                                div.appendChild(span);
                                let img = document.createElement("img");
                                img.setAttribute(dataSet, "");
                                let  category = b;
                                div.appendChild(img);
                                div.addEventListener('click',function(e){   
                                    console.log(category);
                                        let translateX = (container.offsetWidth - e.target.offsetWidth) / 2 ;
                                        e.path[1].classList.add('ImageActive');
                                        e.path[1].style.width = e.target.clientWidth +"px";
                                        e.path[1].style.height = e.target.clientHeight +"px";
                                        setTimeout(function(){
                                            showRoom.classList.add('showRoomActive');
                                            showCase.appendChild(e.path[1]);
                                            e.path[1].style.removeProperty('transform');
                                            e.path[1].style.width = e.target.clientWidth +"px";
                                            e.path[1].classList.add("closeImage");
                                            e.path[1].removeAttribute("style");
                                            setTimeout(function(){
                                            e.path[1].classList.add("openImage");
                                            galery (category)
                                            },970)
                                        },710)
                                        let slipImage =e.path[1].getBoundingClientRect().y- Math.ceil((e.view.innerHeight / 100) *5 );
                                        if(e.path[1].offsetLeft == 0){
                                            if( slipImage < 0  ){
                                                e.path[1].style.transform  = "translateX("+ translateX +"px)";
                                            }else{
                                                e.path[1].style.transform  = "translate("+ translateX +"px,-"+slipImage+"px)";
                                            }     
                                        }else if ( e.path[1].offsetLeft == Math.ceil((container.offsetWidth / 3))){
                                            console.log('buraya girmedi ')
                                            e.path[1].style.transform  = "translateY(-"+slipImage +"px)"; 
                                        }else{
                                            if( slipImage < 0  ){
                                                e.path[1].style.transform  = "translateX(-"+ translateX +"px)";
                                            }else{
                                                e.path[1].style.transform  = "translate(-"+ translateX +"px,-"+slipImage+"px)";
                                            }   
                                        }
                                });
                                img.src = this.galleryData[b].image[this.resimsayac];
                                
                                observer.observe(div);
                                container.appendChild(div);
                                ctgry++;
                            }
                        }
                        }
                }
            }
        }
        let sliderItem = document.querySelector(".sliderItem");
        let gallery = this.galleryData;
        function galery (category){
            let b = gallery[category].image;
            gallery[category].image.forEach((image)=>{
                let img = document.createElement("img");
                img.className= "galleryItem";
                img.setAttribute(dataSet, "");
                img.src = image;
                img.addEventListener('click',function(){
                    galeryChange(image)
                });
                sliderItem.appendChild(img);
        });
        function galeryChange(image){
        let activeImage = document.querySelector(".showCase .imageItem");
            activeImage.classList.remove("closeImage");
            activeImage.classList.add("galeryItemclose");
            activeImage.classList.remove("openImage");
            activeImage.style.transitionDelay = "0s";
            setTimeout(function(){
                activeImage.children[1].src = image;
                activeImage.classList.add("openImage");
            },800);
        }

   
}
    },
    methods :{
        closeWindow :  function(){
            location.reload();
        }
    }
}
</script>
<style scoped>
.close{
    position: absolute;
    z-index: 100;
    top: 15px;
    right: 10%;
    width: 30px;
    height: 30px;
    background-image: url('../assets/images/closeButton.png');
    background-repeat: no-repeat;
    background-size: contain;
}
.deneme{
    height: 100px;
}
.renk{
    color:red   ;
}
.kap{
    position: relative;
}
.container{ 
    display: grid;
    grid-template-columns: repeat(3,33.333%);
    grid-auto-rows : 300px;
    position: relative;
    z-index: 1;
}


.container .imageItem:nth-child(3){
    grid-row: 1 / 3;
    grid-column: 3 / 5;
 }
 .container .imageItem:nth-child(4){
    grid-column:  1 / 3;
 }
 .container .imageItem:nth-child(5){
    grid-row: 3 / 5;
    grid-column: 1 /3;
 }
.container .imageItem:nth-child(13){
    grid-row: 4 / 6;
    grid-column: 3 /5;
}
.container .imageItem:nth-child(14){
    grid-row: 5 / 6;
    grid-column: 1 /3;
 }
 .container .imageItem:nth-child(18){
    grid-row: 6/ 7;
    grid-column: 3 /5;
 }
 
 .container .imageItem{
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: scale(.5);
    transition: all 500ms ease-in-out;
    overflow: hidden;
}
.category{
    position:absolute;
    width: 140px;
    height: 20px;
    font-weight: bold;
    text-align: center;
    top: 25px;
    left: -29px;
    z-index: 99;
    color: white;
    letter-spacing: 4px;
    background-color: rgba(0, 0, 0, 0.522);
    transform: rotate( -45deg);
}
.container .imageItem img{
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.container .active{
    opacity: 1;
    transition: all 500ms ease-in-out;
    transform: scale(1);
    transition-delay: calc( .1s * var(--i) );
}

/* showroomm style settings */
.showRoom{
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 100vh;
    display: none;
   /*  background-color: rgb(26, 0, 51); */
}
.showRoom::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: black;
    animation: example 1s ease;
  }
@keyframes example {
    from {
        position: absolute;
        top: -100%;
    }
    to {
        position: absolute;
        top: 0;
  }
}
.showRoomActive {
    display: flex;
    top: 0vh;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    transition: all .5s ease;
}
.showCase .imageItem img{
    width: 100%;
} 
.showCase .closeImage{
    transition: all .5s ease-in-out;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)
}
.showCase .galeryItemclose{
    transition: all .5s ease;
    width: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)
}
.showCase .openImage{
    position: absolute;
    top: 0px;
    object-fit: fill;
    width: 100%;
    transition: all .5s ease;
    transition-delay: 800ms;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.sliderItem .galleryItem{
    width: 100px;
    height: auto;
    margin: 0 5px;
}
.ImageActive{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: block;
    z-index: 99;
    transition: all .7s ease !important;
}


@media (max-width: 425px) { 
    body{
        background-color: black;
        position: relative;
    }

 }

 @media (max-width: 800px) { 
    .row{
        position: relative;
        height: 100vh;      
    }

    .showCase{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 70vh;
        overflow: hidden;
    }
    .showRoomActive{
        display: inline-block;
 
    }
    .sliderItem{
        position: absolute;
        bottom: 5px;
        max-width: 100%; 
        display: inline-block;
        overflow-y: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        transition: all .5s ease-in-out;
        scrollbar-width: none; 
        -ms-overflow-style: none;
        scrollbar-width: 0;
    }
    .sliderItem::-webkit-scrollbar {
        width: 0px;
    }
    .sliderItem .galleryItem{
        width: 100px;
        height: auto;
        margin: 0 5px;
    }
 }

@media (min-width: 801px) { 
    .container{
        margin:0 auto;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        height: 100vh;
    }
    .showCase{
        position: relative;
        top: 5vh;
        width: 550px;
        height: 90vh;
        transition: all .5s ease;
        overflow: hidden;
    }
    .showRoomActive{
        display: flex;
        top: 0vh;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        transition: all .5s ease;
    }
    .sliderItem{
        position: relative;
        top: 15vh;
        left: 20px;
        max-width: 130px;
        height: 70vh;
        display: inline-block;
        overflow: scroll;
        -ms-overflow-style: none;
        overflow-x: hidden;
        scrollbar-width: none;
        transition: all .5s ease-in-out;
    }
    .sliderItem::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #bdbdbdb6; 
      }
      .sliderItem::-webkit-scrollbar-thumb {
        background: #f7da98; 
        border-radius: 10px;
      }
      .sliderItem::-webkit-scrollbar-thumb:hover {
        background: #b5a684; 
      }
    .sliderItem .galleryItem{
        width: 100px;
        height: auto;
        margin: 0 5px;
    }
}



@media (min-width: 1100px) { 
    .container{
        margin:0 auto;
        width: 1100px;
    }
}




@media(max-width: 850px){ 
    .close{
        width: 20px;
        height: 20px;
    }
}
@media(max-width: 576px){

    .container {
        grid-auto-rows: 170px;
    }
}


</style>