// const a = {
//     name:'ingoo',
//     key:180,
//     gender:'men',
//     birth:0401
// }

// // a = Array(9).fill({...a})

// // const arr = [{...a}]
// // console.log(arr)



// function createObj(a,b,c,d){
//     this.name = a
//     this.key = b
//     this.gender = c
//     this.birth = d
// }

class Obj2{
    constructor(a,b,c,d){
        this.name = a
        this.key = b
        this.gender = c
        this.birth = d
    }

    render(){
        return(
            this.name + this.key
            
        )
        
    }
}

const ab = new Obj2('1','2','3','4')


console.log(ab)

const cb = render()

/*
    {
        name:'ingoo',
        key:'180',
        gender:'men',
        birth:'111'
    }
*/

// const ob = new createObj('ingoo','180','men','0401')
// const arr =[new createObj('ingoo','180','men','0401'),new createObj('juchan','180','men','0401'),new createObj('jongnam','180','men','0401'),new createObj('hwasub','180','men','0401')]

// console.log(arr)
