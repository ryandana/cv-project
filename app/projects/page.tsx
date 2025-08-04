"use client"
export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-4">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <h1 className="text-2xl font-normal">
          Here is some of my best projects
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
        <div className="border-2 py-8 px-4 rounded-3xl flex flex-col items-center gap-4">
          <img className="rounded-2xl w-full" src="/img/luxe.png" alt="" />
          <p className="text-lg var(--ctp-mocha-text, #cdd6f4)">
            This section is under construction. Please check back later for
            updates!
          </p>
          <a
            href="https://luxury-brands-three.vercel.app/"
            className="rounded-lg px-6 py-3 font-semibold shadow transition-colors w-full text-center"
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
            target="_blank"
          >
            Visit
          </a>
        </div>
        <div className="border-2 py-8 px-4 rounded-3xl flex flex-col items-center gap-4">
          <img className="rounded-2xl w-full" src="/img/luxe.png" alt="" /> ryandana,  2 days ago (August 1, 2025 at 4:58 PM)


          <p className="text-lg var(--ctp-mocha-text, #cdd6f4)">
            This section is under construction. Please check back later for
            updates!
          </p>
          <a
            className="py-3 px-6 font-semibold w-full text-center rounded-lg shadow transition-colors text-[var(--ctp-mocha-base)] hover:text-[var(--ctp-mocha-text)]"
            style={{ background: "var(--ctp-mocha-blue)" }}
            target="_blank"
            href="https://luxury-brands-three.vercel.app/"
          >
            Visit
          </a>
        </div>
        <div className="border-2 py-8 px-4 rounded-3xl flex flex-col items-center gap-4">
          <img className="rounded-2xl w-full" src="/img/luxe.png" alt="" />
          <p className="text-lg var(--ctp-mocha-text, #cdd6f4)">
            This section is under construction. Please check back later for
            updates!
          </p>
          <a
            className="py-3 px-6 font-semibold w-full text-center rounded-lg shadow transition-colors text-[var(--ctp-mocha-base)] hover:text-[var(--ctp-mocha-text)]"
            style={{ background: "var(--ctp-mocha-blue)" }}
            target="_blank"
            href="https://luxury-brands-three.vercel.app/"
          >
            Visit
          </a>
        </div>
      </div>
    </main>
  );
}
