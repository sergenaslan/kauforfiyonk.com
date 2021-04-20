<template>
    <div class="markalar">
        <div class="brandImage">
            <img src="../assets/images/olaplex.jpg" alt="">
            <img src="../assets/images/wella.jpg" alt="">
            <img src="../assets/images/schozkop.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.markalar{
    width: 100%;
}
.brandImage{
    margin-top: 130px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}
.brandImage img{
    width: 20%;
    margin: 0 4%;
}
@media(max-width: 1200px){ 
 .markalar{
        width: 100%;
        margin-top: 40px;
    }
}
@media(max-width: 850px){ 
    .brandImage{
        margin-top: 80px;
    }
     .markalar{
        width: 100%;
        margin-top: 40px;
    }
    .brandImage img{
        width: 20%;
        margin: 0 2%;
        height: 100px;
      /*   border:1px solid yellow; */
    }
}
@media(max-width: 576px){
    .brandImage{
        margin-top: 50px;
    }
    .markalar{
        width: 100%;
        margin-top: 40px;
    }
    .brandImage{
        justify-content: space-around;
    }
    .brandImage img{
        width: 33%;
        margin: 0 0%;
        height: 70px;
      /*   border:1px solid yellow; */
    }
}
</style>