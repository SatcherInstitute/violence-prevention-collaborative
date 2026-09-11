"use client";

import { useState } from "react";
import { resources, RESOURCE_CATEGORIES } from "@/app/data/resources";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? resources
      : resources.filter((r) => r.category === active);

  return (
    <div className="resource-grid-wrapper">
      <div className="resource-filter-bar">
        {["All", ...RESOURCE_CATEGORIES].map((cat) => (
          <button
            key={cat}
            className={`resource-filter-pill${active === cat ? " active" : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="resource-grid">
        {filtered.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}
