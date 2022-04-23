class DashboardAnalytic{constructor(){this._customLegendBarChart=null,this._bubbleChart=null,this._smallDoughnutChart1=null,this._smallDoughnutChart2=null,this._smallDoughnutChart3=null,this._smallDoughnutChart4=null,this._smallDoughnutChart5=null,this._smallDoughnutChart6=null,this._smallLineChart1=null,this._smallLineChart2=null,this._smallLineChart3=null,this._smallLineChart4=null,this._initCustomLegendBarChart(),this._initSmallDoughnutCharts(),this._initConsumptionBubbleChart(),this._initCoinsLineCharts(),this._initEvents()}_initEvents(){document.documentElement.addEventListener(Globals.colorAttributeChange,(t=>{this._customLegendBarChart&&this._customLegendBarChart.destroy(),this._initCustomLegendBarChart(),this._bubbleChart&&this._bubbleChart.destroy(),this._initConsumptionBubbleChart(),this._smallDoughnutChart1&&this._smallDoughnutChart1.destroy(),this._smallDoughnutChart2&&this._smallDoughnutChart2.destroy(),this._smallDoughnutChart3&&this._smallDoughnutChart3.destroy(),this._smallDoughnutChart4&&this._smallDoughnutChart4.destroy(),this._smallDoughnutChart5&&this._smallDoughnutChart5.destroy(),this._smallDoughnutChart6&&this._smallDoughnutChart6.destroy(),this._initSmallDoughnutCharts(),this._smallLineChart1&&this._smallLineChart1.destroy(),this._smallLineChart2&&this._smallLineChart2.destroy(),this._smallLineChart3&&this._smallLineChart3.destroy(),this._smallLineChart4&&this._smallLineChart4.destroy(),this._initCoinsLineCharts()}))}_initConsumptionBubbleChart(){"undefined"!=typeof Chart&&(this._bubbleChart=new Chart(document.getElementById("bubbleChart"),{type:"bubble",data:{labels:"",datasets:[{borderWidth:2,label:["Patty"],backgroundColor:"rgba("+Globals.primaryrgb+",0.1)",borderColor:Globals.primary,data:[{x:240,y:15,r:15}]},{borderWidth:2,label:["Bread"],backgroundColor:"rgba("+Globals.quaternaryrgb+",0.1)",borderColor:Globals.quaternary,data:[{x:140,y:8,r:10}]},{borderWidth:2,label:["Pastry"],backgroundColor:"rgba("+Globals.tertiaryrgb+",0.1)",borderColor:Globals.tertiary,data:[{x:190,y:68,r:20}]}]},options:{plugins:{crosshair:!1,datalabels:{display:!1}},title:{display:!0,text:"Consumption"},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Fat"},ticks:{beginAtZero:!0,stepSize:20,min:0,max:100,padding:20}}],xAxes:[{scaleLabel:{display:!0,labelString:"Calories"},ticks:{stepSize:20,min:100,max:300,padding:20}}]},tooltips:ChartsExtend.ChartTooltip(),legend:{position:"bottom",labels:ChartsExtend.LegendLabels()}}}))}_initCustomLegendBarChart(){if(document.getElementById("customLegendBarChart")){const t=document.getElementById("customLegendBarChart").getContext("2d");this._customLegendBarChart=new Chart(t,{type:"bar",options:{cornerRadius:parseInt(Globals.borderRadiusMd),plugins:{crosshair:!1,datalabels:{display:!1}},responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{stacked:!0,gridLines:{display:!0,lineWidth:1,color:Globals.separatorLight,drawBorder:!1},ticks:{beginAtZero:!0,stepSize:200,min:0,max:800,padding:20}}],xAxes:[{stacked:!0,gridLines:{display:!1},barPercentage:.5}]},legend:!1,legendCallback:function(t){const a=t.canvas.parentElement.parentElement.querySelector(".custom-legend-container");a.innerHTML="";const r=t.canvas.parentElement.parentElement.querySelector(".custom-legend-item");for(let l=0;l<t.data.datasets.length;l++){var o=r.content.cloneNode(!0),e=t.data.datasets[l].data.reduce((function(t,a){return t+a}));o.querySelector(".text").innerHTML=t.data.datasets[l].label.toLocaleUpperCase(),o.querySelector(".value").innerHTML=e,o.querySelector(".value").style="color: "+t.data.datasets[l].borderColor+"!important",o.querySelector(".icon-container").style="border-color: "+t.data.datasets[l].borderColor+"!important",o.querySelector(".icon").style="color: "+t.data.datasets[l].borderColor+"!important",o.querySelector(".icon").setAttribute("data-acorn-icon",t.data.icons[l]),o.querySelector("a").addEventListener("click",(a=>{a.preventDefault();const r=t.getDatasetMeta(l).hidden;t.getDatasetMeta(l).hidden=!r,a.currentTarget.classList.contains("opacity-50")?a.currentTarget.classList.remove("opacity-50"):a.currentTarget.classList.add("opacity-50"),t.update()})),a.appendChild(o)}(new AcornIcons).replace()},tooltips:{enabled:!1,custom:function(t){var a=this._chart.canvas.parentElement.querySelector(".custom-tooltip");if(0!==t.opacity){if(a.classList.remove("above","below","no-transform"),t.yAlign?a.classList.add(t.yAlign):a.classList.add("no-transform"),t.body){var r=this,o=t.dataPoints[0].index,e=t.dataPoints[0].datasetIndex,l=a.querySelector(".icon");a.querySelector(".icon-container").style="border-color: "+t.labelColors[0].borderColor+"!important",l.style="color: "+t.labelColors[0].borderColor+";",l.setAttribute("data-acorn-icon",r._data.icons[e]),(new AcornIcons).replace(),a.querySelector(".text").innerHTML=r._data.datasets[e].label.toLocaleUpperCase(),a.querySelector(".value").innerHTML=r._data.datasets[e].data[o],a.querySelector(".value").style="color: "+t.labelColors[0].borderColor+";"}var s=this._chart.canvas.offsetTop,n=this._chart.canvas.offsetLeft;a.style.opacity=1,a.style.left=n+t.dataPoints[0].x-75+"px",a.style.top=s+t.caretY+"px"}else a.style.opacity=0}}},data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Breads",backgroundColor:"rgba("+Globals.primaryrgb+",0.1)",borderColor:Globals.primary,borderWidth:2,data:[213,434,315,367,289,354,242]},{label:"Cakes",backgroundColor:"rgba("+Globals.secondaryrgb+",0.1)",borderColor:Globals.secondary,borderWidth:2,data:[143,234,156,207,191,214,95]}],icons:["loaf","cupcake"]}}),this._customLegendBarChart.generateLegend()}}_initSmallDoughnutCharts(){document.getElementById("smallDoughnutChart1")&&(this._smallDoughnutChart1=ChartsExtend.SmallDoughnutChart("smallDoughnutChart1",[14,0],"PURCHASING")),document.getElementById("smallDoughnutChart2")&&(this._smallDoughnutChart2=ChartsExtend.SmallDoughnutChart("smallDoughnutChart2",[12,6],"PRODUCTION")),document.getElementById("smallDoughnutChart3")&&(this._smallDoughnutChart3=ChartsExtend.SmallDoughnutChart("smallDoughnutChart3",[22,8],"PACKAGING")),document.getElementById("smallDoughnutChart4")&&(this._smallDoughnutChart4=ChartsExtend.SmallDoughnutChart("smallDoughnutChart4",[1,5],"DELIVERY")),document.getElementById("smallDoughnutChart5")&&(this._smallDoughnutChart5=ChartsExtend.SmallDoughnutChart("smallDoughnutChart5",[4,6],"EDUCATION")),document.getElementById("smallDoughnutChart6")&&(this._smallDoughnutChart6=ChartsExtend.SmallDoughnutChart("smallDoughnutChart6",[3,8],"PAYMENTS"))}_initCoinsLineCharts(){this._smallLineChart1=ChartsExtend.SmallLineChart("smallLineChart1",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:"BTC / USD",data:[9415.1,9430.3,9436.8,9471.5,9467.2],icons:["chevron-bottom","chevron-top","chevron-top","chevron-top","chevron-bottom"],borderColor:Globals.primary,pointBackgroundColor:Globals.primary,pointBorderColor:Globals.primary,pointHoverBackgroundColor:Globals.foreground,pointHoverBorderColor:Globals.primary,borderWidth:2,pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2,pointHoverRadius:5,fill:!1}]}),this._smallLineChart2=ChartsExtend.SmallLineChart("smallLineChart2",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:"ETH / USD",data:[325.3,310.4,338.2,347.1,348],icons:["chevron-top","chevron-bottom","chevron-top","chevron-top","chevron-top"],borderColor:Globals.primary,pointBackgroundColor:Globals.primary,pointBorderColor:Globals.primary,pointHoverBackgroundColor:Globals.foreground,pointHoverBorderColor:Globals.primary,borderWidth:2,pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2,pointHoverRadius:5,fill:!1}]}),this._smallLineChart3=ChartsExtend.SmallLineChart("smallLineChart3",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:"LTC / USD",data:[43.3,42.8,45.3,45.3,41.4],icons:["chevron-top","chevron-bottom","chevron-top","circle","chevron-top"],borderColor:Globals.primary,pointBackgroundColor:Globals.primary,pointBorderColor:Globals.primary,pointHoverBackgroundColor:Globals.foreground,pointHoverBorderColor:Globals.primary,borderWidth:2,pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2,pointHoverRadius:5,fill:!1}]}),this._smallLineChart4=ChartsExtend.SmallLineChart("smallLineChart4",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:"XRP / USD",data:[.25,.253,.268,.243,.243],icons:["chevron-top","chevron-top","chevron-top","chevron-bottom","circle"],borderColor:Globals.primary,pointBackgroundColor:Globals.primary,pointBorderColor:Globals.primary,pointHoverBackgroundColor:Globals.foreground,pointHoverBorderColor:Globals.primary,borderWidth:2,pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2,pointHoverRadius:5,fill:!1}]})}}