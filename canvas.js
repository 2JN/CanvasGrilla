var lienzo;
var circulo = function()
{
	dibujo = document.getElementById("savnac");
	lienzo = dibujo.getContext("2d");

	lienzo.beginPath();
	lienzo.fillStyle = "#66A3FF";
	lienzo.arc(150, 150, 100, (Math.PI * 2), false);
	lienzo.fill();
	lienzo.closePath();
}

function grilla()
{
	for (var limite45 = 1; limite45 < 60; limite45++)
	{
		lienzo.beginPath();
		lienzo.moveTo(limite45 * 10, 0);
		lienzo.lineTo(0, limite45 * 10);
		lienzo.stroke();
		lienzo.closePath();
	}

	for (var limite135 = 1; limite135 < 60; limite135++)
	{
		lienzo.beginPath();
		lienzo.moveTo(limite135 * 10, 300);
		lienzo.lineTo(0, 300 - (limite135 * 10));
		lienzo.stroke();
		lienzo.closePath();
	}
}