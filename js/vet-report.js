
document.getElementById('filterAnimal').addEventListener('input', filterReports);
document.getElementById('filterDate').addEventListener('input', filterReports);

function filterReports() {
    var filterAnimal = document.getElementById('filterAnimal').value.toLowerCase();
    var filterDate = document.getElementById('filterDate').value;
    var reports = document.getElementsByClassName('report-item');

    for (var i = 0; i < reports.length; i++) {
        var animalName = reports[i].getAttribute('data-animal').toLowerCase();
        var reportDate = reports[i].getAttribute('data-date');

        if ((animalName.includes(filterAnimal) || filterAnimal === '') &&
            (reportDate === filterDate || filterDate === '')) {
            reports[i].style.display = '';
        } else {
            reports[i].style.display = 'none';
        }
    }
}