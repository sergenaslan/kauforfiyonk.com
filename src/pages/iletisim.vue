<template>
    <div class="contact">
         <h1>İletişim Bilgilerimiz</h1>
        <app-contact>

        </app-contact>
    </div>
</template>
<script>
import contactInfo from "../components/iletisim"
export default {
    data(){
        return{
            
        }
    },
    components: {
        appContact : contactInfo
    }
}
</script>

<style scoped>
.contact{
    display: flex;
    flex-wrap: wrap;
    padding-top: 70px;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
h1{
    font-family: 'Kalam', cursive;
    width: 100%;
    text-align: center;
    color:white;
    margin-bottom:59px;
    font-size: 60px;
    margin-bottom: 25px;
    letter-spacing: 10px;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
@media(max-width: 1200px){ 

}
@media(max-width: 850px){ 
    h1{
        font-size: 35px;
        letter-spacing: 1px;
    } 
}
@media(max-width: 576px){ 
    h1{
        margin-top: 15px;
        font-size: 35px;
        letter-spacing: 1px;
    } 


}

</style>