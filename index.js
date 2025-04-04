// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return Math.PI * this.diameter
    }
    get area(){
        return Math.PI * Math.pow(this.radius,2)
    }
    set diameter(newdiameter){
        this.radius = newdiameter/2
        return this.radius * 2
    }
    set circumference(newcircumfrence){
        this.diameter = newcircumfrence/Math.PI
        return Math.PI *this.diameter
    }
    set area(newarea){
        this.radius = Math.sqrt(newarea/Math.PI)
        return Math.PI * this.radius
    }
}