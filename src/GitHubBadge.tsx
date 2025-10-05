// src/components/GitHubBadge.tsx
import "./GitHubBadge.css";

interface GitHubBadgeProps {
  username: string;
  repoName?: string; // optional, can be added if desired
  url?: string;      // optional full URL
}

export default function GitHubBadge({ username, repoName, url }: GitHubBadgeProps) {
  const link = url || (repoName ? `https://github.com/${username}/${repoName}` : `https://github.com/${username}`);
  
  return (
    <div className="github-badge">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {repoName ? `${username} / ${repoName}` : `@${username}`}
      </a>
    </div>
  );
}
    