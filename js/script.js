const ctxDoughnut=document.getElementById("doughnutChart").getContext("2d");new Chart(ctxDoughnut,{type:"doughnut",data:{labels:["В тренде","Программирование","Дизайн","Гаджеты","Маркетинг"],datasets:[{label:"Посещения",data:[150,100,75,50,125],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)"],borderWidth:1}]},options:{responsive:!0,plugins:{tooltip:{enabled:!0},legend:{position:"top"}},animation:{animateScale:!0,animateRotate:!0}}});const ctxRadar=document.getElementById("radarChart").getContext("2d");new Chart(ctxRadar,{type:"radar",data:{labels:["Новые посещения","Возвраты","Время на сайте","Глубина просмотра","Вовлечённость"],datasets:[{label:"Наш сайт",data:[100,80,90,70,85],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",pointBackgroundColor:"rgba(255, 99, 132, 1)"},{label:"Среднее по отрасли",data:[90,70,80,60,75],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",pointBackgroundColor:"rgba(54, 162, 235, 1)"}]},options:{responsive:!0,plugins:{tooltip:{enabled:!0},legend:{position:"top"}},animation:{animateScale:!0,animateRotate:!0},scales:{r:{angleLines:{display:!0},suggestedMin:0,suggestedMax:100}}}});

/*
// Создаём контекст для первого графика (круговая диаграмма - doughnut chart).
const ctxDoughnut = document.getElementById("doughnutChart").getContext("2d");

// Инициализируем новый график с типом "doughnut" (круговая диаграмма).
new Chart(ctxDoughnut, {
  type: "doughnut",  // Тип диаграммы - круговая диаграмма (Doughnut).
  data: {
    // Метки для секторов диаграммы.
    labels: ["В тренде", "Программирование", "Дизайн", "Гаджеты", "Маркетинг"],
    datasets: [{
      label: "Посещения",  // Заголовок для графика.
      // Данные для секторов (каждое число - это количество посещений для каждой категории).
      data: [150, 100, 75, 50, 125],
      // Цвета для каждого сектора в диаграмме.
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)", 
        "rgba(54, 162, 235, 0.6)", 
        "rgba(255, 206, 86, 0.6)", 
        "rgba(75, 192, 192, 0.6)", 
        "rgba(153, 102, 255, 0.6)"
      ],
      // Цвета для границ секторов.
      borderColor: [
        "rgba(255, 99, 132, 1)", 
        "rgba(54, 162, 235, 1)", 
        "rgba(255, 206, 86, 1)", 
        "rgba(75, 192, 192, 1)", 
        "rgba(153, 102, 255, 1)"
      ],
      borderWidth: 1  // Толщина границ секторов.
    }]
  },
  options: {
    responsive: true,  // Адаптация графика под размер экрана.
    plugins: {
      tooltip: {
        enabled: true  // Включение всплывающих подсказок (tooltip).
      },
      legend: {
        position: "top"  // Позиция легенды (сверху).
      }
    },
    animation: {
      animateScale: true,  // Анимация масштабирования.
      animateRotate: true  // Анимация вращения.
    }
  }
});

// Создаём контекст для второго графика (радарная диаграмма - radar chart).
const ctxRadar = document.getElementById("radarChart").getContext("2d");

// Инициализируем новый график с типом "radar" (радарная диаграмма).
new Chart(ctxRadar, {
  type: "radar",  // Тип диаграммы - радар (Radar).
  data: {
    // Метки для осей диаграммы.
    labels: ["Новые посещения", "Возвраты", "Время на сайте", "Глубина просмотра", "Вовлечённость"],
    datasets: [
      {
        label: "Наш сайт",  // Заголовок для первого набора данных.
        data: [100, 80, 90, 70, 85],  // Данные для нашего сайта.
        backgroundColor: "rgba(255, 99, 132, 0.2)",  // Цвет фона для графика.
        borderColor: "rgba(255, 99, 132, 1)",  // Цвет границы для графика.
        pointBackgroundColor: "rgba(255, 99, 132, 1)"  // Цвет точек данных.
      },
      {
        label: "Среднее по отрасли",  // Заголовок для второго набора данных (сравнение с отраслью).
        data: [90, 70, 80, 60, 75],  // Данные для среднего по отрасли.
        backgroundColor: "rgba(54, 162, 235, 0.2)",  // Цвет фона для графика.
        borderColor: "rgba(54, 162, 235, 1)",  // Цвет границы для графика.
        pointBackgroundColor: "rgba(54, 162, 235, 1)"  // Цвет точек данных.
      }
    ]
  },
  options: {
    responsive: true,  // Адаптация графика под размер экрана.
    plugins: {
      tooltip: {
        enabled: true  // Включение всплывающих подсказок (tooltip).
      },
      legend: {
        position: "top"  // Позиция легенды (сверху).
      }
    },
    animation: {
      animateScale: true,  // Анимация масштабирования.
      animateRotate: true  // Анимация вращения.
    },
    scales: {
      r: {
        angleLines: {
          display: true  // Показать линии углов (для радарной диаграммы).
        },
        suggestedMin: 0,  // Минимальное значение на шкале.
        suggestedMax: 100  // Максимальное значение на шкале.
      }
    }
  }
});
*/