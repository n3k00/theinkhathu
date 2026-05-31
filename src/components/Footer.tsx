export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">သိင်္ခသူ</h3>
            <p className="text-emerald-400 mb-3">ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး</p>
            <p className="text-gray-400">
              တောင်ကြီး ✦ တာချီလိတ် ✦ လားရှိုး
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">လင့်ခ်များ</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">ပင်မစာမျက်နှာ</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">အကြောင်း</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">ဆက်သွယ်ရန်</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">ဆက်သွယ်ရန်</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📱 +95 9 XXX XXXX</li>
              <li>📧 info@theinkhathu.com</li>
              <li>📍 တောင်ကြီး / တာချီလိတ် / လားရှိုး</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} သိင်္ခသူ ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး။ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
