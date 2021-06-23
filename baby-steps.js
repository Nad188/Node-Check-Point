const arr=process.argv.slice(2)

const res=arr.reduce((acc,num)=>{
    return acc + +num
},0)

console.log(res)