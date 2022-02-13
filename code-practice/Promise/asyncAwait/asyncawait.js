let k = 'nodata'

const func = async () => {
  let p = new Promise((res, rej)=> {
    setTimeout(res,0,'resolving')
  })

/*
  p.then((data)=>{
    k=data;
    console.log(data,'data')
  })
  */
  k = await p
  
  console.log('hell');

  return 1 //doesnt matter it will return promise with fullfilled value 1
  
}

  console.log('1')
  console.log(func(),'return')
  console.log(k,'3')
  setTimeout(()=>console.log(k,'in',0))


  //output
  /*
  1
  promise<>, return
  nodata,3
  hell
  resolving in
  */


  /////////////////////////////////////////////////////////////////////////

const func = async () => {
    return 'pooja'
}

async function  abc() {
    let k = await func()
    console.log(k,'abc')
}

console.log('1234')
abc()
console.log('last')

//#output
/* 
"initial"
"last"
"poojaabc"
*/