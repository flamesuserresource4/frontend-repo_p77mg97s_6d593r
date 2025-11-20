import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
        <a href="#home" className="font-semibold tracking-tight text-white">Portfolio</a>
        <nav className="hidden items-center gap-6 text-sm text-blue-100/80 sm:flex">
          <a className="transition hover:text-white" href="#projects">Projects</a>
          <a className="transition hover:text-white" href="#about">About</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-blue-100/80 transition hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-2 text-blue-100/80 transition hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" className="rounded-lg border border-white/10 p-2 text-blue-100/80 transition hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
          <button className="sm:hidden rounded-lg border border-white/10 p-2 text-blue-100/80 transition hover:text-white" aria-label="Open Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
