import React from 'react';
import { Home, Coins, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EthosPanelProps {
  onExploreRoles?: () => void;
}

export const EthosPanel: React.FC<EthosPanelProps> = ({ onExploreRoles }) => {
  return (
    <div className="h-full flex flex-col justify-between p-4 sm:p-6 lg:p-7 space-y-4 no-scrollbar overflow-y-auto">
      {/* Top Header & Ethos Cards */}
      <div className="space-y-3.5 sm:space-y-4">
        {/* Brand Lockup */}
        <div className="space-y-1 sm:space-y-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>CONTRIBUTOR INVITATION</span>
          </div>

          <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase font-display leading-[1.1] break-words">
            MEFOLABS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              IS HOME
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-300 font-medium">
            MEFOLABS is building more than an NFT project. We are building a home for creators and builders.
          </p>
        </div>

        {/* Card 1: MEFOLABS IS HOME */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span>A PLACE FOR CREATORS &amp; BUILDERS</span>
          </div>
          
          <p className="text-xs text-neutral-300 leading-relaxed break-words">
            A place to bring your skills, ideas, and energy to build something together. You don't need to be an expert or take on a huge responsibility.
          </p>

          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium leading-relaxed">
            Contribute what you can. Learn with us. Build with us. Have fun with us.
          </div>

          <p className="text-[11px] text-neutral-400 leading-relaxed break-words">
            If you ever need to step back, that's okay. We want people to stay because they <strong className="text-neutral-200">enjoy being part of the team</strong>, not because they feel forced.
          </p>
        </div>

        {/* Card 2: REVENUE SHARE */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-colors space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
            <Coins className="w-3.5 h-3.5 shrink-0" />
            <span>REVENUE SHARE</span>
          </div>

          <p className="text-xs text-neutral-300 leading-relaxed break-words">
            This is <strong className="text-white">not a traditional paid job</strong> and there is no fixed salary. As MEFOLABS grows into more products, services, partnerships, and projects, selected contributors may have the opportunity to <strong className="text-emerald-300">share revenue from the work they help create</strong>.
          </p>

          {/* Value Flow Pill */}
          <div className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center text-[11px] sm:text-xs font-bold text-white flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span>Build together</span>
            <span className="text-emerald-400">&rarr;</span>
            <span>Create value</span>
            <span className="text-emerald-400">&rarr;</span>
            <span className="text-emerald-300">Grow together</span>
          </div>

          <p className="text-[11px] text-neutral-400 leading-relaxed break-words">
            Revenue share is not guaranteed and depends on the role, contribution, and agreed terms.
          </p>
        </div>
      </div>

      {/* Bottom Block: Callout + Mobile Shortcut + Tagline */}
      <div className="space-y-3 pt-3 border-t border-white/10 shrink-0">
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#0e131d] to-[#0e131d] border border-emerald-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="min-w-0">
            <div className="text-xs font-bold text-white uppercase font-display flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>MEFOLABS — Your home for building</span>
            </div>
            <div className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed break-words">
              Ready to create together? Choose an open role and submit your application.
            </div>
          </div>

          {onExploreRoles && (
            <button
              type="button"
              onClick={onExploreRoles}
              className="md:hidden shrink-0 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 text-neutral-950 text-xs font-mono font-bold uppercase transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
            >
              <span>View Roles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-neutral-500">
          <span>MEFOLABS &copy; {new Date().getFullYear()}</span>
          <span className="text-emerald-400/80">Decentralized Creator Collective</span>
        </div>
      </div>
    </div>
  );
};
