const filter = document.getElementById('filter')
const result = document.getElementById('result')
const list = []

filter.addEventListener('input',() => filterData(filter.value))

getUsers()

async function getUsers(){
    const res = await fetch('https://randomuser.me/api/?results=50')
    const data = await res.json()
    result.innerHTML = ''
    data.results.forEach(user => {
        const li = document.createElement('li')
        li.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="${user.name.first}">
        <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
        `
        list.push(li)
        result.appendChild(li)
    });
}

function filterData(searchTerm){
    list.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}