import { initializeTheme, switchTheme } from "./theme.js";
import { fetchRepos } from "./api.js";

const themeSwitcherBtm = document.querySelector('.theme-switcher-btn');

const userNameEl = document.querySelector('.userNameInput'),
    searchBtm = document.querySelector('.searchUserName'),
    reposEl = document.querySelector('.repos'),
    favouriteEl = document.querySelector('.favourites');

const favouriteKeys = "favourites";

initializeTheme();

themeSwitcherBtm.addEventListener('click', switchTheme);

searchBtm.addEventListener('click', async () => {
    const userName = userNameEl.value;
    if (userName) {
        try {
            const repos = await fetchRepos(userName);
            displayRepos(repos);
        } catch (error) {
            alert(error.message)
        }
    }
});

function displayRepos(repos) {
    reposEl.innerHTML = '';

    repos.forEach(repo => {
        const isFavouriteRepo = isFavourited(repo.id);
        reposEl.insertAdjacentHTML('beforeend', `
            <div class="repo-card">
                <h4>${repo.name}</h4>
                <button class="favBtn ${isFavouriteRepo ? 'favourited' : ''}" data-repo-id="${repo.id}">${isFavouriteRepo ? 'Уже в избранном' : 'Добавить в избранное'}</button>
            </div>
        `)
    });
    document.querySelectorAll('.favBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const repoId = btn.getAttribute("data-repo-id");
            const repo = repos.find((r) => r.id == repoId);
            toggleFavourite(repo);
            btn.classList.toggle('favourited');
            btn.textContent = btn.classList.contains('favourited') ? "Удалить из избранного" : "Не в избранном";
        });
    })
}

function toggleFavourite(repo) {
    const favourites = getFavourites();
    const index = favourites.findIndex((fav) => fav.id === repo.id);
    if (index === -1) {
        favourites.push(repo);
    } else {
        favourites.splice(index, 1);
    }
    localStorage.setItem(favouriteKeys, JSON.stringify(favourites));
    displayFavourites();
}

function getFavourites () {
    return JSON.parse(localStorage.getItem(favouriteKeys)) || [];
}

function isFavourited (repoId) {
    const favourites = getFavourites();
    return favourites.some((fav) => fav.id === repoId);
}
function displayFavourites() {
    favouriteEl.innerHTML = '';
    const favourites = getFavourites();
    favourites.forEach(el => {
        favouriteEl.insertAdjacentHTML("beforeend", `
            <li>
                <a href="${el.html_url}" target="_blank">${el.name}</a>
            </li>
        `)
    });
}
document.addEventListener("DOMContentLoaded", displayFavourites);