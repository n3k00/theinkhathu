import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              သိင်္ခသူ
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-100 mb-2">
              ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး
            </p>
            <p className="text-lg text-emerald-200 mb-8">
              တောင်ကြီး ✦ တာချီလိတ် ✦ လားရှိုး
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                အကြောင်း ဖတ်ရန်
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                ဆက်သွယ်ရန်
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ပြေးဆွဲနေသော ယာဥ်လိုင်းများ
            </h2>
            <p className="text-gray-600">
              ရှမ်းပြည်နယ်ရှိ မြို့ကြီး ၃ မြို့သို့ ပုံမှန်ပြေးဆွဲပေးလျက်ရှိပါသည်
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                from: "တောင်ကြီး",
                to: "တာချီလိတ်",
                icon: "🚗",
              },
              {
                from: "တာချီလိတ်",
                to: "လားရှိုး",
                icon: "🚗",
              },
              {
                from: "တောင်ကြီး",
                to: "လားရှိုး",
                icon: "🚗",
              },
            ].map((route, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{route.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {route.from} ↔ {route.to}
                </h3>
                <p className="text-gray-600">ပုံမှန်ပြေးဆွဲ</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              အသုံးပြုထားသော ယာဥ်များ
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🚙</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Toyota Probox</h3>
              <p className="text-gray-600 leading-relaxed">
                ကုန်စည်နှင့် ခရီးသည်များ လုံခြုံစိတ်ချစွာ ပို့ဆောင်ပေးနိုင်ရန် 
                Probox ကားငယ်များဖြင့် ဝန်ဆောင်မှု ပေးလျက်ရှိပါသည်။
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            စီးနင်းလိုပါသလား?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            ကြိုတင်မှာယူလိုပါက ဆက်သွယ်ပါ
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            ဆက်သွယ်ရန်
          </Link>
        </div>
      </section>
    </div>
  );
}
