import "./GitHubBadge.css";
import { FaGithub } from "react-icons/fa";

interface GitHubBadgeProps {
  username: string;
  repoName: string;
  repoUrl?: string;
}

export default function GitHubBadge({
  username,
  repoName,
  repoUrl,
}: GitHubBadgeProps) {
  const profileLink = `https://github.com/${username}`;
  const repoLink = repoUrl || `https://github.com/${username}/${repoName}`;

  return (
    <div className="github-badge">
      {/* Username Box */}
      <a
        className="github-box username-box"
        href={profileLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="github-icon" />
        <span>@{username}</span>
      </a>

      {/* Repo Box */}
      <a
        className="github-box repo-box"
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Find my code here: {repoName}
      </a>
    </div>
  );
}
