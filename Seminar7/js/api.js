export async function fetchRepos (userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    if (!response.ok) {
        throw new Error("Пользователь не найден! :(")
    }
    return response.json();
}