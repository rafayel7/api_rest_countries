const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displyCountries(data));
}

const displyCountries = (countries) => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}


    //========== original
// const getCountryHTML = country => {
//     return `
//         <div class="country"> 
//         <img src="${country.flags.png}" />
//         <h2>${country.name.common}</h2>
//         </div>
//     `;
// }


  //========= option 1
// const getCountryHTML = country => {
//     const {name, flags} = country;
//     return `
//         <div class="country"> 
//         <img src="${flags.png}" />
//         <h2>${name.common}</h2>
//         </div>
//     `;
// }


    //========== Option 2
const getCountryHTML = ({name, flags, area, capital}) => {
    // const {name, flags, area, capital} = country;
    return `
        <div class="country"> 
        <img src="${flags.png}" />
        <h2>${name.common}</h2>
        <p>Capital: ${capital}</p>
        <p>Area: ${area}</p>
        </div>
    `;
}

loadCountries();