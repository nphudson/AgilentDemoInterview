/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '10/17',
        '10/18',
        '10/19',
        '10/20',
        '10/21',
        '10/22',
        '10/23'
      ],
      datasets: [{
        data: [
          74,
          73,
          84,
          57,
          89,
          93,
          82
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

function popUp() {
  var popup = document.getElementById("notificationsPopUp");
  popup.classList.toggle("show");
}