<template>
    <div class="rowKap salon">
        <h2>Salonlarımız</h2>
        <div class="saloninfo" v-for="(salon, index) in salonData" :key="index">
            <div class="row">
                <div class="salonSlider">
                    <div class="leftIcon" @click="changeSlider(-1, $event)"></div>
                    <div class="rightIcon" @click="changeSlider(1, $event)"></div>
                    <div class="salonImage">
                        <img class="imgRespon" :key="index"  v-for="(image, index) in salon.salonImage" :src="image" :class=" { salonImageShow  : index == 0 }">
                    </div>
                </div>
                <div class="salonAdres">
                    <h4> {{salon.salonTitle}} </h4>
                    <div class="row">
                        <div class="adresInfo">
                            Adres :
                        </div>
                        <div class="adresText">
                          {{ salon.salonAdress }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="adresInfo">
                            Hergün : 
                        </div>
                        <div class="adresText">
                           {{ salon.salonTime }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="adresInfo">
                            Tel : 
                        </div>
                        <div class="adresText">
                             {{ salon.salonContact }}
                        </div>
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
            salonData : [
                { salonTitle : "Kuafor Fiyonk Nazilli",salonImage:["./src/assets/images/fiyonkNazilli2.jpg","./src/assets/images/fiyonkNazilli.png"], salonAdress : "Kurtuluş mah., Namık Kemal Cd. No:42, 09800 Nazilli/Aydın",salonContact : "548-888-88-88",salonTime:" 10:00 - 20:00"},
                { salonTitle : "Kuafor Fiyonk Denizli",salonImage:["./src/assets/images/fiyonkDenizli2.jpg","./src/assets/images/fiyonkDenizli.png"], salonAdress : "Altıntop mah., Çaybaşı Cd. No:85 D:1A, 20100 Pamukkale/Denizli",salonContact : "549-999-99-99",salonTime:" 10:00 - 20:00"}
            ],
            activeImage : 0,
        }
    },
    methods : {
        changeSlider : function(e, event){
            this.activeImage = this.activeImage + e;
            if( e > 0){
               if(this.activeImage > event.path[1].querySelectorAll('img').length-1 ){
                    event.path[1].querySelector('.salonImageShow').classList.remove('salonImageShow');
                    this.activeImage = 0;
                    event.path[1].querySelectorAll('img')[this.activeImage].classList.add('salonImageShow');
                }else{
                     event.path[1].querySelector('.salonImageShow').classList.remove('salonImageShow');
                     event.path[1].querySelectorAll('img')[this.activeImage].classList.add('salonImageShow');
                }
            }else{
                if(this.activeImage < 0 ){
                    event.path[1].querySelector('.salonImageShow').classList.remove('salonImageShow');
                    this.activeImage = event.path[1].querySelectorAll('img').length-1;
                    event.path[1].querySelectorAll('img')[this.activeImage].classList.add('salonImageShow');
                }else{
                     event.path[1].querySelector('.salonImageShow').classList.remove('salonImageShow');
                    event.path[1].querySelectorAll('img')[this.activeImage].classList.add('salonImageShow');
                }
            }
        }
    }
}
</script>
<style scoped>
:root{
    --titlefont : 'Kalam', cursive;
    --textfont : 'Kalam', cursive;
}
.imgRespon{
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.salonImageShow{
    display:inline-block;
    object-fit: contain !important;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
h1{
    color:white;
}
.rowKap{
    color:white;
    display: flex;
    flex-wrap: wrap;
    margin-top:40px;
}
.salon{
    margin-top: 130px;
    justify-content: space-around;
}
.salon h2{
    font-family: 'Kalam', cursive;
    width: 100%;
    font-size: 60px;
    margin-bottom: 25px;
    text-align: center;
    letter-spacing: 2px;
}
.salon .saloninfo{
    width: 45%;
    margin-top: 15px;
}
.salon .salonSlider{
    position: relative;
    width: 100%;
}
.salonSlider .salonImage{
    width: 100%;
    overflow: hidden;
}

.salon .salonSlider .leftIcon,
.salon .salonSlider .rightIcon{
    position: absolute;
    cursor: pointer;
    top: 40%;
    width: 36px;
    height: 36px;
    background-image: url("../assets/images/left_right_Icon.png");
    border-radius: 50%;
}
.salon .salonSlider .leftIcon{
    left: 5%;
    background-position: 5px;

}
.salon .salonSlider .rightIcon{
    right: 5%;
    background-position: 30px;
}
.salon .salonAdres{
    width: 100%;
}
.salon .salonAdres h4{
    font-family: 'Kalam', cursive;
    text-align: center;
    font-size: 40px;
    letter-spacing: 2px;
    margin:10px 0;
}

.salon .salonAdres .adresInfo{
    width: 90px;
    font-family:  'Kalam', cursive;
    font-size: 24px;
    margin:4px 0;
}

.salon .salonAdres .adresText{
    width: calc( 100% - 90px);
    font-family:  'Kalam', cursive;
    font-size: 24px;
    padding-left: 10px;
    margin: 4px 0;
    box-sizing: border-box;
}
@media(max-width: 1200px){ 

}
@media(max-width: 850px){ 
    .salon{
        margin-top: 80px;
    }
    .salon h2{
        font-size: 45px;
        margin-bottom:5px;
    }
    .salon .salonAdres h4{
        font-size: 27px;
    }
    .salon .salonAdres .adresInfo{
        font-size: 16px;
        width: 60px;
    }
    .salon .salonAdres .adresText{
        font-size: 16px;
        width: calc( 100% - 60px);
    }
}
@media(max-width: 576px){  
    .salon{
        margin-top: 70px;
    }
    .salon h2{
        font-size: 40px;
    }
    .salon .saloninfo{
        width: 100%;
        margin-top: 35px;
    }
    .salon .salonAdres h4{
        margin:10px 0;
    }
}
</style>