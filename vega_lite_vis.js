var vg_1 = "malaysia_map_crime_rates.vg.json";

// Embed the Vega-Lite JSON visualization into the div with id="map_idiom"
vegaEmbed('#map_idiom', vg_1).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = 'stacked_bar_chart_vg.json'


// Embed stacked bar chart
vegaEmbed('#stacked_bar_chart', vg_2).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "crime_type_donut.json";
vegaEmbed('#crime_donut_chart', vg_3).then(function(result) {
  console.log("Donut chart loaded successfully!");
}).catch(console.error);

var vg_4 = "scatter_plot.vg.json";
vegaEmbed('#scatter_plot', vg_4).then(function(result) {
  console.log("scatter plot loaded successfully!");
}).catch(console.error);

