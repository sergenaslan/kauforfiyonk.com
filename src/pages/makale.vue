<template>
    <div class="article">
        <h1> {{ makale[articleNumber].baslik }}  </h1>
        <div class="infoText">
            
               <img :src=" makale[articleNumber].image">
           <p>
               {{ makale[articleNumber].content }}  
           </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            makale : [
                {baslik:"2020 Yılı Fiyonk Gelinleri", image:"../src/assets/images/gelin/gelin-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"},
                {baslik:"Fiyonk Tipi Sarışınlık", image:"../src/assets/images/ombre/ombre-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"},
                {baslik:"Ombre / Sombre Çalışmalarımız ", image:"../src/assets/images/sombre/sombre-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"}
            ],
            articleNumber : this.$route.params.id
        }
    }
}
</script>
<style scoped>
.article{
    display: flex;
    flex-wrap: wrap;
    padding-top: 70px;
}
h1{
    font-family: 'Kalam', cursive;
    width: 100%;
    text-align: center;
    color:white;
    margin-bottom:59px;
    font-size: px;
    margin-bottom: 25px;
    letter-spacing: 7px;
}
.infoText{
    width: 100%;
}
.infoText img{
    float: left;
    width: 40%;
    margin-right: 10px;
    margin-bottom: 10px;
}
.infoText p{
    shape-outside: content-box;
    margin:0 auto;
    text-align: center;
    color:white;
    font-family:'Kalam', cursive;
    font-size: 24px;
}
@media(max-width: 1200px){ 

}
@media(max-width: 850px){ 
 .codexRow{
        margin-top: 80px;
    }
    .infoText img{
        width: 45%;
        height: 250px
    }
}
@media(max-width: 576px){ 
    h1{
        font-size: 30px;
        letter-spacing: 5px;
    } 
    .infoText img{
        margin-bottom: 35px;
    }
    .infoText img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .infoText p{
        width: 100%;
        font-size: 16px;
    }
}
</style>