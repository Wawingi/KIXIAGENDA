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

        <loading :active.sync="visible" :can-cancel="true" :is-full-page="fullPage"/>  

        <!-- Actividades regularizadas hoje -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <canvas ref="chart"></canvas> 
                    </div>
                </div>
            </div>
        </div>

        <!-- Actividades atrasadas -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <canvas ref="chartAtrasadas"></canvas> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>   
    import {Bar} from 'vue-chartjs'

    export default {       
        data(){
            return{
                accoes: '',
                visible: false,
                fullPage: true
            };       
        },  
        components: {
            Loading: VueLoading
        },

        mounted(){
            this.visible = true;
            let self = this;               
            this.$axios.get('auth/graficoTarefasRegularizadas')
            .then(function (response) {
                if(response.status==200){
                    self.accoes = response.data;
                    self.visible = false;  

                    self.pegaTarefasRegularizadas();
                    self.pegaTarefasAtrasadas();
                }
            })
            .catch(function (error) {
                
            });
        },                      
        methods: { 
            pegaTarefasRegularizadas: async function(){
                var chart = this.$refs.chart;
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: this.accoes.users,
                        datasets: [{
                            label: 'Tempo Trabalhado (minutos)',
                            backgroundColor: '#1abc9c',
                            data: this.accoes.accoes,
                            borderWidth: 1                           
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{                                
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });                                                                      
            },

            pegaTarefasAtrasadas: async function(){
                var chart = this.$refs.chartAtrasadas;
                var ctx = chart.getContext("2d");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: this.accoes.users,
                        datasets: [{
                            label: 'Actividades Atrasadas',
                            backgroundColor: '#ff4545',
                            data: this.accoes.atrasadas,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });                                                                      
            }
        }        
    };
</script>