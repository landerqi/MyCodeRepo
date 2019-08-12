(function($, window){
    var config = {
        dataURL: 'http://finance.weibo.yy.com/1.0/weibo/getStocksInfo?appId=testcase&sign=&data={"stockCodes":["sz000783"]}'
    };
    var stock = {};

    $.jsonp = function(url, data, callback) {
        $.ajax({
            url: url,
            dataType: 'jsonp',
            data: data,
            success: callback
        });
    };

    var model = {
        loadData: function() {
            $.jsonp(config.dataURL, {}, loadDataCallback);
        }
    };

    model.loadData();

    function loadDataCallback(data) {
        stock = data.data;
        console.log(stock.stockDataList[0])
        $("#stock-num").html(stock.stockDataList[0].stockCode)
    }

    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts',
            'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('chart-body'));

            var option = {
                title : {
                    text : '',
                    subtext : ''
                },
                tooltip : {
                    trigger: 'item',
                    formatter : function (params) {
                        var date = new Date(params.value[0]);
                        data = date.getFullYear() + '-'
                        + (date.getMonth() + 1) + '-'
                        + date.getDate() + ' '
                        + date.getHours() + ':'
                        + date.getMinutes();
                        return data + '<br/>'
                            + params.value[1] + ', '
                            + params.value[2];
                    }
                },
                toolbox: {
                    show : false,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                dataZoom: {
                    show: true,
                    start : 70
                },
                legend : {
                    data : ['series1']
                },
                grid: {
                    y2: 80
                },
                xAxis : [
                    {
                        type : 'time',
                        splitNumber:15
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name: '',
                        type: 'line',
                        showAllSymbol: true,
                        symbolSize: function (value){
                            return 2;
                        },
                        data: (function () {
                            var d = [];
                            var len = 0;
                            var now = new Date();
                            var value;
                            while (len++ < 200) {
                                d.push([
                                    new Date(2014, 9, 1, 0, len * 10000),
                                    (Math.random()*30).toFixed(2) - 0,
                                    (Math.random()*100).toFixed(2) - 0
                                ]);
                            }
                            return d;
                        })()
                    }
                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    );

})(jQuery, window);
