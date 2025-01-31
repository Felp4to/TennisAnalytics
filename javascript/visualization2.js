// visualization2.js

import * as Constants from './constants.js';


// Configuration for the histogram
const margin = { top: 5, right: 30, bottom: 100, left: 50 };
const width = ((screen.width * 4) / 5) - margin.left - margin.right;
const height = ((screen.height * 4) / 5) - margin.top - margin.bottom;

// array histogram data
var arraySurfaces = null;

// corrent query
var current_query = 0;

// add legend
function addLegend(svg, currentData, x0, y) {
    const legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width + margin.right - 100}, 20)`);

    Constants.SURFACES.forEach((type, index) => {
        const legendItem = legend.append("g")
            .attr("transform", `translate(0, ${index * 20})`)
            .style("cursor", "pointer") // Cambia il cursore per indicare che è cliccabile
            .on("click", () => {
                projectionSurface(svg, currentData, type, x0, y);
            });
        
        // Rettangolo colorato
        legendItem.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", Constants.COLOR_SURFACES[type]);
        
        // Testo dell'etichetta
        legendItem.append("text")
            .attr("x", 20)
            .attr("y", 12)
            .attr("font-size", "12px")
            .text(type);
    });
}

function drawYAxis(svg, yScale)
{
    // Rimuove l'asse Y esistente, se presente
    svg.select(".y-axis").remove();

    // Disegna l'asse Y utilizzando la scala specificata
    svg.append("g")
        .attr("class", "y-axis")
        .call(d3.axisLeft(yScale));
}

// Main function to draw the histogram
export function drawHistogram(avgHeightForSurface, avgAgesForSurface)
{
    // Validate input data
    if (!avgHeightForSurface || !avgAgesForSurface) {
        console.error("Invalid input data");
        return;
    }

    avgAgesForSurface['Grass'][50] = 28;
    avgAgesForSurface['Grass'][54] = 28;

    console.log(avgAgesForSurface);

    // Generate array of years
    const currentYears = d3.range(1970, 1970 + avgHeightForSurface["Clay"].length);

    // Structure the data
    const currentData = currentYears.map((year, i) => ({
        year,
        Clay: avgHeightForSurface["Clay"][i],
        Grass: avgHeightForSurface["Grass"][i],
        Hard: avgHeightForSurface["Hard"][i],
    }));

    // Structure the data
    const currentData2 = currentYears.map((year, i) => ({
        year,
        Clay: avgAgesForSurface["Clay"][i],
        Grass: avgAgesForSurface["Grass"][i],
        Hard: avgAgesForSurface["Hard"][i],
    }));

    // Add to the SVG container
    const svg = d3.select("#histogram")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scale for X-axis
    const x0 = d3.scaleBand()
        .domain(currentYears)
        .range([0, width])
        .padding(0.3);

    // Scale for Y-axis
    const yMin = Math.min(...currentData.map(d => Math.min(d.Clay, d.Grass, d.Hard))) - 3;
    const yMax = Math.max(...currentData.map(d => Math.max(d.Clay, d.Grass, d.Hard)));
    const y = d3.scaleLinear()
        .domain([yMin, yMax])
        .nice()
        .range([height, 0]);

    const yMin2 = Math.min(...currentData2.map(d => Math.min(d.Clay, d.Grass, d.Hard))) - 3;
    const yMax2 = Math.max(...currentData2.map(d => Math.max(d.Clay, d.Grass, d.Hard)));
    const y2 = d3.scaleLinear()
        .domain([yMin2, yMax2])
        .nice()
        .range([height, 0]);

    // X-axis
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x0).tickFormat(d => d));

    // Y-axis
    //svg.append("g")
    //    .attr("class", "y-axis")
    //   .call(d3.axisLeft(y));

    drawYAxis(svg, y);

    // Y-axis label
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 15)
        .attr("transform", "rotate(-90)")
        .text("Height");

    // X-axis label
    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height + margin.bottom - 50)
        .text("Years");

    /////////////////////////

    var types = ["Clay", "Grass", "Hard"];
    //var types = ["Clay"];
    const currentDataA = transformData(currentData, types);
    //const arraySurfaces2 = transformData(currentData2, types);

    const arraySurfaces = currentData.flatMap(d => [
        { year: d.year, type: "Clay", value: d.Clay },
        { year: d.year, type: "Grass", value: d.Grass },
        { year: d.year, type: "Hard", value: d.Hard }
    ]);

    const arraySurfaces2 = currentData2.flatMap(d => [
        { year: d.year, type: "Clay", value: d.Clay },
        { year: d.year, type: "Grass", value: d.Grass },
        { year: d.year, type: "Hard", value: d.Hard }
    ]);
    
    drawMultipleHistogram(svg, arraySurfaces, x0, y);

    addLegend(svg, currentData, x0, y);
    
    // Ripristina tutte le barre
    document.getElementById("updateButtonHeight").addEventListener("click", function () 
    {
        deleteBars();
        drawYAxis(svg, y);
        updateYAxisLabel(svg, "Height");
        drawMultipleHistogram(svg, arraySurfaces, x0, y);
        current_query = 0;
    });

    // Ripristina tutte le barre
    document.getElementById("updateButtonAge").addEventListener("click", function () 
    {
        deleteBars();
        drawYAxis(svg, y2);
        updateYAxisLabel(svg, "Age");
        drawMultipleHistogram(svg, arraySurfaces2, x0, y2);
        current_query = 1;
    });
    
    // Ripristina tutte le barre
    document.getElementById("tutto").addEventListener("click", function () 
    {
        deleteBars();
        drawMultipleHistogram(svg, avgAgesForSurface, x0, y);
    });

    document.getElementById("clay").addEventListener("click", function () 
    {
        projectionSurface(svg, (current_query === 0) ? currentData : currentData2, ["Clay"], x0, (current_query === 0) ? y : y2);
    });

    document.getElementById("grass").addEventListener("click", function () 
    {
        projectionSurface(svg, (current_query === 0) ? currentData : currentData2, ["Grass"], x0, (current_query === 0) ? y : y2);
    });

    document.getElementById("hard").addEventListener("click", function () 
    {
        projectionSurface(svg, (current_query === 0) ? currentData : currentData2, ["Hard"], x0, (current_query === 0) ? y : y2);
    });

}

function projectionSurface(svg, currentData, surface, x0, y)
{
    deleteBars();
    drawSingleHistogram(svg, transformData(currentData, [surface]), surface, x0, y);
}

// clean bars
function deleteBars()
{
    d3.selectAll('.bar-Clay, .bar-Grass, .bar-Hard').remove(); 
}

function updateYAxisLabel(svg, newText)
{
    svg.select(".y-axis-label")
        .text(newText);
}

// draw single histogram
function drawSingleHistogram(svg, arraySurface, surface, x0, y)
{
    // Draw histogram bars for Clay surface
    svg.selectAll(".bar-clay")
        .data(arraySurface)
        .enter()
        .append("rect")
        .attr("class", `bar-${surface}`)
        .attr("x", d => x0(d.year))
        .attr("y", d => y(d.value))
        .attr("width", x0.bandwidth())
        .attr("height", d => height - y(d.value))
        .attr("fill", Constants.COLOR_SURFACES[surface]);
}

// draw multiple histogram
function drawMultipleHistogram(svg, arraySurfaces, x0, y)
{
    // Draw histogram bars for Clay, Grass, and Hard surfaces with pastel colors
    svg.selectAll(".bar-surface")
    .data(arraySurfaces)
    .enter()
    .append("rect")
    .attr("class", d => `bar-${d.type}`)
    .attr("x", d => x0(d.year) + (d.type === "Grass" ? x0.bandwidth() / 3 : (d.type === "Hard" ? 2 * x0.bandwidth() / 3 : 0)))
    .attr("y", d => y(d.value))
    .attr("width", x0.bandwidth() / 3)
    .attr("height", d => height - y(d.value))
    .attr("fill", d => {
        return Constants.COLOR_SURFACES[d.type];
    });
}

function transformData(currentData, types)
{
    return currentData.flatMap(d =>
        types.map(type => ({
            year: d.year,
            type: type,
            value: d[type]
        }))
    );
}





