"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/content/cv";

/** Commits pushed to public GitHub repos in the last 7 days. `null` once loaded means the fetch failed. */
export function useGithubCommits() {
  const [commits, setCommits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${CONTACT.githubUser}/events/public`,
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        let commitCount = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((event: any) => {
          if (
            event.type === "PushEvent" &&
            new Date(event.created_at) > oneWeekAgo
          ) {
            // detailed payload (commits array) might be missing for some events
            if (event.payload.size) {
              commitCount += event.payload.size;
            } else if (event.payload.commits) {
              commitCount += event.payload.commits.length;
            } else {
              // Fallback: A PushEvent is at least 1 commit
              commitCount += 1;
            }
          }
        });

        setCommits(commitCount);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setCommits(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCommits();
  }, []);

  return { commits, loading };
}
