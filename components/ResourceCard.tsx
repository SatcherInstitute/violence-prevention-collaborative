import type { Resource } from "@/app/data/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      {resource.thumbnail && (
        <img
          src={resource.thumbnail}
          alt=""
          className="resource-card-thumbnail"
          loading="lazy"
        />
      )}
      <div className="resource-card-body">
        <div className="resource-card-category">{resource.category}</div>
        <h3 className="resource-card-title">{resource.title}</h3>
        {resource.org && (
          <p className="resource-card-org">{resource.org}</p>
        )}
        <p className="resource-card-description">{resource.description}</p>
        <div className="resource-card-tags">
          {resource.tags.map((tag) => (
            <span key={tag} className="resource-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="resource-card-link-indicator">Visit →</div>
    </a>
  );
}
