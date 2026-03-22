export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>Filip Buljan &copy; {new Date().getFullYear()}</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
