const phoneSearch = () => {
    document.getElementById("searchResult").innerHTML= "";
    const searchField = document.getElementById('search-Field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch (url)
    .then(res =>res.json())
    .then(data => displaySearchResult(data.data));
    
}

const displaySearchResult = (phones) => {
    const searchResult = document.getElementById('searchResult');
    for (const data of phones ) {
        // console.log(data);

        const div = document.createElement('div');
        div.classList.add ('col');
        div.innerHTML = `
        <div class="card bg-transparent">
                <img src="${data.image}" class="card-img-top w-50 h-50 mx-auto mt-3" alt="...">
                <div class="card-body">
                  <h5 class=" text-center text-info card-title">${data.phone_name}</h5>
                  <h4 class="text-success"> ${data.brand}</h4>
                  <button onclick="details('${data.slug}')" class="btn btn-success">Details</button>
              </div>
        `;
        searchResult.appendChild(div);
    }
};

const details = slug => {
    document.getElementById('details').innerHTML = "";
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch (url)
    .then(res =>res.json())
    .then(data => setDetails(data.data));
};

const setDetails = (allInfo) =>{
    const detailsResult = document.getElementById('details')
    const div = document.createElement('div');
        div.classList.add ('col');
        div.innerHTML = `
        <div class="card">
                <img src="${allInfo.image}" class="card-img-top w-25 h-25 mx-auto mt-3 alt="...">
                <div class="card-body">
                <h4 class="text-success"> ${allInfo.name}</h4>
                <p>Realase Date : ${allInfo.releaseDate}</P>
                <p>ID : ${allInfo.slug}</P>
                <h3 class="text-success">Main fetures</h3>
                <p>chipSet : ${allInfo.mainFeatures.chipSet}</P>
                <p>displaySize : ${allInfo.mainFeatures.displaySize}</P>
                <p>memory : ${allInfo.mainFeatures.memory}</P>
                <p>sensors : ${allInfo.mainFeatures.sensors}</P>
                <h3 class="text-success">Others Information</h3>
                <p>Bluetooth : ${allInfo.others.Bluetooth}</P>
                <p>GPS : ${allInfo.others.GPS}</P>
                <p>NFC : ${allInfo.others.NFC}</P>
                <p>Radio : ${allInfo.others.Radio}</P>
                <p>USB : ${allInfo.others.USB}</P>
                <p>WLAN : ${allInfo.others.WLAN}</P>

              </div>
        `;
    detailsResult.appendChild(div);
}