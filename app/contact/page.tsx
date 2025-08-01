"use client";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Contact Me</h1>
        <p className="text-lg sm:text-xl">
          If you have any questions or would like to get in touch, feel free to
          reach out!
        </p>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg px-4 py-2 border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg px-4 py-2 border border-gray-300"
            required
          />
          <textarea
            placeholder="Your Message"
            className="rounded-lg px-4 py-2 border border-gray-300"
            required
          />
          <button
            type="submit"
            className="rounded-lg px-6 py-3 font-semibold shadow transition-colors"
            style={{
              background: "var(--ctp-mocha-blue)",
              color: "var(--ctp-mocha-base)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
