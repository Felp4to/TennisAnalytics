// visualizationAge.js

// Funzione per trovare il minimo tra tutti gli array
function getMinFromArrays(...arrays) {
    return Math.min(...arrays.flat());
}

// Funzione per trovare il massimo tra tutti gli array
function getMaxFromArrays(...arrays) {
    return Math.max(...arrays.flat());
}


export function drawLineChart(avgAgesForSurface) {
    // Set up chart dimensions
    const margin = { top: 60, right: 150, bottom: 90, left: 50 };  // Increased top margin for legend
    const width = (window.innerWidth * 0.9) - margin.left - margin.right;
    const height = (window.innerHeight * 0.8) - margin.top - margin.bottom;

    const colors = {
        Clay: "#E9967A", // Darker pastel orange (dark salmon)
        Grass: "#66C266", // Darker pastel green
        Hard: "#5C99C2", // Darker pastel blue
        Average: "#A9A9A9" // Darker pastel gray (dark gray)
    };
    
    // Calculate min and max values
    const minValue = getMinFromArrays(avgAgesForSurface.Clay, avgAgesForSurface.Grass, avgAgesForSurface.Hard);
    const maxValue = getMaxFromArrays(avgAgesForSurface.Clay, avgAgesForSurface.Grass, avgAgesForSurface.Hard);

    // Create the SVG container
    const svg = d3.select("#linechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create the linear scale for years
    const xScale = d3.scaleLinear()
        .domain([1970, 2024]) // Year range
        .range([0, width]);   // Pixel range

    // Create the X axis
    const xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d")) // Format values as integers
        .ticks(55);

    const yScale = d3.scaleLinear()
        .domain([minValue - 2, maxValue + 2])
        .range([height, 0]);

    const yAxis = d3.axisLeft(yScale);

    // Add X axis to the SVG
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis to the SVG
    svg.append("g")
        .call(yAxis);

    // Create a tooltip
    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("visibility", "hidden");

    // Define the line generator
    const line = d3.line()
        .x((d, i) => xScale(i + 1970)) // X values are indices + 1970
        .y(d => yScale(d));

    // Calculate the average for each year
    const avgData = avgAgesForSurface.Clay.map((_, i) => {
        return (
            (avgAgesForSurface.Clay[i] + avgAgesForSurface.Grass[i] + avgAgesForSurface.Hard[i]) / 3
        );
    });

    // Draw the line for each surface type
    Object.keys(avgAgesForSurface).forEach(surface => {
        const path = svg.append("path")
            .datum(avgAgesForSurface[surface])
            .attr("fill", "none")
            .attr("stroke", colors[surface])
            .attr("stroke-width", 2.5)
            .attr("d", line);

        // Add hover interaction for tooltip on lines
        path.on("mouseover", (event) => {
                tooltip.style("visibility", "visible")
                    .text(surface);
            })
            .on("mousemove", (event) => {
                tooltip.style("top", `${event.pageY - 10}px`)
                    .style("left", `${event.pageX + 10}px`);
            })
            .on("mouseout", () => {
                tooltip.style("visibility", "hidden");
            });

        // Add circles for each data point
        svg.selectAll(`.circle-${surface}`)
            .data(avgAgesForSurface[surface])
            .enter()
            .append("circle")
            .attr("class", `circle-${surface}`)
            .attr("cx", (d, i) => xScale(i + 1970))
            .attr("cy", d => yScale(d))
            .attr("r", 4)
            .attr("fill", colors[surface])
            .attr("stroke", "black")
            .attr("stroke-width", 0.5)
            // Add hover interaction for tooltip on circles
            .on("mouseover", (event, d) => {
                tooltip.style("visibility", "visible")
                    .text(`Surface: ${surface} - Age: ${d.toFixed(1)} years`);
            })
            .on("mousemove", (event) => {
                tooltip.style("top", `${event.pageY - 10}px`)
                    .style("left", `${event.pageX + 10}px`);
            })
            .on("mouseout", () => {
                tooltip.style("visibility", "hidden");
            });
    });

    // Draw the average line
    const avgPath = svg.append("path")
        .datum(avgData)
        .attr("fill", "none")
        .attr("stroke", colors.Average)
        .attr("stroke-width", 2)
        .attr("d", line);

    // Add circles for average line
    svg.selectAll(".circle-Average")
        .data(avgData)
        .enter()
        .append("circle")
        .attr("class", "circle-Average")
        .attr("cx", (d, i) => xScale(i + 1970))
        .attr("cy", d => yScale(d))
        .attr("r", 4)
        .attr("fill", colors.Average)
        .attr("stroke", "black")
        .attr("stroke-width", 0.5)
        .on("mouseover", (event, d) => {
            tooltip.style("visibility", "visible")
                .text(`Average Age: ${d.toFixed(1)} years`);
        })
        .on("mousemove", (event) => {
            tooltip.style("top", `${event.pageY - 10}px`)
                .style("left", `${event.pageX + 10}px`);
        })
        .on("mouseout", () => {
            tooltip.style("visibility", "hidden");
        });

    // Add label for X-axis (Years)
    svg.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.bottom - 30})`)
        .style("text-anchor", "middle")
        .text("Years");

    // Add label for Y-axis (Age in years)
    svg.append("text")
        .attr("transform", "rotate(-90)")  // Rotate the label for Y-axis
        .attr("y", 0 - margin.left + 15)  // Position it to the left of the Y-axis
        .attr("x", 0 - (height / 2))  // Center the label vertically along the Y-axis
        .style("text-anchor", "middle")
        .text("Age (years)");

    // Add the legend
    const legend = svg.append("g")
        .attr("transform", `translate(${(width / 2)-125}, -30)`);  // Center the legend above the chart

    let offsetX = 0;

    Object.keys(colors).forEach((surface, index) => {
        const legendGroup = legend.append("g")
            .attr("transform", `translate(${offsetX}, 0)`);

        legendGroup.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", colors[surface]);

        legendGroup.append("text")
            .attr("x", 25)
            .attr("y", 10)
            .text(surface)
            .style("font-size", "14px")
            .attr("alignment-baseline", "middle");

        offsetX += 80;  // Space between legend items
    });
}














