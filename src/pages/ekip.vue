<template>
    <div class="ekip">
        <h1>FİYONK EKİBİ</h1>
        <div class="fiyonkTeam">
             <div class="person" v-for="person in ekip" :key="person.name">
                <img :src="person.image" alt="">
                <div class="personName">
                    <p> {{person.name}} </p>
                    <span> {{person.expertise }} </span>
                </div>
            </div>
        </div>

        <app-story></app-story>
        <app-randevu></app-randevu>
        <app-galeri></app-galeri>

    </div>
</template>
<script>
import story from "../components/story";
import randevu from "../components/randevu";
import galeri from "../components/galeri";

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
            ]
        }
    },
    methods : {


    },
    components : {
        appStory : story,
        appRandevu : randevu,
        appGaleri : galeri
    }
}
</script>
<style scoped>
:root{
    --textColor: white;
    --titlefont : 'Kalam', cursive;
    --textfont : 'Roboto', sans-serif;
}
.grabbingActive{
    cursor: -webkit-grabbing !important;
}
.ekip{
    padding-top: 70px;
}
h1{
    font-family:  'Kalam', cursive;
    font-size: 60px;
}
.fiyonkTeam{
    display: flex;
    flex-wrap: wrap;
    overflow-x: scroll;
    position: relative;
    cursor: -webkit-grab;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 100px;
}
.fiyonkTeam::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
.fiyonkTeam h2{
    width: 100%;
    text-align: center;
    color:white;
}
.fiyonkTeam .person{
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin:0 15px;
    border-radius:0 30px 0 30px;
    display: inline-block;
    margin-bottom: 40px;
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
    width: 195px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 175px 66px;
}

.fiyonkTeam .personName p{
    position: absolute;
    top: -7px;
    width: 100%;
    left: 3px;
    height: 20px;
    font-family: 'Kalam', cursive;
    text-align: left;
    padding-left: 15px;
    font-size: 16px;
    color: white;
    letter-spacing: 2px;
}

.fiyonkTeam .personName span{
    position: absolute;
    top: 13px;
    width: 100%;
    height: 20px;
    font-family: 'Kalam', cursive;
    display: inline-block;
    text-align: left;
    font-size: 12px;
    padding-left: 15px;
    color: white;
    letter-spacing: 2px;
}
@media(max-width: 1200px){ 

}
@media(max-width: 850px){
    h1{
        font-size: 45px;
    }
    .fiyonkTeam .person{
        width: 27%;
        height: 170px;
        overflow: hidden;
        margin:0;
        display: inline-block;
        margin-bottom: 40px;
    }
}
@media(max-width: 576px){
    h1{
        font-size: 40px;
    }
    .fiyonkTeam{
        justify-content: space-around;
    }
    .fiyonkTeam .person{
        width: 42%;
        height: 190px;
    }
}
</style>