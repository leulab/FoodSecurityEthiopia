$(function () {
	Highcharts.chart('avg_dietary_engy', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12','2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Average dietary energy supply adequacy'
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
				data: [71,71,72,72,75,77,78,80,81,83,85,87,87,89,90,91,92,93,95,96,97,97,98,98,99]
				},
			   { 
			   name: 'Least Developed ',
			   data: [95,94,93,93,93,93,94,95,95,96,97,98,99,100,100,101,102,102,103,104,104,105,105,105,105]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [98,97,97,97,97,97,97,98,98,98,99,100,101,102,103,104,105,106,107,107,108,109,109,109,110]},
			   { 
			   name: 'Low Income Economies ',
			   data: [95,94,93,92,92,93,93,94,95,96,96,97,98,99,100,100,101,101,102,103,103.0,103.0,104.0,104.0,104.0]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [108,108,109,109,110,110,110,111,110,110,109,108,108,108,109,110,112,113,113,114,114.0,114.0,114.0,115.0,115.0]}]
	}); 
});
$(function () {
	Highcharts.chart('avg_food_prod', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12','2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Average value of food production'
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
				data: [0,67,65,67,72,76,76,74,72,75,79,83,86,89,92,93,95,97,102,106,110,110,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [121,114,112,112,112,113,114,115,117,119,120,122,124,126,129,132,136,139,144,147,149,149,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [202,170,166,161,156,154,153,155,156,159,161,165,167,170,172,176,180,183,187,192,194,196,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [128,120,118,117,116,116,117,119,121,123,124,126,128,130,133,136,139,142,146,148,150.0,150.0,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [162,163,165,166,168,169,170,170,171,172,171,173,175,179,184,189,195,197,200,203,208.0,212.0,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('shr_dietary_engy', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12','2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Share of dietary energy supply derived from cereals, roots and tubers'
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
				data: [0,82,83,82,82,82,82,82,82,82,82,81,80,79,79,79,78,77,77,76,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [72,73,73,73,73,73,72,72,72,72,72,72,71,70,70,70,69,69,68,68,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [63,67,67,67,67,67,67,67,66,67,66,66,66,65,65,64,64,64,63,63,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [71,72,72,72,72,72,71,71,71,72,71,71,70,70,69,69,69,68,68,68,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [65,65,65,65,64,64,64,63,63,63,63,62,62,62,61,61,60,60,60,60,,,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('avg_protein_supply', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12','2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Average protein supply'
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
				data: [0,42,43,43,45,47,48,48,49,51,52,53,54,55,56,57,57,59,60,61,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [48,47,47,47,47,47,48,48,49,49,50,51,52,52,53,53,54,55,56,57,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [62,58,58,58,58,58,58,58,58,59,59,60,61,62,62,63,63,64,65,66,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [49,48,48,48,48,48,48,49,49,50,50,51,52,53,53,54,54,55,56,56,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [57,57,58,58,58,59,59,59,59,59,59,58,58,59,59,60,62,62,63,64,,,,,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('avg_protein_animal', {
		chart: {
			type: 'line'
		},
		title: {
			text: false
		},
		xAxis: {
			categories: ['1990-92','1991-93','1992-94','1993-95','1994-96','1995-97','1996-98','1997-99','1998-00',
'1999-01','2000-02','2001-03','2002-04','2003-05','2004-06','2005-07','2006-08','2007-09','2008-10','2009-11','2010-12','2011-13','2012-14*','2013-15*','2014-16*']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Average supply of protein of animal origin'
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
				data: [0,5,5,5,5,5,5,5,5,5,6,7,7,7,7,7,7,8,8,8,,,,,,,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [9,8,8,8,8,8,8,9,9,9,9,9,10,10,10,11,11,11,12,12,,,,,,,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [17,15,15,14,14,14,14,14,14,14,14,14,15,15,15,15,16,16,16,16,,,,,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [9,8,8,8,8,8,8,9,9,9,9,9,10,10,10,11,11,11,11,12,,,,,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [12,12,12,12,13,13,13,13,13,13,13,14,14,14,15,15,16,16,16,16,,,,,,,]}]
	}); 
});