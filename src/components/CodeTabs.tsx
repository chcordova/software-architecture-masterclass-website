import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

export interface Tab {
  label: string;
  code: string;
  language: string;
}

export interface CodeTabsProps {
  tabs: Tab[];
}

export const CodeTabs: React.FC<CodeTabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  const activeTab = tabs[activeTabIndex];

  return (
    <div className="rounded-lg overflow-hidden border border-slate-700 bg-[#1E1E1E] my-6 shadow-md not-prose">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-700 bg-slate-800/80">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none flex-1 sm:flex-none ${
              activeTabIndex === index
                ? 'text-indigo-400 border-b-2 border-indigo-500 bg-[#1E1E1E]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto text-sm font-mono">
        <Highlight
          theme={themes.vsDark}
          code={activeTab.code.trim()}
          language={activeTab.language as any}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} p-5 m-0`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 text-right mr-4 text-slate-600 select-none">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

