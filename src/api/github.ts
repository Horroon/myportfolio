const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME || 'Horroon';

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

const GITHUB_TIMEOUT_MS = 10_000;

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), GITHUB_TIMEOUT_MS);
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers: { Accept: 'application/vnd.github.v3+json' }, signal: controller.signal }
    );
    clearTimeout(timer);
    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    const repos: GitHubRepo[] = await res.json();
    return repos.filter(r => !r.fork);
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}
