<template>
    <div class="footer">
        <div class="footerMenu">
            <ul>
                <router-link
                    to="/ekip"
                    tag="li"
                    >
                    <a href="">Ekibimiz</a>
                </router-link>
                <router-link
                    to="/galeri"
                    tag="li"
                    >
                    <a href="">Galeri</a>
                </router-link>
                <router-link
                    to="/iletisim"
                    tag="li"
                    >
                    <a href="">İletisim</a>
                </router-link>
                <router-link
                    to="/randevu"
                    tag="li"
                    >
                    <a href="">Randevu</a>
                </router-link>    
                <router-link
                    to="/codex7"
                    tag="li"
                    >
                    <a href="">Codex7</a>
                </router-link>                             
            </ul>
        </div>
        <div class="footerGallery" @click="changePage">
                <h3>Fiyonk Galeri</h3>
                <img src="../assets/images/sombre/sombre-1.jpg" alt="">
                <img src="../assets/images/ombre/ombre-2.jpg" alt="">
                <img src="../assets/images/makyaj/makyaj-1.jpg" alt="">
                <img src="../assets/images/oje/kalici-oje-1.jpg" alt="">
                <img src="../assets/images/makyaj/makyaj-2.png" alt="">
                <img src="../assets/images/gelin/gelin-1.jpg" alt="">
                <img src="../assets/images/sombre/sombre-2.jpg" alt="">
                <img src="../assets/images/makyaj/makyaj-3.jpg" alt="">
                <img src="../assets/images/sombre/sombre-1.jpg" alt="">
                <img src="../assets/images/ombre/ombre-2.jpg" alt="">
                <img src="../assets/images/makyaj/makyaj-1.jpg" alt="">
                <img src="../assets/images/oje/kalici-oje-1.jpg" alt="">
        </div>
        <div class="footerMaps">
            <h4>Kuafor Nazilli</h4>
            <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d103982.1284766554!2d28.22533100055919!3d37.697696325645744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf3b77310a4017f8e!2sKuaf%C3%B6r%20Fiyonk!5e0!3m2!1str!2str!4v1615423497407!5m2!1str!2str"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <h4>Kuafor Denizli</h4>
            <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15003.111487918924!2d29.073861461683382!3d37.76623083401741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6508c657aaf1bb9!2zS1VBRk9SIEbEsFlPTksgREVOxLBaTMSw!5e0!3m2!1str!2str!4v1615423882640!5m2!1str!2str"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="footerLogo">
            <div class="logo">
                <img src="../assets/images/logo.png" alt="">
                <a class="whatsapp" href="#"></a>
                <a class="facebook" href="#"></a>
                <a class="instagram" href="#"></a>
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
            ]            
        }
    },
    methods : {
        changePage :  function(){
            this.$router.push("/galeri").catch(()=>{});
        }
    }
}
</script>
<style scoped>

.border{
    border:1px solid red;
    box-sizing: border-box !important;
}
.footer{
    display: flex;
    flex-wrap: wrap;
    margin-top: 130px;
}
.footer .footerMenu{
    width: 28%;
    height: 210px;
}
.footerMenu ul li{
    height: 40px;
    padding-top: 12px;
    text-align: center;
    list-style-type: none;
}
.footerMenu ul li a{
    text-decoration: none;
    color: #686868;
    font-family: var(--titlefont);
    font-size: 28px;
}
.footer .footerGallery{
    text-align: center;
    width: 28%;
    min-height: 100px;
}

.footer .footerGallery h3{
    font-family: 'Kalam', cursive;
    font-size: 30px;
    color: #686868;
    text-align: center;
    margin-bottom: 5px;
}
.footer .footerGallery img{
    margin: 2%;
    width: 25%;
    object-fit: cover;
    height: 70px;

    border-radius: 0 20px 0 20px;
}
.footer .footerMaps{
    width: 28%;
    height: 300px;
}
.footerMaps h4{
    text-align: center;
    font-family: 'Kalam', cursive;
    color: #686868;
    font-size: 30px;
    margin:5px 0;
}
.footerMaps .maps{
    margin-left: 15% !important;
    width: 70%;
    height: 135px;
    margin:0 auto;
    display: inline-block;
}
.footer .footerLogo{
    width: 16%;
    height: 200px;
    position: relative;
    top: 50px;
    box-sizing: border-box;
}
.footerLogo .logo{
    margin: 0 auto;
    width: 70%;
    height: 170px;
    text-align: center  ;
}

.footerLogo .logo img{
    width: 100%;
}

.footerLogo .whatsapp,
.footerLogo .instagram,
.footerLogo .facebook{
    width: 30px;
    height: 30px;
    display: inline-block;
    background-image: url('../assets/images/icons.png');
    background-repeat: no-repeat;
    background-size: 190px 20px;
    margin: 0 3px;
}
.footerLogo .whatsapp{
    background-position: -2px center;
}
.footerLogo .facebook{
    background-position: -50px center;
}
.footerLogo .instagram{
    background-position: -101px center;
}

@media(max-width: 1200px){ 
    .footer{
        margin-top: 150px;
    }
}
@media(max-width: 850px){ 
    .footer{
        justify-content: space-between
    }
    .footer .footerMenu{
        width: 50%;
    }
    .footer .footerGallery{
        width: 50%;
    }
    .footer .footerMaps{
        width: 50%;
    }
    .footer .footerLogo{
        position: relative;
        right: 10%;
        width: 30%;
    }
} 
@media(max-width: 576px){
    .footer{
        margin-top: 90px;
    }
    .footer .footerMenu{
        width: 100%;
        height: 145px;
    }
    .footerMenu ul{
        display: flex;
        flex-wrap: wrap;
    }
    .footerMenu ul li{
        width: 50%;
        height: 32px;
        display: inline-block;
        box-sizing: border-box;
    }
    .footerMenu ul li a{
        font-size: 20px;
        line-height: 13px;
    }
    .footer .footerGallery h3{
        font-size: 23px
    }
    .footer .footerGallery{
        width: 100%;
        min-height: 100px;
    }
    .footer .footerMaps{
        width: 100%;
        height: 400px;
    }
    .footerMaps h4{
        color: #686868;
        font-size: 23px;
    }
    .footerMaps .maps{
        margin-left: 10% !important;
        width: 80%;
        height: 150px;
    }
    .footer .footerLogo{
        position: relative;
        top: 20px;
        left: 30%;
        width: 45%;
    }
}
</style>