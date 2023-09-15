
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
                locationDropdown.appendChild(document.createElement("br"));
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
            const titleDiv = document.createElement("div");
            titleDiv.id = dropdownHeaders[i];
            const title = document.createElement("button");
            title.textContent = dropdownHeaders[i];
            title.classList.add("dropdown-button");
            titleDiv.append(title);
            menuContent.append(titleDiv);
        }

        for (let i = 0;i < dropdownHeaders.length; i++) {
            const button = document.getElementById(dropdownHeaders[i]);
            const checkPerLocation = [...new Set(df.query(df['Location'].eq(selectedOption) && df['Category'].eq(dropdownHeaders[i]))['Subcategory'].values)];
            for (let j = 0; j < checkPerLocation.length; j++) {
                const temp = document.createElement("div");
                temp.classList.add("dropdown-row", "dropdown-content");
                const tempCheck = document.createElement("input");
                tempCheck.type = "checkbox";
                tempCheck.id = checkPerLocation[j];
                temp.append(tempCheck);
                temp.append(checkPerLocation[j]);
                button.append(temp);
            }
        }

        updateFilter();
    });

    var changeEvent = new Event('change', {
        'bubbles': true,
    })
    locationDropdown.dispatchEvent(changeEvent);
}

function updateFilter() {
    var input = document.querySelectorAll('input')


    input.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            clickedInput = event.target;

            const filterArray = ['any'];
            input.forEach(function (checkbox) {
                if (checkbox.checked) {
                  filterArray.push(['==', 'Subcategory', checkbox.id]);
                }
              });
            map.setFilter('csvData', filterArray);
        });
    });
}

