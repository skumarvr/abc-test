function findTriplets(arr)  
{
    var tempArr = arr.sort();
    var resultSet = {};
    var arrLen = arr.length;

    for (var i=0; i<arrLen-1; i+=1 ) {
        // Set to hold the third number which can form the triplet
        var thirdNumSet = new Set(); 
        for (var j=i+1; j<arrLen; j++) { 
            // add two numbers
            var sumOfTwoNum = (tempArr[i] + tempArr[j]) * -1; 
            // Check if the sum of two numbers is present in the third number set
            if (thirdNumSet.has(sumOfTwoNum)) { 
                // triplet
                let triplet = [tempArr[i],sumOfTwoNum,tempArr[j]]; 
                if( resultSet[triplet.toString()] == null ) {
                    resultSet[triplet.toString()] = triplet;
                }
            }  
            else { 
                // add the second number to third number set for future reference.
                thirdNumSet.add(tempArr[j]); 
            } 
        } 
    }

    return Object.values(resultSet);
}

// 'i' loop traverses from 0 to n-2. 
// 'j' loop traverses from i to n-1
// total number of executions in the loop = n*(n-1)
// Hence O(n) = n^2

arr = [-1, 0, 1, 1, -1, 0]
console.log(JSON.stringify(findTriplets(arr)));
