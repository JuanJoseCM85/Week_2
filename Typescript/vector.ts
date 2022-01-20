export class Vector{

    //Declaración de Atributos
    private elements:number[];

    //constructor
    constructor(n:number,k:number)
    {
        this.elements =[];
        for(let i:number = 0; i < n; i++){
            this.elements.push(Math.round(Math.random() * k));
        }
    }

    //Metdos
    public print():void
    {
        console.log(this.elements);
        
    }

    public add(v1:Vector):Vector
    {
        let vectorSuma:Vector = new Vector(this.elements.length,0);

        for (let i:number = 0; i < this.elements.length; i++){
            vectorSuma.elements[i] = this.elements[i] + v1.elements[i]; 
        }
        return vectorSuma;
    }

    public subs(v1:Vector):Vector
    {
        let vectorResta:Vector = new Vector(this.elements.length,0);

        for (let i:number = 0; i < this.elements.length; i++){
            vectorResta.elements[i] = this.elements[i] - v1.elements[i]; 
        }
        return vectorResta;
    }

    public mult(v1:Vector):Vector
    {
        let vectorMulti:Vector = new Vector(this.elements.length,0);

        for (let i:number = 0; i < this.elements.length; i++){
            vectorMulti.elements[i] = this.elements[i] * v1.elements[i]; 
        }
        return vectorMulti;
    }

    public multNumbre(n:number):Vector
    {
        let vectorMulti:Vector = new Vector(this.elements.length,0);

        for (let i:number = 0; i < this.elements.length; i++){
            vectorMulti.elements[i] = this.elements[i] * n; 
        }
        return vectorMulti;
    }
}


let vector1 = new Vector(5,9);
let vector2 = new Vector(5,9);

vector1.print();
vector2.print();

console.log(vector1.add(vector2));
console.log(vector1.subs(vector2));
console.log(vector1.mult(vector2));
console.log(vector1.multNumbre(2));




