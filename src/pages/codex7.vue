<template>
    <div class="codex7">
        <h1>Code X7</h1>
        <div class="infoText">
            <img src="../assets/images/codeX7.png">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper ex sit amet pulvinar eleifend. Duis augue mi, rutrum eu mattis at, elementum at urna. Fusce non semper purus. Etiam non lacinia mauris. Nullam dolor sapien, lacinia vitae euismod et, semper in sapien. Ut scelerisque nisi quis tincidunt aliquet. Morbi euismod nulla sem, ac imperdiet massa cursus imperdiet. Sed elementum tortor et mollis ultricies. In a diam non ipsum ultricies vestibulum at sed ipsum. Aliquam ac tellus in ligula lacinia molestie. Nam sapien urna, vulputate eu dapibus sit amet, lacinia eget massa. Praesent vestibulum eget risus in iaculis. Suspendisse commodo blandit imperdiet. Phasellus nunc est, iaculis at augue malesuada, ullamcorper sollicitudin libero. Morbi sit amet facilisis nulla. Donec sed scelerisque ipsum.

Nulla congue turpis vel sem facilisis, sed rutrum massa dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean luctus lectus neque, sed malesuada velit elementum 
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
.codex7{
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
    font-size: 60px;
    margin-bottom: 25px;
    letter-spacing: 15px;
}
.infoText{
    width: 100%;
}
.infoText img{
    width: 100%;
    margin-bottom: 90px;
}
.infoText p{
    width: 90%;
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
        width: 100%;
        height: 250px
    }
}
@media(max-width: 576px){ 
    h1{
        font-size: 40px;
        letter-spacing: 5px;
    } 
    .infoText img{
        margin-bottom: 35px;
    }
    .infoText img{
        width: 100%;
        height: 200px
    }
    .infoText p{
        width: 100%;
    }
}
</style>