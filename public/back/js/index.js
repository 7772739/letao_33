/**
 * Created by 54721 on 2019/1/4.
 */
$(function() {

    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.querySelector(".echarts_left"));
  
    // 指定图表的配置项和数据
    var option1 = {
      title: {
        text: '2019年注册人数'
      },
      //提示框组件
      tooltip: {},
      //图例
      legend: {
        data:['人数']
      },
      //X轴对应的数据
      xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
      },
      //Y轴对应的数据，根据数据动态生成，不要写死
      yAxis: {},

      series: [{
        name: '人数',
        type: 'line',//柱状图bar  折线图line 饼图pie
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);





    var myChart2 = echarts.init(document.querySelector(".echarts_right"));
  
    // 指定图表的配置项和数据
    var option2 = {
    // 大标题
    title : {
      text: '热门品牌销售',
      // 副标题文本
      subtext: '2019年1月',
      // 控制位置
      x:'center'
    },
    // 提示框组件
    tooltip : {
      trigger: 'item',  // 鼠标悬停在 item 数据项上时, 显示提示框
      // 格式化提示框文本 {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 图例
    legend: {
      orient: 'vertical',   // horizontal 水平的
      left: 'left',   // 居左显示
      data: ['耐克','阿迪','哥伦比亚','北面','始祖鸟']
    },
    series : [
      {
        name: '品牌热卖',   // 系列名称
        type: 'pie',   // 饼图
        radius : '55%',  // 设置圆的大小
        center: ['50%', '60%'],  // 控制圆心位置
        data:[
          {value:335, name:'耐克'},
          {value:310, name:'阿迪'},
          {value:234, name:'哥伦比亚'},
          {value:135, name:'北面'},
          {value:50, name:'始祖鸟'}
        ],
        // 额外的样式效果
        itemStyle: {
          // 添加阴影效果
          emphasis: {
            shadowBlur: 100,
            shadowOffsetX: 0,
            shadowColor: 'yellow'
          }
        }
      }
    ]
  };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
  
  })
  