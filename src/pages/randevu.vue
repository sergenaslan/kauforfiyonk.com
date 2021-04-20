<template>
    <div class="randevuKap">
        <h2>Fiyonk Randevu</h2>
        <div class="randevuContent" v-for="randevu in randevuData" :key="randevu.personName">
            <div class="row">
                <img :src="randevu.personImage" alt="">
                <div class="randevuInfo">
                    <p class="personName">{{ randevu.personName }} </p>
                    <p class="expertise"> {{ randevu.personExpertise }} </p>
                    <div class="placeNazilli"> 
                        Nazilli Salonu : <span>{{ randevu.nazilliDay }}</span>
                    </div>
                    <div class="placeDenizli"> 
                        Denizli Salonu : <span>{{ randevu.denizliDay }}</span>
                    </div>
                    <div class="randevuContact">
                        <span class="alert">Lütfen Randevu Alınız *</span>
                        <a class="whatsappContact" :href="randevu.wpContact"></a>
                        <a class="PhoneContact" :href="randevu.phoneContact"></a>
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
            randevuData :[
                {personName:"Kemal Yavaş",personImage:"./src/assets/images/ekip/kemal.jpg", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Ümit Aygün",personImage:"./src/assets/images/ekip/umit.jpg",  personExpertise:"Renklendirme Uzmanı",phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Raziye Yavaş",personImage:"./src/./assets/images/ekip/raziye.jpg", personExpertise:"Makyöz", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Mehmet Atakan",personImage:"./src/./assets/images/ekip/atakan.jpg", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Poyraz Gülhan",personImage:"./src/./assets/images/ekip/poyraz_gulhan.jpg", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Münevver Diriker",personImage:"./src/./assets/images/ekip/munevverDiriker.PNG", personExpertise:"Makyöz", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"İsmet Can",personImage:"./src/./assets/images/ekip/ismetcan.PNG", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Mehmet Şınav",personImage:"./src/./assets/images/ekip/mehmetsınav.jpg", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"},
                {personName:"Hamyar Salahzade",personImage:"./src/./assets/images/ekip/hamyar_salahzade.jpg", personExpertise:"Renklendirme Uzmanı", phoneContact:"05417825478", wpContact:"2549611231851",nazilliDay:"p.tesi Salı Perşembe",denizliDay:"Çarşamba, C.tesi, Cuma"}
            ]
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
.row{
    display: flex;
    flex-wrap: wrap;
}
.randevuKap{
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
.randevuKap .order{
    position: absolute;
    left: 47%;
    bottom: -93px;
    width: 80px;
    height: 100px;
    text-align: center;
    cursor: pointer;
}

.order span{
    margin-top: 10px;
    width: 151px;
    display: inline-block;
    font-size: 25px;
    position: relative;
        left: -32px;
}
.randevuKap h2{
    font-family: 'Kalam', cursive;
    width: 100%;
    text-align: center;
    color:white;
    font-size: 60px;
    margin-bottom: 25px;
}
.randevuKap  .randevuContent{
    width: 50%;
    min-height: 170px;
}
.randevuContent img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.randevuContent .randevuInfo{
    width: calc(100% - 150px);
    font-family:'Kalam', cursive;
    margin-bottom: 35px;
}
.randevuInfo .personName{
    text-align: center;
    font-size: 24px;
}
.randevuInfo .expertise{
    text-align: center;
    font-size: 20px;
}
.randevuInfo .placeNazilli,
.randevuInfo .placeDenizli{
    font-size: 16px;
    text-align: center;
}
.randevuInfo .placeNazilli span,
.randevuInfo .placeDenizli span{
    font-size: 16px;
}

.randevuInfo .randevuContact{
    width: 100%;
    height: 30px;
    text-align: center;
}

.randevuInfo .randevuContact .alert{
    position: relative;
    top: -10px;
    height: 30px;
    font-family:'Kalam', cursive;
    font-size: 16px;
    color: #686868;
}


.randevuInfo .randevuContact .whatsappContact,
.randevuInfo .randevuContact .PhoneContact{
    width: 25px;
    height: 25px;
    display: inline-block;
    background-image: url(/dist/icons.png?182ba1f…);
    background-repeat: no-repeat;
    background-size: 124px 21px;
}
.randevuInfo .randevuContact .whatsappContact{
    background-position: 1px center;
}
.randevuInfo .randevuContact .PhoneContact{
    background-position: -30px center;
}

.randevuKap{
    display: flex;
    flex-wrap: wrap;
    padding-top: 70px;
    justify-content: space-between;    
}
@media(max-width: 1200px){ 
/*      .randevuKap .randevuContent{
        width: 100%;
        min-height: 170px;
        margin-bottom: 90px;
    }
    .randevuKap h2{
        margin-bottom: 40px;
    }
    .randevuContent .row{
        justify-content: center;
    }
    .randevuContent img{
        width: 25%;
    }
    .randevuContent .randevuInfo{
        width: 50%;
    } */
}
@media(max-width: 850px){ 
    .randevuKap{
        padding-top:80px;
    }
    .randevuKap .randevuContent{
        width: 50%;
        min-height: 170px;
        margin-bottom: 50px;
    }
    .randevuKap h2{
        font-size: 45px;
    }
    .randevuContent img{
        width: 40%;
        height: 70%;
        margin-top: 5%;
    }
    .randevuContent .randevuInfo{
        width: 60%;
    }
    .randevuInfo .personName{
        font-size: 24px;
    }
    .randevuInfo .expertise{
        font-size: 16px;
    }
    .randevuInfo .placeNazilli, 
    .randevuInfo .placeDenizli{
        font-size: 14px;
    }
    .randevuInfo .placeNazilli span,
    .randevuInfo .placeDenizli span{
        font-size: 14px;
    }
    .randevuInfo .randevuContact{
        width: 133%;
        text-align: right;
        height: 30px;
        position: relative;
        left: -33%;
    }
    .randevuInfo .randevuContact .alert{
        position: relative;
        top: -8px;
        font-size: 14px;
    }
    .randevuInfo .randevuContact .whatsappContact,
    .randevuInfo .randevuContact .PhoneContact{
        width: 25px;
        height: 25px;
        background-size: 109px 17px;
    }
    .randevuInfo .randevuContact .whatsappContact{
        background-position: 3px center;
    }
}
@media(max-width: 576px){
    .randevuKap .randevuContent{
        width: 100%;
        min-height: 170px;
        margin-bottom: 60px;
    }
    .randevuKap h2{
        margin-bottom: 5px;
        font-size: 40px;
    }
    .randevuContent .row{
        justify-content: center;
        align-items: center;
    }
    .randevuContent img{
        width: 40%;
        margin-bottom: 20px;
    }
    .randevuContent .randevuInfo{
        width: 60%;
        padding:0 10px;
    }
    .randevuInfo .personName{
        font-size: 18px;
    }
    .randevuInfo .expertise{
        font-size: 14px;
    }
    .randevuInfo .placeNazilli,
    .randevuInfo .placeDenizli{
        font-size: 14px;
    }
    .randevuInfo .placeNazilli span,
    .randevuInfo .placeDenizli span{
        font-size: 14px;
    }

    .randevuInfo .randevuContact{
        text-align: center;
        left: -16%;
    }
    .randevuInfo .randevuContact .alert{
        position: relative;
        top: -2px;
        height: 30px;
        font-family:'Kalam', cursive;
        font-size: 13px;
        color: #686868;
    }
    .randevuInfo .randevuContact .whatsappContact,
    .randevuInfo .randevuContact .PhoneContact{
        width: 24px;
        height: 26px;
        background-size: 89px 20px;
    }
    .randevuInfo .randevuContact .whatsappContact{
        background-position: 5px center;
    }
    .randevuInfo .randevuContact .PhoneContact{
        background-position: -21px center;
    }
    .randevuKap .order{
        position: absolute;
        bottom: -40px;
        width: 50px;
        height: 63px;
    }
    .randevuKap .order img{
        width: 100%;
    }
    .order span{
        margin-top: 3px;
        width: 117px;
        font-size: 17px;
        left: -36px;
    }
}
</style>