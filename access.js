$(function () {
	Highcharts.chart('paved_road', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Percent of paved roads over total roads'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [15.0,15.0,15.0,15.0,15.0,15.5,15.3,15.3,14.0,13.3,12.0,12.0,12.0,12.9,19.1,11.0,11.6,13.7,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0,45.2,47.8,49.4,49.6,49.0,48.5,50.4,50.3,45.1,45.9,,,,47.0,,,,47.4,49.1,49.8,50.4,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [0]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [,45.2,47.8,49.4,49.6,49.0,48.5,50.4,50.3,45.1,45.9,,,,47.0,,,,47.4,49.1,49.8,50.4,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('road_density', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Road density'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [2.3,2.3,2.3,2.6,2.6,2.1,2.2,2.2,2.4,2.6,2.7,3.0,3.0,3.1,3.3,3.8,3.6,4.0,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0,0,0,5.9,5.7,6.0,6.0,6.0,,5.9,6.0,,,,,,,,,,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0]},
			   { 
			   name: 'Low Income Economies ',
			   data: [0,0,0,7.8,0,0,7.7,7.7,,7.8,7.8,,,,,,,,,,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [18.1,20.0,18.5,19.4,19.7,20.1,21.1,21.6,21.7,25.9,26.6,,,,,,,,,,,,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('rail_density', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Rail lines density'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [0.1,0.1,,,,,,,,,,,,,,,,,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0]},
			   { 
			   name: 'Low Income Economies ',
			   data: [0]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [0,0.7,0,0,0,0,0,0.7,0,0,0,0,0,0,0,0,0,0,0.7,,,,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('gdp_perchasing', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Gross domestic product per capita (in purchasing power equivalent)'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [652.4,584.8,515.2,562.5,560.7,575.6,626.9,627.3,588.1,600.8,619.1,651.4,642.5,610.9,674.5,733.5,791.0,858.1,925.7,980.9,1075.6,1165.2,1234.0,1330.4,1430.8,1529.9,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [1348.8,1333.0,1303.4,1267.7,1262.1,1292.1,1329.7,1361.2,1387.2,1409.9,1433.3,1473.6,1469.9,1506.8,1562.2,1641.6,1721.6,1823.4,1925.7,1966.7,2024.6,2068.4,2134.9,2198.9,2218.6,2261.7,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [2920.6,2732.5,2444.6,2298.1,2112.8,2054.6,2083.8,2105.7,2104.7,2136.1,2188.0,2283.3,2271.6,2345.1,2458.0,2611.1,2802.5,2999.7,3131.5,3177.0,3329.2,3450.2,3525.0,3668.9,3772.7,3818.0,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [1079.3,1051.5,988.1,968.1,961.3,971.1,1003.1,1012.2,1030.6,1039.7,1038.1,1060.1,1059.5,1065.8,1096.1,1137.5,1172.0,1220.3,1300.9,1336.1,1387.7,1433.3,1457.2,1504.1,1553.1,1584.1,]},
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [2777.1,2758.3,2771.4,2783.9,2818.4,2905.3,3018.3,3078.1,3047.3,3137.3,3216.9,3295.3,3363.4,3515.6,3735.2,3925.4,4150.7,4382.2,4514.6,4675.9,4947.8,5141.4,5328.8,5541.2,5792.4,6048.2,]}]
	}); 
});
$(function () {
	Highcharts.chart('domestic_food_index', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Domestic food price index'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [0,0,0,0,0,0,0,0,0,0,5.97,5.35,5.39,5.85,5.79,5.95,6.04,6.20,6.76,6.30,5.97,6.20,6.36,6.30,6.25,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0,0,0,0,0,0,0,0,0,0,7.69,7.56,7.53,7.59,7.53,7.72,7.84,7.85,7.93,7.83,7.97,8.06,8.07,7.97,,,]
			   },
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0,0,0,0,0,0,0,0,0,0,6.64,6.50,6.53,6.64,6.58,6.65,6.69,6.70,6.73,6.65,6.65,0,6.82,6.7,,,]
			   },
			   { 
			   name: 'Low Income Economies ',
			   data: [0,0,0,0,0,0,0,0,0,0,7.22,7.11,7.09,7.15,7.21,7.39,7.47,7.47,7.68,7.65,7.78,7.95,7.92,7.8,7.8,,]
			   },
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [0,0,0,0,0,0,0,0,0,0,5.72,5.64,5.62,5.55,5.53,5.58,5.65,5.64,5.72,5.65,5.77,5.67,5.62,5.8,5.7,,]
			   }]
	}); 
});
$(function () {
	Highcharts.chart('share_food', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990','1991','1992','1993','1994','1995','1996','1997','1998',
			'1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009',
			'2010','2011','2012','2013','2014','2015']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Share of food expenditure of the poor'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [0,0,0,0,0,0,0,0,0,71,0,0,0,0,57,,,,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0]},
			   { 
			   name: 'Low Income Economies ',
			   data: [0]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [0]}]
	}); 
});
$(function () {
	Highcharts.chart('undernorishment', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12',
'2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Prevalence of undernourishment'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [74.8,75.2,72.5,73.4,71.4,69.0,65.7,63.0,60.6,57.9,54.8,51.9,49.9,47.8,45.9,43.8,42.4,41.1,39.5,37.6,36.0,34.9,33.9,33.1,32.0,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [40.0,40.6,41.0,41.8,41.9,41.6,40.9,39.9,38.7,37.5,36.5,35.5,34.6,33.4,32.4,31.4,30.7,30.0,29.3,28.6,27.7,27.2,26.9,26.7,26.5,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [35.6,36.3,36.5,37.2,37.0,36.6,36.0,35.6,35.0,34.3,33.6,32.8,31.8,30.5,29.3,28.1,27.3,26.5,25.7,24.7,24.1,23.5,23.2,23.0,22.7,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [39.1,39.9,40.5,41.4,41.6,41.4,40.7,39.8,38.7,37.6,36.6,35.7,34.9,33.8,32.8,31.8,31.1,30.5,30.0,29.3,28.7,28.2,27.9,27.7,27.5,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [22.8,21.8,21.4,20.8,20.0,19.2,18.5,17.9,17.5,17.2,17.5,18.1,18.7,19.0,18.8,18.2,17.1,16.0,15.1,14.5,14.2,13.9,13.7,13.6,13.5,,]}]
	}); 
});
$(function () {
	Highcharts.chart('food_deficit', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12',
'2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Depth of the food deficit'
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color: (Highcharts.theme && Highcharts.theme.textColor) || 'green'
				}
			}
		},
		legend: {
			align: 'right',
			x: 0,
			verticalAlign: 'top',
			y: -10,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		tooltip: {
			headerFormat: '<b>{point.x}</b><br/>',
			pointFormat: '{series.name}: {point.y}'
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: false,
					color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
				}
			}
		},
		series: [{
				name: 'Ethiopia ',
				data: [644,673,640,631,607,580,543,515,488,457,424,395,375,357,341,324,314,304,291,276,264,256,250,244,236,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [306,314,317,322,322,317,309,300,290,281,273,266,260,252,245,237,233,228,224,219,212,209,207,208,208,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [274,285,284,287,285,280,273,268,262,254,247,239,231,221,212,204,198,192,186,179,173,168,166,165,163,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [299,308,313,319,319,315,308,300,290,282,274,268,263,256,248,240,236,232,230,225,220,216,214.0,214.0,214.0,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [161,154,150,146,140,134,129,125,122,121,123,128,133,136,135,131,123,114,108,104,102,100,99.0,96.0,95.0,,]}]
	}); 
});
