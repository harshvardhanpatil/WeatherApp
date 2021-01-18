import * as d3 from 'd3'
import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react';

const Barchart=({chartdata})=>{
    

    useEffect(()=>{
        var w=Math.floor(document.querySelector("#my_dataviz").getBoundingClientRect().width);
        var h=250;
        console.log("height",w,h)

        console.log(chartdata)
        let data;
        if(chartdata)
        {
            data=chartdata.map((d)=>{ return {Country:d.name,Value:d.main.temp}});

        }
        else{
            data=[
                {Country: "xyz", Value:45},
                {Country: "fdbsh", Value:65},
                {Country: "dgsghd", Value:36}
                
            ]

        }
        
        console.log(data)
        
        // set the dimensions and margins of the graph
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = w - margin.left - margin.right,
        height = h - margin.top - margin.bottom;

        // set the ranges
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.5);
        var y = d3.scaleLinear()
            .range([height, 0]);
            
        // append the svg object to the body of the page
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#my_dataviz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

        // Scale the range of the data in the domains
        x.domain(data.map(function(d) { return d.Country; }));
        y.domain([0, d3.max(data, function(d) { return d.Value; })]);

        // append the rectangles for the bar chart
        svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.Country); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Value); })
        .attr("height", function(d) { return height - y(d.Value); })
        .attr("fill","#51c2d5");

        svg.append("text")
        .text("In degree celcius")
        .attr("transform", "translate(-25," + height/2 + "),rotate(-90)")
        .style("font-size", "10px")
        .attr("text-anchor","middle")


        // add the x Axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0));

        // add the y Axis
        svg.append("g")
        .call(d3.axisLeft(y).tickSizeOuter(0));

    },[ ])


    return(<div id="my_dataviz"></div>)
}
export default Barchart