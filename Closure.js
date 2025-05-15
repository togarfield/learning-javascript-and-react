function createCounter() {
    let count = 0; // Variabel ini "tertutup" (closed over) oleh fungsi increment
    return function increment() {
      count++;
      return count;
    };
  }
  
  // Penggunaan:
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2 