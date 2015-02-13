var auto1 = {
  año: 1997,
  dni: 33274258,
  marca: "Ford"
};

var auto2 = {
  año: 2003,
  dni: 33274218,
  marca: "Chevrolet"
};

var auto3 = {
  año: 1997,
  dni: 33274123,
  marca: "Ford"
};


var auto4 = {
  año: 2010,
  dni: 10274123,
  marca: "Honda"
};

var persona = {
  nombre: "Juan Pablo",
  apellido: "Ferrari",
  dni: 33271258
}
var persona = {
  nombre: "Diego",
  apellido: "Linux",
  dni: 11456789
}


auto1.velMax = 100;
auto2.velMax = 120;
auto3.velMax = 140;
auto4.velMax = 115;

auto1.acelerar = function(){
  return this.velMax * 2;
};
auto2.acelerar = function(){
  return this.velMax * 2;
};
auto3.acelerar = function(){
  return this.velMax * 2;
};
auto4.acelerar = function(){
  return this.velMax * 2;
};

console.log(auto1.acelerar());
console.log(auto2.acelerar());
console.log(auto3.acelerar());
console.log(auto4.acelerar());







