// Chart configurations
document.addEventListener('DOMContentLoaded', function () {
    // Traffic Chart
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        new Chart(trafficCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Blocked Threats',
                    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
                    borderColor: '#E60000',
                    backgroundColor: 'rgba(230, 0, 0, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'Total Traffic (MB)',
                    data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                    borderColor: '#333',
                    backgroundColor: 'rgba(51, 51, 51, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#eee' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // Incident Chart
    const incidentCtx = document.getElementById('incidentChart');
    if (incidentCtx) {
        new Chart(incidentCtx, {
            type: 'bar',
            data: {
                labels: ['Phishing', 'Malware', 'DDoS', 'Intrusion'],
                datasets: [{
                    label: 'Incidents',
                    data: [120, 98, 45, 30],
                    backgroundColor: '#E60000',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: '#eee' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }
});
