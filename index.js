// create top menu bar to select location and add logic to 'flyTo' new location
document.addEventListener('DOMContentLoaded', function () {
    df = dfd.readCSV("https://docs.google.com/spreadsheets/d/1Sf5P6EdPN0mMej4J4kLIDcmjVB198qJZxDc-YqggiA4/gviz/tq?tqx=out:csv&sheet=Sheet1").then(df => {            
        initialSetup(df);
    });
});

function initialSetup(df) {

    const locations = [...new Set(df['Location'].values)];
                const locationDropdown = document.getElementById("locationDropdown");
                locationDropdown.innerHTML = '';
                for (i = 0; i < locations.length; i++) {
                    const option = document.createElement("option");
                    option.text = locations[i];
                    locationDropdown.appendChild(option);
                }
    locationClickHandler(df);
}

function locationClickHandler(df) {
    const locationDropdown = document.getElementById("locationDropdown");
    locationDropdown.addEventListener("change", function(event) {
        const selectedOption = locationDropdown.value;

        // MOVES THE MAP BASED ON WHICH LOCATION WAS CLICKED
        switch(selectedOption) {
            case 'Hawaii':
                map.flyTo({
                    center: [-157.96667740200724, 21.466817709200892],
                    zoom: 8.5,});
                break;
            case 'Tokyo':
                map.flyTo({
                    center: [139.6503, 35.6762],
                    zoom: 8.5,});
                break;
            case 'Boston':
                map.flyTo({
                    center: [-71.0589, 42.3601],
                    zoom: 8.5,});
                break;
        }

        dropdownHeaders = [...new Set(df.query(df['Location'].eq(selectedOption))['Category'].values)];
        dropdownHeaders = dropdownHeaders.filter((value) => value !== null);

        const menuContent = document.getElementById("menuContent");
        menuContent.classList.add("dropdown-section");
        menuContent.innerHTML = '';

        for (let i = 0; i < dropdownHeaders.length; i++) {
            const dropdownDiv = document.createElement("div");
            dropdownDiv.id = 'menuDropdown';
            const dropdownButton = document.createElement("button");
            dropdownButton.textContent = dropdownHeaders[i];
            dropdownButton.classList.add("dropdown-button");
            const endingPunc = document.createElement('div');
            endingPunc.textContent = '+';
            endingPunc.classList.add('endingPunc');
            dropdownButton.append(endingPunc);
            dropdownDiv.append(dropdownButton);
            const checkPerLocation = [...new Set(df.query(df['Location'].eq(selectedOption) && df['Category'].eq(dropdownHeaders[i]))['Subcategory'].values)];
            const temp = document.createElement("div");
            temp.classList.add('dropdown-row');
            for (let j = 0; j < checkPerLocation.length; j++) {
                const tempRow = document.createElement('div');
                const tempCheck = document.createElement("input");
                tempCheck.type = "checkbox";
                tempCheck.id = checkPerLocation[j];
                tempRow.append(tempCheck);
                tempRow.append(checkPerLocation[j]);
                temp.classList.add('content');
                temp.append(tempRow);
                dropdownDiv.append(temp);
            }
            dropdownButton.addEventListener('click', function(event) {
                const clicked = this.parentNode.getElementsByClassName('content');
                if (clicked[0].style.display === 'flex' && clicked[0] !== undefined) {

                    clicked[0].classList.remove('content-showing');
                    clicked[0].style.display = 'none';
                    this.getElementsByClassName('endingPunc')[0].textContent = '+';
                } else {
                    clicked[0].style.display = 'flex';
                    clicked[0].style.flexDirection = 'column';
                    clicked[0].classList.add('content-showing');
                    this.getElementsByClassName('endingPunc')[0].textContent = '-';
                }
            });
            menuContent.append(dropdownDiv);
        }

        updateFilter();
    });

    var changeEvent = new Event('change', {
        'bubbles': true,
    });
    locationDropdown.dispatchEvent(changeEvent);
}

function updateFilter() {
    var input = document.querySelectorAll('input');

    input.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            updateFilterHelper();
        });
    });

    var test = document.getElementById("locationDropdown");
    test.addEventListener('change', function(event) {
        
        updateFilterHelper();
    });
}

function updateFilterHelper() {
    var input = document.querySelectorAll('input');

    const filterArray = ['any'];
            input.forEach(function (checkbox) {
                if (checkbox.checked) {
                  filterArray.push(['==', 'Subcategory', checkbox.id]);
                }
              });
            map.setFilter('csvData', filterArray);
}

