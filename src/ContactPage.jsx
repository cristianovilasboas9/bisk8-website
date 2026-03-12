import { useEffect } from "react";

const WHITE_LOGO = "/images/white-logo.svg";

const CONTACT_CSS = `
@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); }
`;

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <style>{CONTACT_CSS}</style>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #111" }}>
        <a href="/"><img src={WHITE_LOGO} alt="BISK8" style={{ height: 24 }} /></a>
      </nav>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 32px 120px" }}>
        <h1 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 42, fontWeight: 900, letterSpacing: 3, marginBottom: 60, lineHeight: 1.2 }}>CONTACT</h1>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: 2, marginBottom: 16, color: "#fff" }}>BISK8</p>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#999" }}>
            Cristiano Vilas Boas<br />
            Entrepreneur individuel<br />
            Barcelos, Portugal
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 1.9, color: "#999" }}>
            Email : <a href="mailto:contact@bisk8.co" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #333" }}>contact@bisk8.co</a>
          </p>
        </div>

        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 15, lineHeight: 2.2, color: "#999" }}>
            Pour toute question concernant :<br />
            <span style={{ color: "#666" }}>—</span> L'application → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> Les conditions d'utilisation → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> La protection de vos données → <a href="mailto:contact@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>contact@bisk8.co</a><br />
            <span style={{ color: "#666" }}>—</span> Un partenariat ou une collaboration → <a href="mailto:info@bisk8.co" style={{ color: "#ccc", textDecoration: "none" }}>info@bisk8.co</a>
          </p>
        </div>

        <div style={{ padding: "24px 0", borderTop: "1px solid #222" }}>
          <p style={{ fontFamily: "Inter, -apple-system, sans-serif", fontSize: 14, color: "#666", fontStyle: "italic" }}>
            Nous répondons dans un délai de 48h.
          </p>
        </div>
      </div>
      <footer style={{ padding: "48px 32px", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <img src={WHITE_LOGO} alt="BISK8" style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/cgu" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>CGU</a>
            <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Privacy</a>
            <a href="/contact" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>Contact</a>
          </div>
          <div style={{ fontSize: 12, color: "#444" }}>© 2026 BISK8</div>
        </div>
      </footer>
    </div>
  );
}
