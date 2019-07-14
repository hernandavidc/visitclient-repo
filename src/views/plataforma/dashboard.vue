<template>
<section class="statistic m-t-75">
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="statistic__item">
                        <h2 class="number">10,368</h2>
                        <span class="desc">Vendedores</span>
                        <div class="icon">
                            <i class="zmdi zmdi-account-o"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="statistic__item">
                        <h2 class="number">388,688</h2>
                        <span class="desc">Pedidos</span>
                        <div class="icon">
                            <i class="zmdi zmdi-shopping-cart"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="statistic__item">
                        <h2 class="number">1,086</h2>
                        <span class="desc">Citas</span>
                        <div class="icon">
                            <i class="zmdi zmdi-calendar-note"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="recent-report2">
                        <h3 class="title-3">recent reports</h3>
                        <div class="chart-info">
                            <div class="chart-info__left">
                                <div class="chart-note">
                                    <span class="dot dot--blue"></span>
                                    <span>products</span>
                                </div>
                                <div class="chart-note">
                                    <span class="dot dot--green"></span>
                                    <span>Services</span>
                                </div>
                            </div>
                        </div>
                        <div class="recent-report__chart">
                            <canvas id="recent-rep-chart"></canvas>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    mounted: function(){
        try {
            // Recent Report 2
            const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
            const bd_brandService2 = 'rgba(0,173,95,0.9)'
            const brandProduct2 = 'rgba(0,181,233,0.2)'
            const brandService2 = 'rgba(0,173,95,0.2)'

            var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
            var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

            var ctx = document.getElementById("recent-rep-chart");
            if (ctx) {
            ctx.height = 230;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
                datasets: [
                    {
                    label: 'My First dataset',
                    backgroundColor: brandService2,
                    borderColor: bd_brandService2,
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 0,
                    data: data1

                    },
                    {
                    label: 'My Second dataset',
                    backgroundColor: brandProduct2,
                    borderColor: bd_brandProduct2,
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 0,
                    data: data2

                    }
                ]
                },
                options: {
                maintainAspectRatio: true,
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                    gridLines: {
                        drawOnChartArea: true,
                        color: '#f2f2f2'
                    },
                    ticks: {
                        fontFamily: "Poppins",
                        fontSize: 12
                    }
                    }],
                    yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        stepSize: 50,
                        max: 150,
                        fontFamily: "Poppins",
                        fontSize: 12
                    },
                    gridLines: {
                        display: true,
                        color: '#f2f2f2'

                    }
                    }]
                },
                elements: {
                    point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3
                    },
                    line: {
                    tension: 0
                    }
                }


                }
            });
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}
</script>