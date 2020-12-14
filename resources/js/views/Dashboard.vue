<template>
    <div class="container-fluid">
        <div class="row">
                WELCOME PRINCIPAL
                {{this.$root.authUser}}
        </div>
    </div>
</template>
<script>
export default {
    created() {
        //document.querySelector("body").style.backgroundColor = "#f5f6f8";
    }
};
</script>
