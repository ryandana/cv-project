"use client";
export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        background: "var(--ctp-mocha-base)",
        color: "var(--ctp-mocha-text)",
      }}
    >
      <div className="max-w-xl w-full text-center">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          style={{ color: "var(--ctp-mocha-rosewater)" }}
        >
          Welcome
        </h1>
        <p
          className="text-lg sm:text-xl mb-8"
          style={{ color: "var(--ctp-mocha-lavender)" }}
        >
          Sebelumnya perkenalkan saya adalah seorang Frontend Website Developer{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--ctp-mocha-green)" }}
          >
            Catppuccin
          </span>{" "}
          color palette.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="rounded-lg px-6 py-3 font-semibold shadow transition-colors"
            style={{
              background: "var(--ctp-mocha-blue)",
              color: "var(--ctp-mocha-base)",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-sky)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-blue)";
            }}
          >
            About
          </a>
          <a
            href="/projects"
            className="rounded-lg px-6 py-3 font-semibold shadow transition-colors"
            style={{
              background: "var(--ctp-mocha-yellow)",
              color: "var(--ctp-mocha-base)",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-peach)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-yellow)";
            }}
          >
            Projects
          </a>
          <a
            href="/contact"
            className="rounded-lg px-6 py-3 font-semibold shadow transition-colors"
            style={{
              background: "var(--ctp-mocha-green)",
              color: "var(--ctp-mocha-base)",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-teal)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--ctp-mocha-green)";
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}
