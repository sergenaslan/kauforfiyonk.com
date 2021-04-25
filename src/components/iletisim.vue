<template>
    <div class="contactInfo">
        <div class="row marginBottom" v-for="salon in salonData" :key="salon.salonTitle">
            <h2> {{ salon.salonTitle}} </h2>
            <div class="maps">
                <iframe :src="salon.salonMaps"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class="infoData"> 
                <div class="row">
                    <div class="adresInfo">
                        Adres :
                    </div>
                    <div class="adresText">
                        {{ salon.salonAdress}} 
                    </div>
                </div>
                <div class="row">
                    <div class="adresInfo">
                        Hergün : 
                    </div>
                    <div class="adresText">
                        {{ salon.salonTime}} 
                    </div>
                </div>
                <div class="row">
                    <div class="adresInfo">
                        Tel : 
                    </div>
                    <div class="adresText">
                        {{ salon.salonContact}} 
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
                { salonTitle : "Kuafor Fiyonk Nazilli",salonMaps :"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103982.1284766554!2d28.22533100055919!3d37.697696325645744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3b77310a4017f8e!2sKuaf%C3%B6r%20Fiyonk!5e0!3m2!1str!2str!4v1615423497407!5m2!1str!2str", salonAdress : "Kurtuluş mah., Namık Kemal Cd. No:42, 09800 Nazilli/Aydın",salonContact : "548-888-88-88",salonTime:" 10:00 - 20:00"},
                { salonTitle : "Kuafor Fiyonk Denizli",salonMaps :"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15003.111487918924!2d29.073861461683382!3d37.76623083401741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6508c657aaf1bb9!2zS1VBRk9SIEbEsFlPTksgREVOxLBaTMSw!5e0!3m2!1str!2str!4v1615423882640!5m2!1str!2str", salonAdress : "Altıntop mah., Çaybaşı Cd. No:85 D:1A, 20100 Pamukkale/Denizli",salonContact : "549-999-99-99",salonTime:" 10:00 - 20:00"}
            ]
        }
    }
}
</script>
<style scoped>
.marginBottom{
    margin-bottom: 100px;
    align-items: center;
}
.row{
    display: flex;
    flex-wrap: wrap;
}

.contactInfo{
    width: 100%;
    min-height: 300px;
}
.contactInfo .maps{
    width: 40%;
    height: 300px;
    display: inline-block;
    box-sizing: border-box;
}
.maps iframe{
    width: 100%;
    height: 100%;
}
h2{
    font-family: 'Kalam', cursive;
    width: 100%;
    text-align: center;
    color:white;
    margin-bottom:59px;
    font-size: 50px;
    margin-bottom: 25px;
    display: inline-block;
}
.infoData{
    width: 59%;
    padding-left: 3%;
    display: inline-block;
    box-sizing: border-box;
}

.infoData .adresInfo{
    width: 90px;
    font-family:  'Kalam', cursive;
    font-size: 24px;
    margin:4px 0;
}

.infoData .adresText{
    width: calc( 100% - 100px);
    font-family:  'Kalam', cursive;
    font-size: 24px;
    padding-left: 10px;
    margin: 4px 0;
    box-sizing: border-box;
}
@media(max-width: 1200px){ 
    h1{
        font-size: 50px;
        letter-spacing: 5px;
    }
}
@media(max-width: 850px){ 
    .contactInfo .maps{
        width: 100%;
    }
    .infoData{
        width: 85%;
        padding-top: 20px;
        margin:0 auto;
    }
    h2{
        font-size: 30px;
    }
}
@media(max-width: 576px){
      h1{
        font-size: 40px;
        letter-spacing: 2px;
    }
    h2{
        font-size: 35px;
    }
     .infoData{
        width: 100%;
        padding-top: 20px;
        margin:0 auto;
    }
    .infoData .adresText{
        font-size: 18px;
    }
}
</style>
