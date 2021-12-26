function getEmployee(key, emp) { // recurrsion function

    if(emp[key] && emp[key].length){

       let count = 0;
        for(let x=0; x<emp[key].length; x++){
          
             if(emp[emp[key][x]]){
               count = count + emp[emp[key][x]].length + getEmployee(emp[key][x], emp)
             } 
         }
        return count;
    }else{
        return 0;
    }
  }
  
  
  function findList(emp) {
    let empCount={};

    for(let x in emp){
        empCount[x] = emp[x].length + getEmployee(x, emp)
      }

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