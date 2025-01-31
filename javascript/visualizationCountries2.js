// visualizationCountries.js

import * as Constants from './constants.js';


function createSVG(margin, width, height)
{
    // Creazione del contenitore SVG
    const svg = d3.select("#stacked_bar_chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    return svg
}

function handleData(timeseriesCountries)
{
    var timeSeriesCountriesAllSurfaces = [];

    timeseriesCountries.forEach(element => {
        delete element[""];
        timeSeriesCountriesAllSurfaces.push(element.getAllSurfacesCountries());
    });

    return timeSeriesCountriesAllSurfaces.map((item, index) => ({ timestamp: index+1970, ...item }));

}

export function drawStackedBarChart(timeseriesCountries, avgHeightForSurface)
{

    // Handle data for stacked bar chart
    var data = handleData(timeseriesCountries);

    // Calculate percentage for each key
    data.forEach(d => {
        const total = Object.keys(d)
            .filter(key => key !== "timestamp")
            .reduce((sum, key) => sum + d[key], 0);

        Object.keys(d)
            .filter(key => key !== "timestamp")
            .forEach(key => {
                d[key] = d[key] / total; // Normalize to percentage
            });
    });

    // Convert data into available format
    const keys = Object.keys(data[0]).filter(key => key !== "timestamp");
    const stack = d3.stack().keys(keys);
    const stackedData = stack(data);

    // Set up chart dimensions
    const margin = { top: 20, right: 50, bottom: 90, left: 60 }; // Increased right margin for second Y axis
    const width = (window.innerWidth * 0.9) - margin.left - margin.right;
    const height = (window.innerHeight * 0.8) - margin.top - margin.bottom;

    // Calculate average height for each year
    const avgHeight = avgHeightForSurface.Clay.map((_, index) => {
        return (avgHeightForSurface.Clay[index] + avgHeightForSurface.Grass[index] + avgHeightForSurface.Hard[index]) / 3;
    });

    // Create scale for X axis (years)
    const x = d3.scaleBand()
        .domain(data.map(d => d.timestamp))
        .range([0, width])
        .padding(0.1);

    // Create scale for Y axis (percentages, 0 to 1)
    const y = d3.scaleLinear()
        .domain([0, 1]) // 0% to 100%
        .nice()
        .range([height, 0]);


    // Create the SVG container
    const svg = createSVG(margin, width, height);

    // Create a tooltip
    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("padding", "5px 10px")
        .style("border-radius", "5px")
        .style("pointer-events", "none")
        .style("opacity", 0); // Initially hidden

    // Add stacked bars
    svg.selectAll(".layer")
        .data(stackedData)
        .enter().append("g")
        .attr("class", "layer")
        .attr("fill", (d, i) => Constants.countryColors[keys[i]]) // Use color mapping
        .each(function (d, i) {
            const group = d3.select(this);
            group.selectAll("rect")
                .data(d)
                .enter().append("rect")
                .attr("x", d => x(d.data.timestamp))
                .attr("y", d => y(d[1]))
                .attr("height", d => y(d[0]) - y(d[1]))
                .attr("width", x.bandwidth())
                .style("stroke-width", "0px") // Initial border width
                .style("stroke", "black") // Border color
                .on("mouseover", function (event, d) {
                    d3.select(this)
                        .style("stroke-width", "1px"); // Highlight border
                    var countryName = Constants.countryNames[keys[i]];
                    var percentage = ((d[1] - d[0]) * 100).toFixed(2);
                    // Show tooltip
                    tooltip.style("opacity", 1)
                        .html(`<strong>Country:</strong> ${countryName} (${keys[i]})<br><strong>Percentage:</strong> ${percentage}%`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 20) + "px");
                })
                .on("mousemove", function (event) {
                    // Update tooltip position
                    tooltip.style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 20) + "px");
                })
                .on("mouseout", function () {
                    d3.select(this)
                        .style("stroke-width", "0px"); // Reset border

                    // Hide tooltip
                    tooltip.style("opacity", 0);
                });
        });

    // Add X axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add left Y axis (percentages)
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y).tickFormat(d => `${(d * 100).toFixed(0)}%`)); // Format ticks as percentages

    // Y axis labels styling
    svg.selectAll(".y.axis text")
        .style("font-size", "12px");

    // Add X-axis label ("Years")
    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 45)
        .attr("text-anchor", "middle")
        .text("Years")
        .style("font-size", "14px");

    // Add left Y-axis label ("Percentage")
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 10)
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .text("Percentage of matches played")
        .style("font-size", "14px");

    
}
