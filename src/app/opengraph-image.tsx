import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Filip Buljan - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 16,
            background: "#6C63FF",
            fontSize: 36,
            fontWeight: 700,
            color: "white",
            marginBottom: 32,
          }}
        >
          FB
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            marginBottom: 12,
          }}
        >
          Filip Buljan
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
