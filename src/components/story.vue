<template>
    <div class="storyContent">
        <div class="leftIconStory" @click="scrollStoryLeft" :class="{ displayNone :  !showLeftButton}"></div>
        <div class="rightIconStory" @click="scrollStoryRight" :class="{ displayNone :  !storyScroll}"></div>
         <div class="storyRow" @mousedown="mousedownStory" @mousemove="mousemoveStory"  @mouseleave="mouseleaveStory" @mouseup="mouseleaveStory">
            <div class="story"  v-for="(story , index ) in stories" :key="story.image"  @click="sedtoStory(index)">
                <img class="imgRespon" :src="story.image" alt="">
                <span>{{ story.category }} </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            stories : [
                { category : 'Gelin', image : './src/assets/images/gelin/gelin-1.jpg'},
                { category : 'Ombre', image : './src/assets/images/ombre/ombre-1.jpg'},
                { category : 'Kesim', image : './src/assets/images/kesim-model/kesim-model-1.jpg'},
                { category : 'Makyaj', image : './src/assets/images/makyaj/makyaj-1.jpg'},
                { category : 'Oje',    image : './src/assets/images/oje/kalici-oje-1.jpg'},
                { category : 'Sombre', image : './src/assets/images/sombre/sombre-1.jpg'}
            ],
            storyisDown : false,
            storystartX : null,
            teamscrollLeft : null,
            storyRow : null,
            classControl : false,
            counter : 1,
            oldLeftScroll : null,
            newLeftScroll : null,
            storyScroll : true,
            showLeftButton : false,
            walk : null
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
        },
        destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    },
    methods : {
        mousedownStory: function(e){
        this.storyisDown = true;
        this.storyRow = e.path[0];
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
            console.log('sergen rahmanlar');
            let walk = x - this.storystartX;
            this.storyRow.scrollLeft = this.teamscrollLeft - walk;
        },
        sedtoStory : function(index){
            this.$router.push("/story/"+index);
        },
        scrollStoryLeft: function(e){
            console.log(e.path[1].children[2].scrollLeft);
            if( 0 < e.path[1].children[2].scrollLeft){
                console.log('sergen aslan');
               console.log('counter'+this.counter);
                this.counter--;
                this.walk = this.counter * 100;
                console.log('walk'+this.walk);
                this.storyRow.scrollLeft = this.storyRow.scrollLeft - this.walk;
                console.log('scroolLeft'+this.storyRow.scrollLeft);
               /*  if(this.storyRow.scrollLeft <= 0 ){
                    this.showLeftButton = false
                } */
                this.storyScroll = true;
            }else{
                this.counter = 1;
            }
          },
        scrollStoryRight: function(e){
            if(this.storyScroll){
                console.log('şaosıdhf')
                this.showLeftButton = true;
                this.counter++;
                this.oldLeftScroll = e.path[1].children[2].scrollLeft;
                this.walk = this.counter * 100;
                console.log('walk'+this.walk);
                console.log('counter'+this.counter);
                this.storyRow = e.path[1].children[2];
                this.storyRow.scrollLeft = this.storyRow.scrollLeft + this.walk;
                this.newLeftScroll = e.path[1].children[2].scrollLeft;
                console.log(this.oldLeftScroll);
                console.log(this.newLeftScroll);
                if(this.oldLeftScroll < this.newLeftScroll){}else{
                    this.storyScroll = false;
                        this.counter--;
                }
            }        
        },
        myEventHandler(e) {
           console.log('sergen aslan');
        }
    }
} 

</script>
<style>
.displayNone{
    display: none !important;
}
.storyContent{
/*     border:2px dashed blue; */
    position: relative;
    box-sizing: border-box;
    margin-left: 10%;
    width: 90%;
}
.imgRespon{
    width: 100%;
}
.grabbingActive{
    cursor: -webkit-grabbing !important;
}
.storyRow{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    cursor: -webkit-grab;
    margin-top: 0;
    position: relative;
    justify-content: center;
    justify-content: left;

}
.story{
    display: inline-block;
    min-width: 150px;
    max-width: 150px;
    height: 201px;
    padding-top: 10px;
    margin: 0px 27px;
}
.story img{
    border-radius: 50%;
    height: 130px;
    border: 3px solid rgb(228, 81, 12);
    cursor: pointer;
}
.story span{
    color:var(--textColor);
    font-family: 'Kalam', cursive;
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 28px;
    letter-spacing: 2px;
}

.storyRow::-webkit-scrollbar {
    width: 0px;
    height: 0;
}
 .leftIconStory,
 .rightIconStory{
    position: absolute;
    cursor: pointer;
    top: 40%;
    width: 35px;
    height: 35px;
    background-image: url("../assets/images/left_right_Icon.png");
    background-color: rgba(0, 0, 0, 0.557);
    border-radius: 50%;
    z-index: 2;
    display: none;
}
.leftIconStory{
    left: 5%;
    background-position: 4px center;
}
.rightIconStory{
    right: 5%;
    background-position: -24px center;
}
@media(max-width: 1200px){ 
   /* .storyRow{
         border:1px solid red; 
    }*/
}
@media(max-width: 992px){ 
        .story{
        display: inline-block;
        min-width: 120px;
        height: 100px;
        margin:0 12px;
    }
    .story img{
        border-radius: 50%;
        height: 50px;
        border: 3px solid rgb(228, 81, 12);
        cursor: pointer;
    }
    .story span{
        font-size: 14px;
    }
        .story{
        display: inline-block;
        min-width: 100px;
        height: 140px;
        margin:0 12px;
    }
    .story img{
        border-radius: 50%;
        height: 100px;
        border: 3px solid rgb(228, 81, 12);
        cursor: pointer;
    }
    .story span{
        font-size: 14px;
    }
}
@media(max-width: 768px){ 
 .story{
        display: inline-block;
        min-width: 100px;
        height: 140px;
        margin:0 12px;
    }
    .story img{
        border-radius: 50%;
        height: 100px;
        border: 3px solid rgb(228, 81, 12);
        cursor: pointer;
    }
    .story span{
        font-size: 14px;
    }

} 
@media(max-width: 576px){  

 .story{
        display: inline-block;
        min-width: 100px;
        height: 140px;
        margin:0 12px;

    }
    .story img{
        border-radius: 50%;
        height: 100px;
        border: 3px solid rgb(228, 81, 12);
        cursor: pointer;
    }
    .story span{
        font-size: 14px;
    }
}
</style>