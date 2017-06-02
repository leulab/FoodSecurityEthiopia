$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'inflation',
			type: 'line'
		},
		title: {
			text: 'Inflation'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Percentage'
			}
		},
		series: []
	};


	$.get('http://www.foodsecurityportal.org/api/countries/inflation/ethiopia.csv', function(data) {
		// Split the lines
		var lines = data.split('\n');
		$.each(lines, function(lineNo, line) {
			var items = line.split(',');
			

			// header line containes categories 
			if (lineNo == 0) {
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo > 0) options.xAxis.categories.push(item);
				});
			}

			// the rest of the lines contain data with their name in the first position
			else {
				var series = { 
					data: []
				};
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo == 0) {
						series.name = item;
					} else {
						series.data.push(parseFloat(item));
					}
				});         
				options.series.push(series);
			}   
		}); 
		var inflation_chart = new Highcharts.Chart(options);
	});
});

$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'agriculture_value',
			type: 'line'
		},
		title: {
			text: 'Agricultural land value added'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'percentage'
			}
		},
		series: []
	};


	$.get('http://www.foodsecurityportal.org/api/countries/agriculture-value-ad/ethiopia.csv', function(data) {
		// Split the lines
		var lines = data.split('\n');
		$.each(lines, function(lineNo, line) {
			var items = line.split(',');
			

			// header line containes categories
			if (lineNo == 0) {
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo > 0) options.xAxis.categories.push(item);
				});
			}

			// the rest of the lines contain data with their name in the first position
			else {
				var series = { 
					data: []
				};
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo == 0) {
						series.name = item;
					} else {
						series.data.push(parseFloat(item));
					}
				});         
				options.series.push(series);
			}   
		}); 
		var agri_value = new Highcharts.Chart(options);
	});
});

$(document).ready(function() {
	var options = {
		chart: {
			renderTo: 'population_undernorished',
			type: 'line'
		},
		title: {
			text: 'Population Undernorished'
		},
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Percentage'
			}
		},
		series: []
	};


	$.get('http://www.foodsecurityportal.org/api/countries/fao-population-under/ethiopia.csv', function(data) {
		// Split the lines
		var lines = data.split('\n');
		$.each(lines, function(lineNo, line) {
			var items = line.split(',');
			

			// header line containes categories
			if (lineNo == 0) {
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo > 0) options.xAxis.categories.push(item);
				});
			}

			// the rest of the lines contain data with their name in the first position
			else {
				var series = { 
					data: []
				};
				$.each(items, function(itemNo, item) {
					item = item.replace(/^"(.*)"$/, '$1');
					if (itemNo == 0) {
						series.name = item;
					} else {
						series.data.push(parseFloat(item));
					}
				});         
				options.series.push(series);
			}   
		}); 
		var population_undernorished = new Highcharts.Chart(options);
	});
});	

