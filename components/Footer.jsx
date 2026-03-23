export default function Footer() {
  return (
    <footer className="border-t border-gold-dim py-8 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs font-body text-off-white-dim uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Vistaar Studios. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gold transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
