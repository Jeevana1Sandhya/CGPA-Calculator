document.getElementById('cgpacalc').addEventListener('click', () => {

    let creditsclass = Array.from(document.getElementsByClassName('credit'));
    let gradesclass = Array.from(document.getElementsByClassName('grade'));

    let totalcredits = 0;
    let totalpoints = 0;

    for(let i = 0; i < creditsclass.length; i++) {
        let credit = parseFloat(creditsclass[i].value);
        let grade = parseFloat(gradesclass[i].value);

        if (!isNaN(credit) && !isNaN(grade)) {
            totalcredits += credit;
            totalpoints += credit * grade;
        }
    }
    for (let i = 0; i < gradesclass.length; i++) {
        if (gradesclass[i].value < 0 || gradesclass[i].value > 10) {
            alert("Please enter valid grades between 0 and 10.");
            return;
        }
        else if(isNaN(gradesclass[i])){
            alert("Please enter numeric values for grades.");
            return;
        }
    }
    let cgpa = (totalpoints / totalcredits).toFixed(4);
    document.getElementById('result').innerText = cgpa;
});
