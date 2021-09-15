canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 6;
ctx.arc(230, 210, 40, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(280, 250, 40, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth= 6;
ctx.arc(330, 210, 40, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(380, 250, 40, 0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(430, 210, 40, 0,2*Math.PI);
ctx.stroke();