fetch("https://restcountries.eu/rest/v2/all")  // get list of all countries
  .then(res => res.json())
  .then(data => {
      for(var i = 0; i < data.length; i++) {
          var country = data[i];
          document.getElementById('country-picker').innerHTML += "<option value="+country.name+">"+country.name+"</option>";  // add countries to dropdown list
      }
  });

function getCountryInfo() {
    const country_name = document.getElementById('country-picker').value;
    fetch("https://restcountries.eu/rest/v2/name/"+country_name)  // get info about country user selected
        .then(res => res.json())
        .then(data => {
            const country = data[0];  // set info fields about country
            document.getElementById('name').innerHTML = "Name: "+country.name;
            document.getElementById('name').innerHTML = "Capital: "+country.capital;
            document.getElementById('population').innerHTML = "Population: "+country.population.toLocaleString('en-us');
            document.getElementById('area').innerHTML = "Area: "+country.area.toLocaleString()+" sq km";
            document.getElementById('flag').src = country.flag;
            document.getElementById("map-link").href = "https://www.google.com/maps/place/"+country.name;
            document.getElementById("map-link").innerHTML = "Map of "+country.name
        });
}