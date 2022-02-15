const DisplayData = data => {
    const mainDiv = document.querySelector('.main')
    const newDiv = document.createElement('div');
    newDiv.textContent = JSON.stringify(data);
    mainDiv.appendChild(newDiv)
}

var nextPermutation = function(nums) {
  
    for(let i=nums.length-2; i>=0; i--) {
        if(nums[i]<nums[i+1] && i!==0) {
          let temp = nums[i]
          nums[i] = nums[i+1]
          nums[i+1] = temp;
          break;
        }else if(i==0) {
          let k=nums.length-1
          while(k>i) {
            if(nums[i] < nums[k]) {
              let temp = nums[i]
              nums[i] = nums[k]
              nums[k] = temp;
              break;
            }
            k--;
          }
        }
        let temp = nums.slice(1).sort((a,b)=>a-b);
      nums.splice(1,nums.length-1,...temp)
    }

    console.log(nums,'nums')

};

nextPermutation()