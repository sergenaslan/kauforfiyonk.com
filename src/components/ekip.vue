<template>
    <div class="teamContent">
        <h2>fiyonk Ekibi</h2>
        <div class="fiyonkTeam" @mousedown="mousedownStory" @mousemove="mousemoveStory"  @mouseleave="mouseleaveStory" @mouseup="mouseleaveStory">
             <div class="person" v-for="person in ekip" :key="person.name">
                <img :src="person.image" alt="">
                <div class="personName">
                    <p> {{person.name}} </p>
                    <span> {{person.expertise }} </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             ekip : [
                { name : 'Kemal Yavaş', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/kemal.jpg'},
                { name : 'Bahar Aşkın', expertise:"Makyöz", image : './src/./assets/images/ekip/bahar.jpg'},
                { name : 'Ümir Aygün ', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/umit.jpg'},
                { name : 'Raziye Yavaş ', expertise:"Makyöz", image : './src/./assets/images/ekip/raziye.jpg'},
                { name : 'Mehmet Atakan ', expertise:"Renklendirme Uzmanı ", image : './src/./assets/images/ekip/atakan.jpg'},
                { name : 'Poyraz Gülhan', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/poyraz_gulhan.jpg'},
                { name : 'Münevver Diriker', expertise:"Makyöz", image : './src/./assets/images/ekip/munevverDiriker.PNG'},
                { name : 'İsmet Can', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/ismetcan.PNG'},
                { name : 'Mehmet Şınav', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/mehmetsınav.jpg'},
                { name : 'Hamyar Salahzade', expertise:"Renklendirme Uzmanı", image : './src/./assets/images/ekip/hamyar_salahzade.jpg'},
            ],
            ekipisDown : false,
            ekipstartX : null,
            teamscrollLeft : null,
            ekipRow : null,
            classControl : false
        }
    },
    methods : {
        mousedownStory: function(e){
        this.storyisDown = true;
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
:root{
    --textColor: white;
    --titlefont : 'Kalam', cursive;
    --textfont : 'Roboto', sans-serif;
}
.teamContent{
    margin-top: 60px;
}
.grabbingActive{
    cursor: -webkit-grabbing !important;
}
.fiyonkTeam{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    position: relative;
    cursor: -webkit-grab;
    margin-top: 25px;
}
.fiyonkTeam::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
h2{
    font-size: 60px;
    margin-bottom: 25px;
    font-family: 'Kalam', cursive;
    width: 100%;
    text-align: center;
    color:white;
}
.fiyonkTeam .person{
    min-width: 350px;
    height: 350px;
    overflow: hidden;
    margin:0 15px;
    border-radius:0 30px 0 30px;
    display: inline-block;
}
.fiyonkTeam .personName{
    position: absolute;
    bottom: 25px;
    width: 150px;
    height: 30px;
    background-image: url('../assets/images/teambg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px 50px;
}
.fiyonkTeam .person img{
    width: 100%;
    height: 100%;
}
.fiyonkTeam .personName{
    position: relative;
    bottom: 50px;
    width: 150px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 150px 50px;
}

.fiyonkTeam .personName p{
    position: absolute;
    top: -22px;
    left: 17px;
    height: 20px;
    font-family: 'Kalam', cursive;
    text-align: center;
    font-size: 16px;
    color:white;
    letter-spacing: 2px;
}

.fiyonkTeam .personName span{
    position: absolute;
    top: 13px;
    width: 100%;
    height: 20px;
    font-family: 'Kalam', cursive;
    display: inline-block;
    text-align: center;
    font-size: 12px;
    color: white;
    letter-spacing: 2px;
}
@media(max-width: 1200px){ 
    .fiyonkTeam .person{
        min-width: 280px;
        height: 280px;
    }
}
@media(max-width: 850px){ 
    h2{
        font-size: 45px;
        margin-bottom: 15px;
    }
} 
@media(max-width: 576px){  
    h2{
        font-size: 40px;        
    }
    .fiyonkTeam .person{
        min-width: 225px;
        height: 225px;
    }
}
</style>