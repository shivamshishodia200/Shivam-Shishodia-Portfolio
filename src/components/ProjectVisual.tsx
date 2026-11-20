import {
  Bot,
  Box,
  Camera,
  LayoutTemplate,
  MapPin,
  MessageSquare,
  Printer,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectVisualProps {
  project: ProjectItem;
}

export default function ProjectVisual({ project }: ProjectVisualProps) {
  switch (project.visualType) {
    case 'rp-storage':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1B1E24] dark:to-[#131519]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">RP CATALOGUE</span>
            <span>B2B Enquiry</span>
          </div>
          <div className="my-2 grid grid-cols-3 gap-2">
            {['Heavy Rack', 'Pallet Bay', 'Mezzanine'].map((slot) => (
              <div
                key={slot}
                className="flex flex-col items-center justify-center rounded-lg border border-zinc-300/70 bg-white/90 p-2.5 text-center dark:border-zinc-700/70 dark:bg-[#232730]"
              >
                <Box className="h-4 w-4 text-[#4D7C0F] dark:text-[#A3E635]" />
                <span className="mt-1.5 text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-full">
                  {slot}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-lg border border-zinc-300/60 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700/70 dark:bg-[#20232B] dark:text-zinc-300">
            <span>Request Custom Quote</span>
            <span className="font-mono font-bold text-[#4D7C0F] dark:text-[#A3E635]">→</span>
          </div>
        </div>
      );

    case 'delivery-plus':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1A1D22] dark:to-[#121418]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">DISPATCHER MAP</span>
            <span>Merchant Ops</span>
          </div>
          <div className="relative my-2 flex-1 overflow-hidden rounded-lg border border-zinc-300/80 bg-white/90 p-3 dark:border-zinc-700/80 dark:bg-[#14171D]">
            <svg viewBox="0 0 220 70" className="h-full w-full" aria-hidden="true">
              <path
                d="M15 55 Q 70 15, 115 38 T 205 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="text-[#65A30D] dark:text-[#A3E635]"
              />
              <circle cx="15" cy="55" r="4.5" className="fill-[#65A30D] dark:fill-[#A3E635]" />
              <circle cx="115" cy="38" r="4" className="fill-zinc-900 dark:fill-white" />
              <circle cx="205" cy="18" r="4.5" className="fill-[#65A30D] dark:fill-[#A3E635]" />
            </svg>
            <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
              <MapPin className="h-3 w-3 text-[#4D7C0F] dark:text-[#A3E635]" />
              <span>Active Route Sync</span>
            </div>
          </div>
        </div>
      );

    case 'attendlok':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1B1D23] dark:to-[#13151A]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">ATTENDLOK</span>
            <span>Field &amp; Team</span>
          </div>
          <div className="my-2 flex items-center gap-3 rounded-lg border border-zinc-300/80 bg-white/90 p-3 dark:border-zinc-700/80 dark:bg-[#22252D]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#A3E635]/20 text-[#3F6212] dark:bg-[#A3E635]/15 dark:text-[#A3E635]">
              <Camera className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-zinc-900 dark:text-white">
                Selfie + GPS Check-In
              </div>
              <div className="mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                Verified Coordinates · Manager Log
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            <span>SHIFT LOGGED</span>
            <span className="text-[#4D7C0F] dark:text-[#A3E635]">09:30 AM</span>
          </div>
        </div>
      );

    case 'bioglobal':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-stone-100 to-zinc-200/70 p-4 dark:from-[#1D1E22] dark:to-[#141518]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-serif italic">TheBioGlobal</span>
            <span>Formulations</span>
          </div>
          <div className="my-2 flex items-center justify-between rounded-lg border border-zinc-300/70 bg-white/90 p-3 dark:border-zinc-700/70 dark:bg-[#22242A]">
            <div>
              <div className="text-xs font-bold text-zinc-900 dark:text-white">
                Beauty &amp; Personal Care
              </div>
              <div className="mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400">
                Private Label Manufacturing
              </div>
            </div>
            <Sparkles className="h-5 w-5 text-[#4D7C0F] dark:text-[#A3E635]" />
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-zinc-600 dark:text-zinc-300">
            <div className="rounded bg-white/80 px-2 py-1 dark:bg-[#1E2026]">Skincare Line</div>
            <div className="rounded bg-white/80 px-2 py-1 dark:bg-[#1E2026]">R&amp;D Standards</div>
          </div>
        </div>
      );

    case 'naflins':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1A1D22] dark:to-[#121418]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">NAFLINS STORE</span>
            <span>API Storefront</span>
          </div>
          <div className="my-2 grid grid-cols-2 gap-2">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-zinc-300/70 bg-white/90 p-2.5 dark:border-zinc-700/70 dark:bg-[#22252D]"
              >
                <div className="flex items-center justify-between">
                  <ShoppingBag className="h-3.5 w-3.5 text-[#4D7C0F] dark:text-[#A3E635]" />
                  <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    CAT-0{item}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-4/5 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded bg-zinc-200 dark:bg-zinc-700" />
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            GET /api/products · Deployed
          </div>
        </div>
      );

    case '360crm-ai':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1B1E24] dark:to-[#131519]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">360CRM AGENT</span>
            <span>AI Copilot</span>
          </div>
          <div className="my-2 rounded-lg border border-zinc-300/80 bg-white/90 p-3 dark:border-zinc-700/80 dark:bg-[#21242C]">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-[#4D7C0F] dark:text-[#A3E635]" />
              <span className="text-xs font-bold text-zinc-900 dark:text-white">
                CRM Agent Thread
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
              <div className="h-1.5 w-3/4 rounded bg-[#A3E635]/50 dark:bg-[#A3E635]/35" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            Automated Lead Summary
          </div>
        </div>
      );

    case 'chatharbor':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1A1E22] dark:to-[#121518]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">CHATHARBOR</span>
            <span>WhatsApp CRM</span>
          </div>
          <div className="my-2 space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-300/80 bg-white/90 px-3 py-2 dark:border-zinc-700/80 dark:bg-[#22252D]">
              <MessageSquare className="h-3.5 w-3.5 text-[#4D7C0F] dark:text-[#A3E635]" />
              <span className="text-[11px] font-medium text-zinc-800 dark:text-zinc-200 truncate">
                Imported Chat Archive · 142 Contacts
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-zinc-300/60 bg-white/70 px-3 py-1.5 text-[10px] text-zinc-600 dark:border-zinc-700/60 dark:bg-[#1E2128] dark:text-zinc-400">
              <span>Contact Pipeline Synced</span>
              <span className="font-mono text-[#4D7C0F] dark:text-[#A3E635]">Ready</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            Unified Contact Directory
          </div>
        </div>
      );

    case 'dkb-ventures':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-stone-100 to-zinc-200/70 p-4 dark:from-[#1C1D22] dark:to-[#131418]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-serif italic">DKB Ventures</span>
            <span>Profile UI</span>
          </div>
          <div className="my-2 flex items-center gap-3 rounded-lg border border-zinc-300/80 bg-white/90 p-3 dark:border-zinc-700/80 dark:bg-[#22242A]">
            <LayoutTemplate className="h-5 w-5 shrink-0 text-[#4D7C0F] dark:text-[#A3E635]" />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-bold text-zinc-900 dark:text-white">
                Editorial Profile Redesign
              </div>
              <div className="mt-1 h-1.5 w-4/5 rounded bg-zinc-200 dark:bg-zinc-700" />
            </div>
          </div>
          <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
            Beauty &amp; Wellness Brand Architecture
          </div>
        </div>
      );

    case 'labelstudio':
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-4 dark:from-[#1B1E23] dark:to-[#131519]">
          <div className="flex items-center justify-between text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-mono">LABELSTUDIO.EXE</span>
            <span>Windows App</span>
          </div>
          <div className="my-2 flex items-center justify-between rounded-lg border border-dashed border-zinc-400/80 bg-white/95 p-3 dark:border-zinc-600 dark:bg-[#21242C]">
            <div>
              <div className="font-mono text-[11px] font-bold text-zinc-900 dark:text-white">
                100mm × 50mm
              </div>
              <div className="mt-1 flex gap-1">
                {[3, 1, 2, 1, 3, 2, 1].map((w, i) => (
                  <span
                    key={i}
                    className="inline-block h-4 bg-zinc-900 dark:bg-zinc-200"
                    style={{ width: `${w * 2}px` }}
                  />
                ))}
              </div>
            </div>
            <Printer className="h-5 w-5 text-[#4D7C0F] dark:text-[#A3E635]" />
          </div>
          <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            Thermal Print &amp; Setup Utility
          </div>
        </div>
      );
  }
}
