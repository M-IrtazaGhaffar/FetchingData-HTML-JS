//Fetching the Data:

const fetchingData = async() => {
    let data = await fetch('https://healthdata.gov/resource/g62h-syeh.json').then(res => {
        return res.text()
    }).then(data => {
        data = JSON.parse(data)

        console.log(data);

        //Using Input:
        let x = document.getElementById('state').value
        let y = document.getElementById('date').value

        y = y + "T00:00:00.000"
        console.log(y)

        //Finding the given data in a traversal
        for (let i = 0; i < 1000; i++) {
            if (data[i].state === x && data[i].date === y) {
                //Name of state:
                document.getElementById('a-1').innerText = data[i].state;
                //Exact Date:
                document.getElementById('b-1').innerText = data[i].date;
                //Total Patients:
                document.getElementById('c-1').innerText = data[i].total_patients_hospitalized_confirmed_influenza_and_covid_coverage;
                //Present COVID Patients:
                document.getElementById('d-1').innerText = data[i].total_adult_patients_hospitalized_confirmed_covid;
                //Total Beds:
                document.getElementById('e-1').innerText = data[i].inpatient_beds_utilization_denominator;
                break;
            }
        }

    })
}

//fetchingData()

const searchFun = async() => {

}