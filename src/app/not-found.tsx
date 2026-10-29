import Link from 'next/link';
import { Waves, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#071426] text-white flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-at-c from-[#003B70]/30 to-transparent pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-20 h-20 rounded-full bg-[#008CFF]/20 border border-[#26D9F2]/50 text-[#26D9F2] flex items-center justify-center mx-auto">
          <Waves className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-black font-heading text-white">404</h1>
          <h2 className="text-xl font-bold text-[#26D9F2]">Page Lost Beneath The Surface</h2>
          <p className="text-xs text-[#DCE5EF]/75 leading-relaxed">
            The page or product you requested cannot be located. It may have been moved or updated in our latest technical catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full font-bold uppercase tracking-wider bg-gradient-to-r from-[#008CFF] to-[#26D9F2] text-[#071426] shadow-md"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full font-bold uppercase tracking-wider bg-[#003B70]/60 hover:bg-[#003B70] text-white border border-[#008CFF]/40 transition-colors"
          >
            <Search className="w-4 h-4 mr-2" />
            Browse Products (21)
          </Link>
        </div>
      </div>
    </div>
  );
}
