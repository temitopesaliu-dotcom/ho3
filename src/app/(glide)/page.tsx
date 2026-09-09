import type { Metadata } from "next";
import GlideHome from "./GlideHome";

export const metadata: Metadata = {
  title: "Hello Glide — 14 Hours a Week, Drained by Busywork",
  description:
    "Follow-ups, re-entry, scheduling ping-pong, the same eleven questions. See where your week's hours drain, then reclaim them — with ready-made AI systems or a custom-built AI Operating System. The 90-minute Business Audit is $1,000, credited in full toward the build.",
};

export default function GlideHomePage() {
  return <GlideHome />;
}
