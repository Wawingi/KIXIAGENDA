<template>
    <div>
        <Header></Header>

        <div class="wrapper">
           <router-view></router-view>
        </div>

        <!--Modal inclusão-->
        <ModalActividade/>  
        <!---->   


        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/Header.vue";
import ModalActividade from '../components/ModalActividade.vue';
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        ModalActividade,
        Footer
    },
    created() {
        document.querySelector("body").style.backgroundColor = "#f5f6f8";
    },
};

</script>