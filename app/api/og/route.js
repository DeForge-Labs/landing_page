import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const title = decodeURIComponent(searchParams.get("title") || "AI Agent");
    const category = decodeURIComponent(
      searchParams.get("category") || "Automation",
    );

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #F3F4F6 1.5px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      >
        {/* Logo Branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            position: "absolute",
            top: "60px",
            opacity: 0.9,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#8754ff",
              padding: "8px",
              borderRadius: "10px",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#111",
            }}
          >
            DEFORGE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 100px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#8754ff",
              marginBottom: "20px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.1,
              marginBottom: "24px",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 24, color: "#4B5563", maxWidth: "800px" }}>
            Powerful AI Agent template for automated workflows.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "60px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: 18,
            color: "#9CA3AF",
            fontWeight: 500,
          }}
        >
          <span>deforge.ai/agents</span>
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "#D1D5DB",
            }}
          />
          <span>Community Template</span>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error(e.message);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
