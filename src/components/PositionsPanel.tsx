import React, { useState } from 'react';
import { POSITIONS_DATA, GOOGLE_FORM_URL } from '../data/positions';
import { ChevronDown, ChevronUp, Check, ExternalLink, ClipboardList } from 'lucide-react';

export const PositionsPanel: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="h-full flex flex-col p-3.5 sm:p-6 lg:p-7 overflow-hidden min-h-0">
      {/* Role Cards List: Internal scroll within fixed container, no outer page scroll */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-2.5 sm:space-y-3 min-h-0">
        {POSITIONS_DATA.map((pos) => {
          const isExpanded = expandedId === pos.id;

          return (
            <div
              key={pos.id}
              className={`rounded-2xl border transition-all duration-200 bg-[#0d1017] ${
                isExpanded 
                  ? 'border-emerald-500/40 ring-1 ring-emerald-500/20 shadow-lg shadow-emerald-950/20 bg-[#0f141e]' 
                  : 'border-white/10 hover:border-white/20 hover:bg-[#0f131a]'
              }`}
            >
              {/* Clickable Header Bar */}
              <button
                type="button"
                onClick={() => toggleExpand(pos.id)}
                className="w-full text-left p-3.5 sm:p-4.5 flex items-start sm:items-center justify-between gap-3 cursor-pointer focus:outline-none"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform mt-0.5 sm:mt-0">
                    {pos.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight font-display break-words">
                        {pos.title}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-emerald-400/90 border border-white/10 shrink-0">
                        {pos.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1 font-normal leading-relaxed break-words">
                      {pos.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 p-1.5 rounded-lg bg-white/5 text-neutral-400 mt-0.5 sm:mt-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Sub Category Expanded Details: ONLY place where Apply button exists */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-1 border-t border-white/5 space-y-3.5 animate-fade-in">
                  {/* Jobdesk checklist */}
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                      <ClipboardList className="w-3.5 h-3.5" />
                      <span>Jobdesk Checklist</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-300">
                      {pos.jobdesk.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.03]">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed break-words">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Looking for & The Sole Apply Button */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-0.5">
                        What we're looking for
                      </span>
                      <p className="text-xs text-neutral-200 font-medium leading-relaxed break-words">{pos.lookingFor}</p>
                    </div>

                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-mono font-bold uppercase transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                    >
                      <span className="sm:hidden">Apply for Position</span>
                      <span className="hidden sm:inline">Apply for {pos.title.replace(/[^\w\s/]/gi, '').trim()}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
