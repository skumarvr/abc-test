function binarySearch(arr, item, lt=0, rt=arr.length) {
    // console.log('left : ' + lt + ' right : ' + rt + ' mid : ' + Math.ceil((lt+rt)/2));
    
    if(lt==rt && arr[lt] == item) {
        return lt;
    }

    if(lt<rt) {
        mid = Math.ceil((lt+rt)/2);
        
        // Check if the middle element == item 
        if(arr[mid] == item) {
            return mid;
        }

        if(arr[mid] > item) {
            // item is smaller than middle element, parse left subarray
            rt = mid-1; 
        } else {
            // item is greater than middle element, parse right subarray 
            lt = mid;
        }
        return binarySearch(arr, item, lt, rt);
    }

    return -1;
}

var arr = [2, 3, 4, 10, 40]; 
console.log(binarySearch(arr,2));
console.log(binarySearch(arr,3));
console.log(binarySearch(arr,4));
console.log(binarySearch(arr,10));
console.log(binarySearch(arr,40));
console.log(binarySearch(arr,50));

    