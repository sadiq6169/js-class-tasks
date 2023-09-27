const people = [
    {name: "umer", id:1, score:100 },
    {name: "waseem", id:2, score:70 },
    {name: "ali", id:3, score:75 },
    {name: "faheem", id:4, score:90 },
    {name: "shan", id:5, score:60 }

]

const highScore = people.filter(function(val){
    if(val.score>=80) return val.score

})
console.log(highScore)


const specificId = people.find(function(value){
    if(value.id ==3) 
    return value.id
})
console.log(specificId)