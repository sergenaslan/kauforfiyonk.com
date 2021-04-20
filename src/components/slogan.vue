<template>
    <div class="slogan">
        <p>Herkes Nerede OLursa Olsun Uzman Rengi Hakeder</p>
        <span>JASH WOOD</span>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.slogan{
    display: flex;
    flex-wrap: wrap;
    color:white;
    margin-top: 130px;
}
.slogan p{
    font-family: 'Kalam', 'cursive';
    text-align: center;
    font-size: 40px;
    display: inline-block;
    width: 100%;
}
.slogan span{
    font-family: 'Kalam', 'cursive';
    width: 100%;
    text-align: center;
    font-size: 40px;
}
@media(max-width: 1200px){ 
.slogan{
        margin-top: 40px;
    }
}
@media(max-width: 850px){ 
 .slogan{
        margin-top: 80px;
    }
    .slogan p{
        font-size: 20px;
    }
    .slogan span{
        font-size: 25px;
    }
} 
@media(max-width: 576px){  
    .slogan{
        margin-top: 40px;
    }
    .slogan p{
        font-size: 16px;
    }
    .slogan span{
        font-size: 20px;
    }
}
</style>