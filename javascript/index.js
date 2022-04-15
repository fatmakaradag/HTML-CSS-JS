


//objects

let student={
	name:"can",
	age:20,
	email:"adfg@gmail.com",
	lessons:[
	{ad:"music",score:90},
	{ad:"mat",score:80},
	{ad:"art",score:85}],

	login:function(){
		console.log("giriş yapıldı");
	},
	logout:function(){
		console.log("çıkış yapıldı");
	},
	printLessons(){
		console.log(this.lessons);

		this.lesson.forEach(lesson=>{

			console.log(lesson.ad,lesson.score);
		})

		}

	
};

student.printLessons();

student.login(); 

console.log(student);

console.log(student.age);

student.age=22;
console.log(student.age); //new age property

console.log(typeof student);

//----------------math objects


console.log(Math);

console.log(Math.PI);


let a=6.3;

console.log(Math.round(a)); //yuvarlama işlemi yapar,yani sayı en çok nereye yakın.. a=6

console.log(Math.floor(a)); //1 alt sayıya yuvarlar.. a=6

console.log(Math.cell(a)); //1 üstte yuvarlar... a=7

console.log(Math.trunc(a)); // decimal kısmı kaldırır.. a=6

const random=Math.random();

console.log(random); //sayfa her yenilendiğinde farklı bi sayıya atanır.

console.log(Math.round(random));