import React, { useState, useEffect } from 'react';
import { fetchGitHubRepos, GitHubRepo } from '../../api/github';
import { ScrollController } from '../../utilities-methods';
import './style.scss';

const LANG_COLORS: Record<string, string> = {
  JavaScript:  '#f1e05a',
  TypeScript:  '#3178c6',
  Python:      '#3572A5',
  Java:        '#b07219',
  CSS:         '#563d7c',
  HTML:        '#e34c26',
  Shell:       '#89e051',
  Ruby:        '#701516',
  Go:          '#00ADD8',
  Rust:        '#dea584',
  Dart:        '#00B4AB',
  'C#':        '#178600',
  'C++':       '#f34b7d',
};

interface ProjectCardProps {
  repo: GitHubRepo;
}

const ProjectCard = ({ repo }: ProjectCardProps) => (
  <div className="col-lg-4 col-md-6 col-sm-12 w3-animate-bottom">
    <div className="project-card">
      <div className="project-card__header">
        <i className="fa fa-code project-card__icon" aria-hidden="true" />
        <h5 className="project-card__name">{repo.name.replace(/[-_]/g, ' ')}</h5>
      </div>

      <p className="project-card__desc">
        {repo.description || 'No description provided.'}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="project-card__topics">
          {repo.topics.slice(0, 3).map(topic => (
            <span key={topic} className="project-card__topic">{topic}</span>
          ))}
        </div>
      )}

      <div className="project-card__meta">
        {repo.language && (
          <span className="project-card__lang">
            <span
              className="project-card__lang-dot"
              style={{ background: LANG_COLORS[repo.language] || '#8b949e' }}
            />
            {repo.language}
          </span>
        )}
        <span className="project-card__stat">
          <i className="fa fa-star" aria-hidden="true" /> {repo.stargazers_count}
        </span>
        <span className="project-card__stat">
          <i className="fa fa-sitemap" aria-hidden="true" /> {repo.forks_count}
        </span>
      </div>

      <div className="project-card__actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__btn"
        >
          <i className="fa fa-github" aria-hidden="true" /> View Code
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--demo"
          >
            <i className="fa fa-external-link" aria-hidden="true" /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [repos, setRepos]     = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  ScrollController();

  useEffect(() => {
    fetchGitHubRepos()
      .then(setRepos)
      .catch(() => setError('Could not load projects. Check your connection and try again.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="projects-container">
      <div className="projects-hero w3-animate-top">
        <div className="projects-hero__content">
          <i className="fa fa-github projects-hero__icon" aria-hidden="true" />
          <h2>GitHub Projects</h2>
          <p>Open source work &amp; personal projects</p>
        </div>
      </div>

      <div className="projects-body">
        <div className="projects-heading w3-animate-left">
          <h4>My Projects</h4>
        </div>

        {loading && (
          <div className="projects-state">
            <i className="fa fa-spinner fa-spin" aria-hidden="true" /> Loading projects…
          </div>
        )}

        {error && (
          <div className="projects-state projects-state--error">
            <i className="fa fa-exclamation-triangle" aria-hidden="true" /> {error}
          </div>
        )}

        {!loading && !error && (
          <div className="row projects-grid">
            {repos.length === 0
              ? <div className="projects-state">No public repositories found.</div>
              : repos.map(repo => <ProjectCard key={repo.id} repo={repo} />)
            }
          </div>
        )}
      </div>
    </div>
  );
};

export { Projects };
