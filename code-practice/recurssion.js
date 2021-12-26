function getEmployee(key,empCount,emp) {
    if(emp[key] && emp[key].length){
       let count = 0;
        for(let x=0; x<emp[key].length; x++){
          
             if(emp[emp[key][x]]){
               count = count + emp[emp[key][x]].length + getEmployee(emp[key][x],empCount,emp)
             }
               
         }
        return count;
    }else{
        return 0;
    }
  }
  
  
  function findList(emp) {
    let empCount={};
    
    for(let i in emp) {
      empCount[i] = emp[i].length
    } 
    
    for(let x in empCount){
      empCount[x] = empCount[x] + getEmployee(x,empCount,emp)
    }
    //getEmployee(emp,empCount)
    //console.log(empCount)
    return empCount
  }
  
  emp={
    emp1:['emp2','emp3','emp4','emp5'],
    emp2:['emp6','emp7'],
    emp3:['emp0'],
    emp4:[],
    emp5:[],
    emp6:['emp33','emp44'],
    emp7:['emp88'],
    emp33:['emp123'],
    emp44:[]
  }
  
  let data = findList(emp)
  DisplayData(data)