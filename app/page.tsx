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
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-4">
        <img className="w-50 rounded-full" src="/img/pfp.jpg" alt="" />
        <h1
          className="text-2xl sm:text-3xl font-bold"
          style={{ color: "var(--ctp-mocha-rosewater)" }}
        >
          I Putu Ryan Dana Putra
        </h1>
        <p
          className="text-lg sm:text-xl"
          style={{ color: "var(--ctp-mocha-lavender)" }}
        >
          Hello i'm a web developer that {" "}
          <span
            className="font-semibold"
            style={{ color: "var(--ctp-mocha-green)" }}
          >
            Lorem ipsum dolor sit amet.
          </span>{" "}
          and this is my personal website built with Next.js and Tailwind CSS
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
