'use client';

export default function AIResponseCard({ message }: { message: string }) {
  return (
    <div className="bg-indigo-100 dark:bg-indigo-900 border border-indigo-300 dark:border-indigo-600 text-indigo-900 dark:text-indigo-200 rounded-md px-4 py-3 my-4 shadow">
      {message}
    </div>
  );
}
