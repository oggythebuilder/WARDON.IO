"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react'; // Install lucide-react

const toolCategories = [
  { id: 'http', title: 'HTTP Headers', subs: ['Security Headers', 'Server Info', 'Cookies', 'Raw Output'], path: '/http-headers' },
  { id: 'dns', title: 'DNS Records', subs: ['A Records', 'MX/TXT', 'Nameservers', 'Propagation'], path: '/dns-records' },
  { id: 'tech', title: 'Tech Stack', subs: ['Frameworks', 'CDNs', 'CMS Detection', 'Analytics'], path: '/tech-stack' },
  { id: 'whois', title: 'Whois Info', subs: ['Ownership', 'Registrar', 'Expiry', 'Privacy'], path: '/whois-info' },
  { id: 'maps', title: 'Sitemap & Robots', subs: ['XML Sitemap', 'Robots.txt', 'Hidden Paths'], path: '/sitemap-robots' },
  { id: 'threats', title: 'Security Threats', subs: ['Phishing', 'Blacklists', 'SSL Health'], path: '/security-threats' },
  { id: 'ports', title: 'Port Scanning', subs: ['Common Ports', 'Open Services', 'Protocols'], path: '/port-scanning' },
  { id: 'subs', title: 'Subdomains', subs: ['Sub-Enumeration', 'Hidden Assets', 'IP Mapping'], path: '/subdomains' },
  { id: 'meta', title: 'Metadata', subs: ['Image EXIF', 'PDF Tags', 'Doc Info'], path: '/metadata' },
  { id: 'score', title: 'Security Score', subs: ['Grade A-F', 'Risk Analysis', 'Fixes'], path: '/security-score' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [activeTab, setActiveTab] = useState<string | null>(null); // Desktop hover state
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false); // Mobile tool accordion

  // Close menus on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="relative z-[100] bg-[#0A0A0A] border-b border-white/5 italic w-full" style={{ fontFamily: 'Times New Roman' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-lg md:text-xl font-bold tracking-[0.4em] uppercase not-italic">
          WARDON.IO
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] text-gray-400">
          <Link href="/" className="hover:text-green-500 transition-colors">Surface Engine</Link>
          <Link href="/docs" className="hover:text-green-500 transition-colors">Docs</Link>
          
          <div 
            className="cursor-pointer hover:text-green-500 transition-colors flex items-center gap-1"
            onMouseEnter={() => setActiveTab('tools')}
          >
            Tool <ChevronDown size={10} className={activeTab === 'tools' ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </div>
        </div>

        {/* Desktop Button / Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block border border-white/20 px-6 py-2 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            Console_Entry
          </button>
          
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU (Hover) */}
      <AnimatePresence>
        {activeTab === 'tools' && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            onMouseLeave={() => setActiveTab(null)}
            className="hidden md:block absolute left-0 top-full w-full bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-12 px-10"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-y-10 gap-x-6">
              {toolCategories.map((tool) => (
                <Link key={tool.id} href={tool.path} className="group flex flex-col space-y-3">
                  <h3 className="text-white text-xs font-bold tracking-widest uppercase group-hover:text-green-500 transition-colors">
                    {tool.title}
                  </h3>
                  <div className="flex flex-col space-y-1 opacity-40 group-hover:opacity-100 transition-all">
                    {tool.subs.map(sub => (
                      <span key={sub} className="text-[9px] text-gray-400 lowercase italic">// {sub}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE OVERLAY MENU (Slide Down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0D0D0D] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6 text-[12px] uppercase tracking-widest text-gray-300">
              <Link href="/" onClick={() => setIsOpen(false)}>Surface Engine</Link>
              <Link href="/docs" onClick={() => setIsOpen(false)}>Docs</Link>
              
              {/* Mobile Tool Accordion */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-green-500"
                  onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                >
                  Tools <ChevronDown size={14} className={mobileToolsOpen ? 'rotate-180' : ''} />
                </button>
                
                {mobileToolsOpen && (
                  <div className="grid grid-cols-1 gap-4 mt-6 pl-4 border-l border-white/5">
                    {toolCategories.map((tool) => (
                      <Link 
                        key={tool.id} 
                        href={tool.path} 
                        onClick={() => setIsOpen(false)}
                        className="text-[10px] text-gray-500"
                      >
                        {tool.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <button className="w-full border border-white/20 py-4 text-[10px] tracking-widest text-white">
                CONSOLE_ENTRY
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;