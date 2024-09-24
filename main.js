//masala 1
function multiples(count, num) {
    let result = [];
    for (let i = 1; i <= count; i++) {
        result.push(i * num);
    }
    return result;
}
console.log(multiples(3, 5));

// masala 2
function oddOne(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1 || arr[i] % 2 === -1){
            return i;
        }
    }
    return -1;
}

console.log(oddOne([1, 2, 3, 4, 5, 6]));

// // masala 3
function infiniteLoop(arr, direction, indexes) {
    let arr2 = [];
    for (const row of arr) {
        arr2 = arr2.concat(row);
    }

    if (direction === "left") {
        while (indexes > 0) {
            arr2.push(arr2[0]);
            arr2.shift();
            indexes--;
        }
    } else if (direction === "right") {
        while (indexes > 0) {
            arr2.unshift(arr2[arr2.length - 1]);
            arr2.pop();
            indexes--;
        }
    }

    const result_arr = [];
    let index = 0;

    for (const row of arr) {
        result_arr.push(arr2.slice(index, index + row.length));
        index += row.length;
    }

    return result_arr;
}

console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], "left", 1)); 
