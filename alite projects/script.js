
var liveObjOfState = {
    "India": {
        "Delhi": ["new Delhi", "North Delhi"],
        "Kerala": ["Thiruvananthapuram", "Palakkad"],
        "Goa": ["North Goa", "South Goa"],
    },
    "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
    }, "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
    },
}
window.onload = function () {
    var selectCountry = document.getElementById("selectCountry"),
        selectState = document.getElementById("selectState"),
        countrystatecitySelect = document.getElementById("countrystatecitySelect");
    for (var country in liveObjOfState) {
        selectCountry.options[selectCountry.options.length] = new Option(country, country);
    }
    selectCountry.onchange = function () {
        selectState.length = 1;
        countrystatecitySelect.length = 1;
        if (this.selectedIndex < 1) return; 
        for (var state in liveObjOfState[this.value]) {
            selectState.options[selectState.options.length] = new Option(state, state);
        }
    }
    selectCountry.onchange();
    selectState.onchange = function () {
        countrystatecitySelect.length = 1;
        if (this.selectedIndex < 1) return; 
        var region = liveObjOfState[selectCountry.value][this.value];
        for (var i = 0; i < region.length; i++) {
            countrystatecitySelect.options[countrystatecitySelect.options.length] = new Option(region[i], region[i]);
        }
    }
}


function validation() {
    event.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value

    if (name == '' || name == null) {
        document.getElementById('nameErr').innerHTML = "Name is not valid"
        document.getElementById('emailErr').innerHTML = "Email is not valid"
        document.getElementById('numErr').innerHTML = "Contact Number is not valid"

    }
    else if (email == '' || email == null) {
        document.getElementById('nameErr').innerHTML = ""
        document.getElementById('emailErr').innerHTML = "Email is not valid"
        document.getElementById('numErr').innerHTML = "Contact Number is not valid"
    }
    else if (phone == '' || phone == null) {
        document.getElementById('nameErr').innerHTML = ""
        document.getElementById('emailErr').innerHTML = ""
        document.getElementById('numErr').innerHTML = "Contact Number is not valid"
    }
    else {

        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            alert("email is not valid...!!")
        }
        else if (!phone.match(/[0-9]{10}/)) {
            alert("mobile number is invalid")
        }
        else {
            console.log(`Name : ${name}`);
            console.log(`Email : ${email}`);
            console.log(`Contact Number : ${phone}`);
            alert("Succsessfully Submited..!!")
        }
    }

}