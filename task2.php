<?php


$array = [];
function randomColor () {
	$red = dechex(rand(0,255));
	$green = dechex(rand(0,255));
	$blue = dechex(rand(0,255));

	$color = $red . $green . $blue;
	return $color;
}

for ($i = 0; $i < 3; $i++) {
	$color = randomColor();
	if (strlen($color) < 2) {
		$color = "0" . $color;
	}
	$array [] = "#" . $color;
}

echo(json_encode($array));