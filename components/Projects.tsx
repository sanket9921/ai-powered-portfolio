'use client';

export default function Projects() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-md shadow">
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Job Portal - MERN stack with student/company/TPO roles</li>
        <li>Mock Test App - Real-time score + analytics (ByTrait)</li>
        <li>AI Portfolio - What you’re seeing right now!</li>
      </ul>
    </div>
  );
}
