export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-black pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-800/30 lg:p-4">
          Project Status: <code className="font-bold ml-2 text-green-400">Live</code>
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        <h1 className="text-6xl font-bold tracking-tighter mb-4 text-center">
          JOSH FUNNELL
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-lg">
          Political adviser. 
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
          View Projects
        </button>
        <button className="px-8 py-3 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-900 transition">
          Contact Me
        </button>
      </div>
    </main>
  );
}