export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 border-t">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="text-blue-600 hover:underline">Privacy</a>
        <a href="/terms" className="text-blue-600 hover:underline">Terms</a>
      </div>
    </footer>
  );
}