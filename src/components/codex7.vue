<template>
    <div class="codexRow">
        <img src="../assets/images/codeX7.png">
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.codexRow{
    margin-top: 130px;
    display: flex;
    flex-wrap: wrap;
}
.codexRow img{
    width: 100%;
}
@media(max-width: 1200px){ 

}
@media(max-width: 850px){ 
 .codexRow{
        margin-top: 80px;
    }
    .codexRow img{
        width: 100%;
        height: 250px
    }
}
@media(max-width: 576px){  
    .codexRow{
        margin-top: 50px;
    }
    .codexRow img{
        width: 100%;
        height: 200px
    }
}
</style>