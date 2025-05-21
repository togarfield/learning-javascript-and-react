// Tugas:
// Buat fungsi filterAndMap yang menerima array angka, lalu:
// Filter angka > 10.
// Kalikan angka yang lolos filter dengan 2.
const input = [5, 12, 8, 15, 3]  
// output: [24, 30]  // (12*2 dan 15*2)

function filterAndMap(arr) {
    return arr.filter(num => num > 10).map(num => num *2)
}

console.log(filterAndMap(input))

// ---------------------------------------------------------------------------------------------------- //

// Tugas:
// Buat fungsi fetchUserData yang simulasi fetch API:
// Return Promise yang resolve setelah 1 detik dengan data { name: "John", age: 25 }.
// Handle error jika input bukan string.

function fetchUserData(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== 'string') reject('Input must be a string');
        setTimeout(() => {
            resolve({name: 'John', age: 25})
        }, 1000)
    })
}

// cara penggunaan:
fetchUserData('test')
    .then(data => console.log(data))
    .catch(err => console.log(err))