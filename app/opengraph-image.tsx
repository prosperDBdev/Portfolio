import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.role} (${site.focus})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0b",
          color: "#ededef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#85858d" }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4fd1e0" }} />
          {site.name} / {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.08, letterSpacing: -2 }}>
          <span>I build software that holds up</span>
          <span style={{ color: "#a6a6ad" }}>in real time, offline, and in production.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#85858d", borderTop: "1px solid #34343a", paddingTop: 28 }}>
          <span>Java · Spring Boot · React · Next.js</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    ),
    size,
  );
}
