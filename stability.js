$(function () {
	Highcharts.chart('cereal_im_dependency', {
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
				text: 'Cereal import dependency ratio'
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
				data: [0,7.9,17.3,11.1,8.9,4.6,4.4,5.7,9.9,10.8,10.7,12.1,10.6,9.9,6.0,6.0,7.3,9.9,11.3,10.7,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [13.1,12.7,12.8,11.6,11.9,12.1,12.8,13.5,14.3,14.1,14.2,14.5,14.8,15.0,15.0,14.5,13.8,13.7,13.8,13.9,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [14.0,9.1,11.9,6.9,5.3,3.1,3.7,2.7,3.4,3.5,4.7,4.3,4.2,4.4,4.3,2.8,2.1,2.9,3.5,3.8,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [11.1,11.3,11.2,9.6,9.1,9.9,10.4,11.2,12.0,12.2,12.2,12.5,12.7,12.8,12.4,12.1,11.4,11.7,11.5,12.2,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [8.7,8.2,8.1,7.4,6.7,6.7,6.8,7.3,7.9,7.4,6.6,5.6,5.2,5.3,5.5,6.3,6.0,5.3,5.4,5.6,,,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('aerable_land', {
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
				text: 'Percent of arable land equipped for irrigation'
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
				data: [0,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,3.1,3.2,3.3,3.4,3.5,3.6,3.8,4.1,4.3,4.4,4.5,4.7,5.0,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [9.9,10.2,10.4,10.7,10.9,11.0,11.0,11.1,11.3,11.5,11.7,11.7,11.7,11.7,11.7,11.7,11.6,11.4,11.3,11.2,11.1,11.1,11.2,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [15.9,16.2,16.2,16.2,16.0,15.8,15.6,15.5,15.5,15.5,15.5,15.4,15.3,15.1,15.0,14.9,14.8,14.7,14.6,14.4,14.3,14.2,14.2,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [8.4,8.7,8.8,8.9,8.9,8.8,8.7,8.8,8.8,8.8,8.7,8.6,8.5,8.4,8.3,8.3,8.3,8.2,8.1,8.0,7.9,7.9,7.9,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [26.2,26.6,26.9,27.3,27.8,28.3,28.8,29.2,29.7,30.3,30.9,31.3,31.6,32.0,32.5,32.8,33.1,33.5,33.9,34.1,32.9,33.1,33.4,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('import_over_total', {
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
				text: 'Value of food imports over total merchandise exports'
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
				data: [0,59,85,65,56,33,26,25,40,52,56,78,53,37,27,30,51,60,61,55,50,48,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [31,32,33,31,30,28,28,27,25,22,20,21,20,18,16,14,14,14,15,16,16,16,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [28,24,24,19,17,16,16,15,14,12,12,12,11,10,9,9,8,9,9,9,8,8,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [30,30,31,29,28,27,27,27,28,26,25,25,25,25,24,23,22,24,24,25,24,24,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [12,12,11,11,12,11,11,11,10,9,9,9,8,8,8,8,8,9,9,9,9,9,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('political_stability', {
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
				text: 'Political stability and absence of violence/terrorism'
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
				data: [0,0,0,0,0,0,-1.10,,-0.72,,-1.01,,-1.28,-1.43,-1.27,-1.65,-1.70,-1.76,-1.70,-1.62,-1.61,-1.49,-1.54,-1.38,-1.32,-1.48,]
				},
			   { 
			   name: 'Least Developed ',
			   data: []},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: []},
			   { 
			   name: 'Low Income Economies ',
			   data: []} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: []}]
	}); 
});
$(function () {
	Highcharts.chart('domestic_food_volatility', {
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
				text: 'Domestic food price volatility'
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
				data: [0,0,0,0,0,0,0,0,0,0,8.8,11.1,8.3,6.9,13.1,8.7,7.3,6.9,15.3,17.8,4.0,12.2,11.4,10.8,9.0,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [0,0,0,0,0,0,0,0,0,0,7.4,4.7,4.8,3.0,5.7,5.8,9.2,4.6,9.2,8.0,3.5,3.1,4.6,8.9,7.3,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [0,0,0,0,0,0,0,0,0,0,5.5,6.9,6.0,4.6,5.4,7.3,8.6,4.9,11.6,9.9,3.5,5.5,10.2,9.3,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [0,0,0,0,0,0,0,0,0,0,4.6,4.2,3.7,2.9,4.8,5.9,7.9,4.7,7.9,8.8,2.9,3.4,4.8,8.2,2.6,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [0,0,0,0,0,0,0,0,0,0,4.4,3.8,4.0,2.9,3.8,6.8,6.4,5.4,8.2,7.6,4.0,4.3,3.9,6.0,8.5,,]}]
	}); 
});
$(function () {
	Highcharts.chart('per_capita_food_volitility', {
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
				text: 'Per capita food production variability'
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
				data: [0,0,0,0,0,0,0,0,4.7,5.4,5.3,5.9,4.1,2.8,2.7,2.6,2.3,1.8,2.5,2.7,2.8,2.8,2.8,2.6,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [2.9,2.8,2.6,1.3,2.7,3.7,3.6,2.5,1.2,1.1,1.9,1.8,1.8,1.3,0.5,1.1,1.2,1.3,1.3,1.5,0.7,1.5,1.9,3.1,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [14.2,12.9,10.2,5.4,13.3,17.5,16.3,12.1,2.3,2.4,4.6,4.4,5.5,5.4,4.5,4.0,2.0,1.5,1.2,1.0,1.5,2.0,2.7,6.0,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [3.5,3.3,3.4,1.6,3.1,4.3,4.8,3.3,1.2,0.8,2.1,2.0,2.1,1.5,0.9,1.0,1.2,1.4,1.4,1.5,0.8,1.1,1.9,3.0,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [2.8,3.0,3.0,1.5,1.3,1.3,1.0,1.4,1.4,1.6,1.4,1.6,0.9,3.0,3.0,2.6,2.8,3.7,2.9,3.5,3.2,3.4,3.5,3.4,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('food_variability', {
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
				text: 'Per capita food supply variability'
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
				data: [13,6,8,15,22,19,13,26,32,27,23,16,17,16,12,21,24,23,33,31,30,19,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [30,23,7,9,21,28,23,16,5,7,13,13,10,6,6,6,3,4,3,4,4,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [104,100,109,201,235,240,206,69,56,52,45,39,30,18,12,10,16,15,8,8,8,14,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [26,19,7,7,18,23,20,17,6,7,13,12,10,6,5,5,5,4,4,6,6,5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [25,53,58,75,76,75,57,19,6,7,7,10,21,31,35,27,13,17,33,40,33,18,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]}]
	}); 
});