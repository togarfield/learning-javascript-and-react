// Soal: Buat fungsi createTimer yang mengembalikan objek dengan method:
// start(): Mulai menghitung detik.
// stop(): Berhenti dan kembalikan total detik.
// Rules: Tidak bisa akses seconds langsung dari luar!

function createTimer() {
    let seconds = 0;
    let intervalId;
  
    return {
      start() {
        intervalId = setInterval(() => seconds++, 1000);
      },
      stop() {
        clearInterval(intervalId);
        return seconds;
      }
    };
  }
  
  const timer = createTimer();
  timer.start();
  setTimeout(() => {
    console.log(timer.stop()); // Output: total detik
  }, 3000);