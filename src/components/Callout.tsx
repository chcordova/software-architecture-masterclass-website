import React from 'react';
import { Info, AlertTriangle, Flame } from 'lucide-react';

export interface CalloutProps {
  type: 'info' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ type, title, children }) => {
  const styles = {
    info: {
      container: 'bg-blue-50 border-blue-500 text-blue-900',
      icon: <Info className="w-6 h-6 text-blue-600" />,
      title: 'text-blue-800'
    },
    warning: {
      container: 'bg-amber-50 border-amber-500 text-amber-900',
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: 'text-amber-800'
    },
    danger: {
      container: 'bg-red-50 border-red-500 text-red-900',
      icon: <Flame className="w-6 h-6 text-red-600" />,
      title: 'text-red-800'
    }
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div className={`flex gap-4 p-5 my-6 border-l-4 rounded-r-lg shadow-sm not-prose ${currentStyle.container}`}>
      <div className="flex-shrink-0 mt-0.5">
        {currentStyle.icon}
      </div>
      <div className="flex-1">
        {title && <h4 className={`font-bold mb-2 text-lg m-0 ${currentStyle.title}`}>{title}</h4>}
        <div className="text-base leading-relaxed opacity-90">
          {children}
        </div>
      </div>
    </div>
  );
};
