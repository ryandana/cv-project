export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">
        My Projects
      </h1>
      <p className="text-lg sm:text-xl">
        Here are some of the projects I have worked on:
      </p>
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="border rounded-lg p-4 shadow-md w-full max-w-md">
          <h2 className="font-semibold text-xl">Project 1</h2>
          <p>A brief description of Project 1.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md w-full max-w-md">
          <h2 className="font-semibold text-xl">Project 2</h2>
          <p>A brief description of Project 2.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md w-full max-w-md">
          <h2 className="font-semibold text-xl">Project 3</h2>
          <p>A brief description of Project 3.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </main>
  );
}