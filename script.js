document.getElementById('cgpacalc').addEventListener('click', () => {

    let creditsclass = Array.from(document.getElementsByClassName('credit'));
    let gradesclass = Array.from(document.getElementsByClassName('grade'));
    let subjects = ["AI", "CC", "OS", "CN", "SE", "Eng Lab", "OS Lab", "CN Lab", "SE Lab"];

    let totalcredits = 0;
    let totalpoints = 0;

    for(let i = 0; i < creditsclass.length; i++) {
        let credit = parseFloat(creditsclass[i].value);
        let grade = parseFloat(gradesclass[i].value);

        if (!isNaN(credit) && !isNaN(grade) && grade <= 10) {
            totalcredits += credit;
            totalpoints += credit * grade;
        }
        else {
            alert(`Please enter valid number for grade in the subject ${subjects[i]}`);
            return;
        }
    }
    let cgpa = (totalpoints / totalcredits).toFixed(4);
    document.getElementById('result').innerText = cgpa;
});
