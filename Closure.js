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

  // Closure multiply:
  function multiplyBy(x) {
    return function(y) {
      return x * y; // `x` diambil dari scope luar
    };
  }
  
  // Penggunaan:
  const double = multiplyBy(2);
  console.log(double(5)); // Output: 10 (2 * 5)
  console.log(double(10)); // Output: 20 (2 * 10)

  // Closure data privacy:
  function createSecretKeeper(secret) {
    return {
      getSecret: function() {
        return secret;
      },
      setSecret: function(newSecret) {
        secret = newSecret;
      }
    };
  }
  
  const keeper = createSecretKeeper("API_KEY_123");
  console.log(keeper.getSecret()); // Output: "API_KEY_123"
  keeper.setSecret("NEW_API_KEY"); // Output: "NEW_API_KEY"
  console.log(keeper.getSecret()); // Output: "NEW_API_KEY"
  // Tidak ada cara akses `secret` langsung dari luar!