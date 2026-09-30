/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { EthosPanel } from './components/EthosPanel';
import { PositionsPanel } from './components/PositionsPanel';
import { Home, Briefcase } from 'lucide-react';
import { POSITIONS_DATA } from './data/positions';

export default function App() {
  const [mobileTab, setMobileTab] = useState<'positions' | 'ethos'>('ethos');

  return (
    <div className="h-screen h-[100dvh] w-screen bg-[#07090e] text-neutral-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-neutral-950 overflow-hidden">
      {/* 1. Minimal Fixed Top Bar */}
      <Navbar onTabSelect={setMobileTab} activeTab={mobileTab} />

      {/* 2. Mobile Tab Switcher: Ethos & Home on the left, Open Roles on the right, clean professional tabs without AI icons */}
      <div className="md:hidden px-3 py-2 bg-[#090c13] border-b border-white/10 shrink-0 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setMobileTab('ethos')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mobileTab === 'ethos'
              ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
              : 'bg-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span>ETHOS &amp; HOME</span>
        </button>

        <button
          type="button"
          onClick={() => setMobileTab('positions')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            mobileTab === 'positions'
              ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
              : 'bg-white/5 text-neutral-400 hover:text-white'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>OPEN ROLES ({POSITIONS_DATA.length})</span>
        </button>
      </div>

      {/* 3. Fixed-Height Desktop Workspace & Responsive Fixed Mobile Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row overflow-hidden md:border-x border-white/10 min-h-0">
        {/* Left Panel: Ethos, Revenue, CTA, & Links */}
        <section
          className={`w-full md:w-5/12 h-full border-b md:border-b-0 md:border-r border-white/10 bg-[#090c13]/60 overflow-hidden flex-col ${
            mobileTab === 'ethos' ? 'flex' : 'hidden md:flex'
          }`}
        >
          <EthosPanel onExploreRoles={() => setMobileTab('positions')} />
        </section>

        {/* Right Panel: Open Positions Matrix */}
        <section
          className={`w-full md:w-7/12 h-full bg-[#07090e] overflow-hidden flex-col ${
            mobileTab === 'positions' ? 'flex' : 'hidden md:flex'
          }`}
        >
          <PositionsPanel />
        </section>
      </div>
    </div>
  );
}
