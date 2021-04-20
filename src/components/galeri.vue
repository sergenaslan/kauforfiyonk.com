<template>
    <div class="fiyonkGallery">
        <h2>Fiyonk Galeri</h2>
        <div class="gallery mTop-40">
            <div class="galleryContent" @mousedown="mousedownStory" @mousemove="mousemoveStory"  @mouseleave="mouseleaveStory" @mouseup="mouseleaveStory">
                <div class="galleryImage"  v-for="galery in galleryData" :key="galery.image">
                    <img :src="galery.image">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             galleryData : [
                { category : 'Gelin', image : './src/./assets/images/gelin/gelin-2.jpg'},
                { category : 'Ombre', image : './src/./assets/images/ombre/ombre-2.jpg'},
                { category : 'Makyaj', image : './src/./assets/images/makyaj/makyaj-2.png'},
                { category : 'Sombre', image : './src/./assets/images/sombre/sombre-2.jpg'},
                { category : 'Kalıcı Oje', image : './src/./assets/images/oje/kalici-oje-2.jpg'},
                { category : 'Sombre', image : './src/./assets/images/sombre/sombre-3.jpg'},
                { category : 'Kesim', image : './src/./assets/images/kesim-model/kesim-model-2.jpg'}

            ],
             galleryisDown : false,
            gallerystartX : null,
            teamscrollLeft : null,
            galleryRow : null,
            classControl : false
        }
    },
    methods : {
        mousedownStory: function(e){
        this.storyisDown = true;
        console.log(e)
        console.log(e.path[2])
        this.storyRow = e.path[2];
        if(!this.classControl){
            this.storyRow.classList.add('grabbingActive');
            this.classControl = true;
        }
        this.storystartX = e.pageX - this.storyRow.offsetLeft;
        this.teamscrollLeft = this.storyRow.scrollLeft;
        
        },
        mouseleaveStory : function(e){
            this.storyisDown = false;
             if(this.classControl){
                 this.storyRow.classList.remove('grabbingActive');
                 this.classControl = false;
            }
        },
        mousemoveStory : function(e){
            if(! this.storyisDown) return;
            e.preventDefault();
            let x =  e.pageX - this.storyRow.offsetLeft;
            let walk = x - this.storystartX;
            this.storyRow.scrollLeft = this.teamscrollLeft - walk;
        }

    }
}
</script>
<style scoped>
.grabbingActive{
    cursor: -webkit-grabbing !important;
}
.fiyonkGallery{
    display: flex;
    flex-wrap: wrap;
    margin-top: 130px;
}
.fiyonkGallery h2{
    font-family: 'Kalam', cursive;
    font-size: 60px;
    margin-bottom: 25px;
    width: 100%;
    text-align: center;
    color:white;
}
.fiyonkGallery .gallery{
    width: 100%;
}
.fiyonkGallery .gallery .galleryContent{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    cursor: -webkit-grab;
}

.galleryContent::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}

.galleryContent .galleryImage{
    min-width: 350px;
    height: 350px;
    overflow: hidden;
    margin:0 15px;
    border-radius:0 30px 0 30px;
}
.galleryContent .galleryImage img{
    width: 100%;
    height: 100%;
}
@media(max-width: 1200px){ 
    .galleryContent .galleryImage{
        min-width: 280px;
        height: 280px;
    }
}
@media(max-width: 850px){ 
    .fiyonkGallery{
        margin-top: 80px;
    }
    .fiyonkGallery h2{
        font-size: 45px;
        margin-bottom: 15px;
    }
}
@media(max-width: 576px){  
    .fiyonkGallery{
        margin-top: 40px;
    }
    .fiyonkGallery h2{
        font-size: 40px;
        margin-bottom: 15px;
    }
    .galleryContent .galleryImage{
        min-width: 225px;
        height: 225px;
    }
}
</style>