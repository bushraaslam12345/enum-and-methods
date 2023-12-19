// enum
// always started with indx 0

// method 1

enum Color {Red, Green, Blue};
var c: Color = Color.Blue;
console.log(Color.Blue)

// method 2

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);

// method 3

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
