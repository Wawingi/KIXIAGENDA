<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">KIXIAGENDA</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Estatísticas</a></li>
                        </ol>
                    </div>
                    <h4 class="page-title">Gráficos estatísticos</h4>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div id="tarefas_hoje" style="width: 100%;height:400px"></div>   
                                </div>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    </div>
</template>
<script>   
    import { required, minLength, maxLength } from 'vuelidate/lib/validators';

    export default {       
        data(){
            return{
                fechos: [],
                utilizadores: [], 
                utilizador_codigo:'',
                periodo:'',
                data_fecho:'',
                visible: false,
                fullPage: true
            };       
        },  
        components: {
            Loading: VueLoading
        },
        validations: {
            utilizador_codigo: {
                required
            },       
            periodo: {
                required
            },       
            data_fecho: {
                required
            }       
        },
        created(){
            this.criaGrafico()            
        },
        methods: {  
            criaGrafico: async function(){
                var myChart = echarts.init(document.getElementById('tarefas_hoje'));
                var option = {
                    color:['#3398DB'],
                    tooltip:{
                        trigger:'axis',
                        axisPointer:{
                            type:'shadow'
                        }
                    },      
                    tooltip: {},
                
                    xAxis: {
                        data: ['Belas','Talatona','Viana']
                    },
                    yAxis: {},
                    series: [
                        {
                            name: 'Delegados',
                            type: 'bar',
                            data: [1,2,3]
                        }
                    ]
                };
                myChart.setOption(option);

                /*let self = this               
                this.$axios.get('auth/pegaUtilizadoresDSO')
                .then(function (response) {
                    if(response.status==200){
                        self.utilizadores = response.data;
                        console.log(response.data);                  
                    }else{
 
                    }
                })
                .catch(function (error) {
                    alert("Erro ao carregar dados do perfil");
                });*/
            },       
        }        
    };
</script>