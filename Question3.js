// Reference : Heap's Algorithm
// https://en.wikipedia.org/wiki/Heap%27s_algorithm

function generateAnagram(str) {

    var anagramList = [];

    function swap(strArr, i, j) {
        var temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
    }

    function generate(strArr, k = strArr.length) {
        if(k == 1) {
            // console.log(strArr + " | ");
            anagramList.push(strArr.join(''));
        }
        else {
            // Recursively call once for each k
            for(var i = 0; i < k; i += 1) {
                generate(strArr, k-1);
                // avoid swap when i==k-1
                if (i < k - 1) {
                    // swap choice dependent on parity of k
                    swap(strArr, (k%2 == 0) ? i:0, k-1);
                }
            }
        }
    }

    generate(str.split(''));

    return [...new Set(anagramList)]; 
}

console.log(generateAnagram('abc'));