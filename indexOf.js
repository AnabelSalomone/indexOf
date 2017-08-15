var arr = ["e", "r", "t", "p", "v"];
var str = "hola como va"


for (var i = 0; i < arr.length; i++) {
	console.log("con string: " + str.indexOf(arr[i]))
	//me da el indice de la letra EN EL STRING
	//Resultado: 10
}

for (var i = 0; i < str.length; i++) {
	console.log("con arr" + arr.indexOf(str[i]))
	//me da el indice de la letra EN EL ARRAY
	//Resultado: 4
}