var width = 300,
    height = 400;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-300)
    .linkDistance(100)
    .size([width, height]);

var svg = d3.select("#navi").append("svg")
    .attr("width", width)
    .attr("height", height);
//var jsonString="{'nodes':[{'name':'cover','group':1,'size':50},{'name':'roof','group':1,'size':20},{'name':'ceil','group':1,'size':20}],'links':[{'source':0,'target':1,'value':1},{'source':0,'target':2,'value':8}]}";
//alert(jsonString);
//var dataNodes=[{'name':'cover','group':1,'wg':10,'size':50},{'name':'roof','group':1,'wg':10,'size':20},{'name':'ceil','group':1,'wg':10,'size':20}];
//var dataLinks=[{'source':0,'target':1,'value':1},{'source':0,'target':2,'value':8}];

//d3.json("test.json", function(json) {
	force
	  .nodes(dataNodes)
	  .links(dataLinks)
	  .start();
	
	var link = svg.selectAll("line.link")
	  .data(dataLinks)
	.enter().append("line")
	  .attr("class", "link")
	  .style("stroke-width", function(d) { return Math.sqrt(d.value); });

	/*var node = svg.selectAll("circle.node")
	  .data(json.nodes)
	.enter().append("circle")
	  .attr("class", "node")
	  .attr("r", function(d)
	  {
		return d.size;
	  })
	  .style("fill", function(d) { return color(d.group); })
	  .call(force.drag);*/
	//alert(node[0][0].cx.animVal.value);
	var nodes=svg.selectAll("a")
		.data(dataNodes)
		.enter().append("a")
		.attr("class","node")
		.attr("xlink:href",function(d)
		{
			var strWg=d.wg;
			return "?q="+strWg.substring(0,strWg.indexOf("("));
		})
		.call(force.drag);
	
	var circles=nodes.append("circle")
		.attr("r", function(d)
		{
			return d.size;
		})
		.style("fill", function(d) { return color(d.group); });
	var texts=nodes.append("text")
		.attr("text-anchor","middle")
		.text(function(d)
		{
			return d.name;
		});
	

	nodes.append("title")
	  .text(function(d) { return d.wg; });

	force.on("tick", function() {
	link.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	circles.attr("cx", function(d) { return d.x; })
		.attr("cy", function(d) { return d.y; });
	texts.attr("x",function(d) { return d.x; })
		.attr("y", function(d) { return d.y+4; });
	});
//});
