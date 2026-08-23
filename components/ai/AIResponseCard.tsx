'use client';

export interface AIResponseCardProps {
  message: string;
}

export default function AIResponseCard({ message }: AIResponseCardProps) {
  return (
    <div className="bg-indigo-100 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-600 text-indigo-900 dark:text-indigo-200 rounded-md px-4 py-3 my-4 shadow max-w-4xl mx-auto">
      {message}
    </div>
  );
}
