import React, { useState } from 'react';
import { Folder, FolderOpen, FileText } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface FileTreeProps {
  structure: FileNode[];
  className?: string;
}

const TreeNode: React.FC<{ node: FileNode; depth: number }> = ({ node, depth }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = node.type === 'folder';

  return (
    <div className="font-mono text-sm">
      <div 
        className={cn(
          "flex items-center gap-1.5 py-1 px-2 cursor-pointer text-gray-300 select-none transition-colors hover:bg-[#2A2D2E]",
          !isFolder && "hover:bg-[#2A2D2E] cursor-default"
        )}
        style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        {isFolder ? (
          isOpen ? <FolderOpen className="w-4 h-4 text-blue-400 shrink-0" /> : <Folder className="w-4 h-4 text-blue-400 shrink-0" />
        ) : (
          <FileText className="w-4 h-4 text-gray-400 shrink-0" />
        )}
        <span className="truncate">{node.name}</span>
      </div>
      
      {isFolder && isOpen && node.children && (
        <div>
          {node.children.map((child, idx) => (
            <TreeNode key={`${child.name}-${idx}`} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ structure, className }) => {
  return (
    <div className={cn("bg-[#1E1E1E] border border-[#333] rounded-xl overflow-hidden py-3 my-6 shadow-xl", className)}>
      {structure.map((node, idx) => (
        <TreeNode key={`${node.name}-${idx}`} node={node} depth={0} />
      ))}
    </div>
  );
};
