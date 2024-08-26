export async function getGitHubUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
            throw new Error('Erro ao buscar os repositórios do usuário no GitHub');
        }
        const repos = await response.json();
        
        const languages = ['C#', 'Ruby', 'Python'];
        const filteredRepos = repos.filter(repo => languages.includes(repo.language));
        
        console.log(filteredRepos);  
        return filteredRepos;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
