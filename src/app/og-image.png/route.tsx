import { ImageResponse } from "next/og";
import { profile } from "../../data/siteData";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#0F172A", color: "#FFFFFF" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "88px", height: "88px", borderRadius: "24px", background: "#2563EB", fontSize: "40px", fontWeight: 700 }}>{profile.monogram}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 700 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: "22px", color: "#CBD5E1" }}>{profile.role} · {profile.company}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", maxWidth: "1020px", fontSize: "62px", fontWeight: 700, lineHeight: 1.1 }}>{profile.positioning}</div>
        <div style={{ display: "flex", fontSize: "28px", color: "#A7F3D0" }}>Untuk UMKM, Bisnis F&B & Brand Lokal Berkembang</div>
      </div>
      <div style={{ display: "flex", gap: "28px", fontSize: "24px", color: "#CBD5E1" }}>{profile.brands.join(" · ")}</div>
    </div>,
    { width: 1200, height: 630 },
  );
}
