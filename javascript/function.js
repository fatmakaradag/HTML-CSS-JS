

//func and return defined


const squarearea=function(a){
	let area=a**2;
	//console.log(area);
	//return area;

    return a**2;
};

const sonuc1=squarearea(6);

console.log(sonuc1);


// arrow function defined

const squarearea=(a)=>return a**2;

const sonuc=squarearea(6);

console.log(sonuc);

//example-arrow func

const fatura=(products,vergi)=>{

	let toplam=0;
	for(let i=0;i<products.lenght;i++){
		 toplam += products[i]+products[i]*vergi;

	};
	return toplam;

};

console.log(fatura([10,20,30],0.25));


//methods

const ad="can";

let sonuc1=ad.toUpperCase();

console.log(sonuc1);


//forEach

let students=["hakan","fatma","ufuk","ceren"];

students.forEach(function(person,index){
	console.log("Selam"+person+" "+index)
});
