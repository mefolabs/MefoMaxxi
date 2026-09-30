import React from 'react';

interface NavbarProps {
  activeTab?: 'positions' | 'ethos';
  onTabSelect?: (tab: 'positions' | 'ethos') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabSelect }) => {
  return (
    <header className="h-13 sm:h-14 border-b border-white/10 bg-[#07090e] px-3 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 z-30">
      {/* Brand & Status */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm sm:text-base font-black tracking-tight text-white font-display">MEFOLABS</span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">
            TEAM
          </span>
        </div>

        <span className="hidden sm:inline text-neutral-600 text-xs font-mono">|</span>

        <span className="hidden sm:inline text-xs text-neutral-400 font-mono">
          Your Home for Creators &amp; Builders
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onTabSelect && onTabSelect(activeTab === 'ethos' ? 'positions' : 'ethos')}
          className="text-[11px] sm:text-xs font-mono text-emerald-400/90 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-2.5 sm:px-3 py-1 rounded-full cursor-pointer transition-colors"
        >
          8 Open Roles
        </button>
      </div>
    </header>
  );
};
