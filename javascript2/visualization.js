// visualization.js

import * as Constants from './constants.js';
import * as Elements from './elements.js';


export function drawHistogram(avgHeightForSurface, avgAgesForSurface) {
  // Dati forniti per istogramma 1
  const data1 = avgHeightForSurface["Clay"];
  const data2 = avgHeightForSurface["Grass"];
  data2[50] = 188;
  const data3 = avgHeightForSurface["Hard"];

  // Dati forniti per istogramma 2
  const dataA = avgAgesForSurface["Clay"];
  const dataB = avgAgesForSurface["Grass"];
  dataB[50] = 27;
  const dataC = avgAgesForSurface["Hard"];

  // Impostazioni base del grafico
  const margin = { top: 5, right: 30, bottom: 100, left: 50 };
  const width = ((screen.width*4)/5) - margin.left - margin.right;
  const height = ((screen.height*4)/5) - margin.top - margin.bottom;

  // Anni corrispondenti ai dati
  let currentYears = d3.range(1970, 1970 + avgHeightForSurface["Clay"].length);

  // Creazione dei dati strutturati
  let currentData = currentYears.map((year, i) => ({
      year,
      Clay: avgHeightForSurface["Clay"][i],
      Grass: avgHeightForSurface["Grass"][i],
      Hard: avgHeightForSurface["Hard"][i]
  }));

  // Aggiunta del contenitore SVG
  const svg = d3.select("#histogram")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

  // click on svg
  //svg.on("click", function(event) {
  //    svg.selectAll("rect").attr("opacity", 1);
  //});

  // Scale
  let x0 = d3.scaleBand()
    .domain(currentYears)
    .range([0, width])
    .padding(0.4);

  const x1 = d3.scaleBand()
    .domain(["Clay", "Grass", "Hard"])
    .range([0, x0.bandwidth()])
    .padding(0.1);

  const xx1 = d3.scaleBand()
    .domain("Clay")
    .range([0, width])
    .padding(0.3);

  const xx2 = d3.scaleBand()
    .domain("Grass")
    .range([0, width])
    .padding(0.3);

  const xx3 = d3.scaleBand()
    .domain("Hard")
    .range([0, width])
    .padding(0.3);

  let y = d3.scaleLinear()
    .domain([d3.min(currentData, d => Math.min(d.Clay, d.Grass, d.Hard)) - 3,
             d3.max(currentData, d => Math.max(d.Clay, d.Grass, d.Hard))])
    .nice()
    .range([height, 0]);

  // Assi
  const xAxis = svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x0).tickFormat(d => d));
  
  const yAxis = svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));
  
  // Etichetta asse Y
  const yAxisLabel = svg.append("text")
    .attr("class", "y-axis-label")
    .attr("text-anchor", "middle")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .attr("transform", "rotate(-90)")
    .text("Altezza");
  
  // Colori
  const color = d3.scaleOrdinal()
    .domain(["Clay", "Grass", "Hard"])
    .range(["#D58A5B", "#A7C7A9", "#A0D6E6"]);

  // Funzione per aggiornare il grafico
  function updateBars(newData, yDomain, newYears, yLabelText) {
      currentData = newYears.map((year, i) => ({
          year,
          Clay: newData["Clay"][i],
          Grass: newData["Grass"][i],
          Hard: newData["Hard"][i]
      }));

      currentYears = newYears;

      x0.domain(currentYears);
      svg.selectAll(".x-axis")
        .transition()
        .duration(750)
        .call(d3.axisBottom(x0).tickFormat(d => d));

      y.domain(yDomain).nice();

      svg.selectAll(".y-axis")
        .transition()
        .duration(750)
        .call(d3.axisLeft(y));

      svg.select(".y-axis-label")
        .text(yLabelText);

      const bars = svg.selectAll("g.bar-group")
        .data(currentData, d => d.year);

      bars.join(
        enter => enter.append("g")
            .attr("class", "bar-group")
            .attr("transform", d => `translate(${x0(d.year)},0)`)
            .selectAll("rect")
            .data(d => ["Clay", "Grass", "Hard"].map(key => ({ key, value: d[key] })))
            .join("rect")
            .attr("class", d => `bar${d.key}`) // Imposta la classe dinamica
            .attr("x", d => x1(d.key))
            .attr("y", d => y(d.value))
            .attr("width", x1.bandwidth())
            .attr("height", d => height - y(d.value))
            .attr("fill", d => color(d.key)),
        
        update => update.selectAll("rect")
            .data(d => ["Clay", "Grass", "Hard"].map(key => ({ key, value: d[key] })))
            .join("rect")
            .attr("class", d => `bar${d.key}`) // Associa nuovamente la classe dinamica
            .transition()
            .duration(750)
            .attr("y", d => y(d.value))
            .attr("height", d => height - y(d.value))
            .attr("fill", d => color(d.key))
    );
  }

  // Creazione delle barre iniziali
  updateBars(avgHeightForSurface, [
      d3.min(currentData, d => Math.min(d.Clay, d.Grass, d.Hard)) - 5,
      d3.max(currentData, d => Math.max(d.Clay, d.Grass, d.Hard)) + 5
  ], currentYears, "Altezza");

  // Aggiunta etichette degli assi
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 50)
    .text("Anni");

  // Aggiunta della leggenda
  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width / 2 - 115}, ${height + 80})`);

  const legendItems = ["Clay", "Grass", "Hard"];
  legend.selectAll("g")
    .data(legendItems)
    .join("g")
    .attr("transform", (d, i) => `translate(${i * 100}, 0)`)
    .call(g => {
      g.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", d => color(d))
        .attr("class", "legend-rect")
        .on("click", function(event, d) {
            filterBars(d);
        });

      g.append("text")
        .attr("x", 20)
        .attr("y", 12)
        .text(d => d)
        .attr("font-size", "12px")
        .attr("text-anchor", "start");
    });

  // Funzione per filtrare le barre
  function filterBars(surface)
  {
      svg.selectAll("rect")
          .attr("opacity", d => d.key === surface ? 1 : (d.key ? 0.01 : 1));
  }

  // Ripristina tutte le barre
  document.getElementById("tutto").addEventListener("click", function () 
  {
      svg.selectAll("rect").attr("opacity", 1);
  });

  document.getElementById("updateButtonHeight").addEventListener("click", function () 
  {
      updateBars({ Clay: data1, Grass: data2, Hard: data3 }, [
          d3.min(data1.concat(data2).concat(data3)) - 5,
          d3.max(data1.concat(data2).concat(data3)) + 5
      ], d3.range(1970, 1970 + data1.length), "Altezza");
  });

  document.getElementById("updateButtonAge").addEventListener("click", function () 
  {
      updateBars({ Clay: dataA, Grass: dataB, Hard: dataC }, [
          d3.min(dataA.concat(dataB).concat(dataC)) - 1,
          d3.max(dataA.concat(dataB).concat(dataC)) + 1
      ], d3.range(1970, 1970 + dataA.length), "Età");
  });

}
