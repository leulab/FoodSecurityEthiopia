$(function () {
	Highcharts.chart('access_improved_water', {
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
				text: 'Access to improved water source'
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
				data: [13.2,13.4,13.6,15.6,17.6,19.5,21.4,23.3,25.2,27.0,28.9,30.8,32.7,34.5,36.4,38.3,40.1,42.0,43.9,45.9,47.8,49.7,51.6,53.5,55.4,57.3,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [50.4,50.2,50.6,50.9,51.6,52.3,53.1,53.9,54.7,55.5,56.3,57.1,57.9,58.7,59.5,60.3,61.1,61.8,62.6,63.4,64.2,65.0,66.2,67.3,68.0,69.1,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [52.3,53.0,53.5,54.1,54.9,55.7,56.6,57.5,58.4,59.4,60.3,61.2,62.2,63.2,64.2,65.3,66.3,67.4,68.5,69.4,70.4,70.3,71.4,72.1,,,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [45.3,45.6,46.4,47.2,48.1,49.0,49.9,50.8,51.7,52.6,53.5,54.4,55.3,56.3,57.2,58.1,59.0,60.0,60.9,61.8,63.3,64.1,65.0,65.6,,,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [71.5,72.3,73.6,74.4,75.2,75.9,76.7,77.5,78.3,79.0,79.8,80.6,81.3,82.1,82.8,83.5,84.3,85.0,85.7,86.5,87.2,88.2,88.9,89.6,,,]}]
	}); 
});
$(function () {
	Highcharts.chart('acess_sanitation', {
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
				text: 'Access to improved sanitation facilities'
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
				data: [2.6,2.6,2.7,2.8,2.9,3.0,3.0,4.6,5.9,7.3,8.6,9.9,11.2,12.6,13.9,15.2,16.5,17.8,19.1,20.4,21.7,23.0,24.3,25.5,26.8,28.0,]
				},
			   { 
			   name: 'Least Developed ',
			   data: [19.3,22.7,23.2,23.5,23.9,24.4,25.0,25.8,26.5,27.3,28.0,28.7,29.5,30.2,30.9,31.6,32.3,32.9,33.6,34.2,34.8,35.2,35.9,35.9,36.4,37.4,]},
			   { 
			   name: 'LandLocked developing Countries ',
			   data: [30.2,29.8,31.5,32.7,33.7,33.7,33.8,34.3,34.7,35.3,36.2,36.7,37.3,37.9,38.4,39.0,39.6,39.9,40.4,41.0,41.5,41.2,41.7,42.2,42.6,43.0,]},
			   { 
			   name: 'Low Income Economies ',
			   data: [12.2,12.8,15.7,16.1,16.3,16.6,16.9,17.7,18.3,19.0,19.7,20.3,21.0,21.6,22.3,22.9,23.5,24.1,24.7,25.4,26.0,26.2,26.8,27.3,27.8,28.2,]} ,
			   { 
			   name: 'Lower-middle-Income Ecomomies ',
			   data: [28.9,30.0,31.0,31.9,34.3,35.2,36.0,36.9,37.7,38.6,39.5,40.4,41.2,42.1,43.0,43.9,44.7,45.6,46.5,47.3,48.1,48.9,49.7,50.5,51.3,51.9,]}]
	}); 
});
