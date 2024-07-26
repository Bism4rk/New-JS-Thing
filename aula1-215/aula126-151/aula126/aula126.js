window.addEventListener('beforeprint', () => {
    myChart.resize(600, 600);
  });
  window.addEventListener('afterprint', () => {
    myChart.resize();
  });