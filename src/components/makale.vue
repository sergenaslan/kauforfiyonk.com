<template>
    <div class="article">
        <div class="articleImg">
            <img :src="makale[number].image" alt="">
        </div>
         <div class="articleText">
            <h3>{{makale[number].baslik }} </h3>
            <p> 
              {{makale[number].content.substring(0, 103)}}
                <button @click="sendtoArticle()">Devanımı Oku</button>
              
            </p>
        </div>
    </div>
</template>
<script>
export default{
    props : ["number"],
    data(){
        return {
            makale : [
                {baslik:"2020 Yılı Fiyonk Gelinleri", image:"../src/assets/images/gelin/gelin-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"},
                {baslik:"Fiyonk Tipi Sarışınlık", image:"../src/assets/images/ombre/ombre-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"},
                {baslik:"Ombre / Sombre Çalışmalarımız ", image:"../src/assets/images/sombre/sombre-2.jpg", content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci!  Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugit, praesentium aspernatur doloremque voluptas libero inventore non exercitationem qui odio eaque necessitatibus assumenda, magni facere nostrum ea hic, recusandae provident unde eum! Deleniti, reprehenderit adipisci! Voluptatem tempore dolor consequatur asperiores sit ab sunt quos, minima non nobis. Obcaecati, a?"}
            ]
        }
    },
    methods :{
        sendtoArticle : function(){
           this.$router.push("/makale/"+this.number);
        }
    }
}
</script>
<style scoped>
    button{
        font-family: 'Kalam', cursive;
        color: white;
        background: none;
        outline: none;
        padding: 2px 8px;
        width: 104px;
        height: 27px;
        display: inline-block;
        border: none;
        border-bottom: 1px solid white;
    }
    .article{
        display: flex;
        flex-wrap: wrap;
        margin-top: 130px;
    }
    .article .articleImg{
        width: 30%;
        height: 300px;
        overflow: hidden;
    }
    .article img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 50%;
    }
    .article .articleText{
        width: 70%;
        color:white;/* 
        border:1px solid red; */
    }
    .article .articleText h3{
        font-size: 50px;
        text-align: center;
        font-family:  'Kalam', cursive;
        letter-spacing: 2px;
    }   
    .article .articleText p{
        padding: 15px 0% 0 5%;
        font-family: 'Kalam', cursive;
        font-size: 24px;
        text-align: center;
    }
    @media(max-width: 1200px){ 
        .article .articleText h3 {
            font-size: 36px;
        }        
    }
    @media(max-width: 850px){ 
        .article .articleText h3{
            font-size: 27px;
        }
        .article .articleText p{
            font-size: 16px;
        }
        
    }
    @media(max-width: 576px){
        .article .articleImg{
            width: 30%;
            height: 150px;
            overflow: hidden;
        }
        .article{
            margin-top: 90px;
        }
        .article .articleText h3{
            font-size: 20px;
            margin-left: 5%;
            letter-spacing: 0;
        }
        .article .articleText p{
            font-size: 16px;
        }
    }
</style>