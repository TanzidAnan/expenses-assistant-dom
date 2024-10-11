

document.getElementById('calculate').addEventListener('click', function () {
    const expenseForm = document.getElementById('income').value;
    const software = document.getElementById('software').value;
    const courses = document.getElementById('courses').value;
    const internet = document.getElementById('internet').value;
    const totleElement = parseInt(software + courses + internet);
    const softwarevalue =parseInt(software)
    const coursesvalue =parseInt(courses)
    const internetvalue =parseInt(internet)
    const totleEncome = softwarevalue+ coursesvalue +internetvalue
    if (expenseForm > totleEncome) {
        console.log(totleEncome)
    }
})