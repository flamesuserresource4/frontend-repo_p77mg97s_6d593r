export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/60 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-blue-200/70">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
