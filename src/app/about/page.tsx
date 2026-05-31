import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "အကြောင်း - သိင်္ခသူ ပို့ဆောင်ရေး",
  description: "သိင်္ခသူ ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး အကြောင်း",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ကျွန်ုပ်တို့အကြောင်း</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            သိင်္ခသူ ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေး
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">သိင်္ခသူ ပို့ဆောင်ရေး</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              သိင်္ခသူ ခရီးသည်နှင့်ကုန်စည် ပို့ဆောင်ရေးသည် ရှမ်းပြည်နယ်ရှိ မြို့ကြီး ၃ မြို့ဖြစ်သော 
              တောင်ကြီး၊ တာချီလိတ်၊ လားရှိုး မြို့များသို့ ယာဥ်လိုင်းပြေးဆွဲလျက်ရှိပါသည်။
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ကျွန်ုပ်တို့သည် ခရီးသည်များနှင့် ကုန်ပစ္စည်းများကို လုံခြုံစိတ်ချစွာ အချိန်မီ 
              ပို့ဆောင်ပေးရန် ကတိပြုပါသည်။
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ပြေးဆွဲနေသော လမ်းကြောင်းများ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { from: "တောင်ကြီး", to: "တာချီလိတ်" },
                { from: "တာချီလိတ်", to: "လားရှိုး" },
                { from: "တောင်ကြီး", to: "လားရှိုး" },
              ].map((route, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <h3 className="text-lg font-semibold text-gray-900">{route.from} ↔ {route.to}</h3>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">အသုံးပြုထားသော ယာဥ်များ</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ကျွန်ုပ်တို့သည် Toyota Probox ကားငယ်များဖြင့် ခရီးသည်နှင့် ကုန်စည်များကို 
              ပို့ဆောင်ပေးလျက်ရှိပါသည်။ ကားငယ်ဖြစ်သော်လည်း လုံခြုံစိတ်ချရပြီး 
              အချိန်မီ ပို့ဆောင်ပေးနိုင်ပါသည်။
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ကျွန်ုပ်တို့၏ တန်ဖိုးများ</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>လုံခြုံစိတ်ချရမှု</strong> - ခရီးသည်နှင့် ကုန်ပစ္စည်းများကို လုံခြုံစွာ ပို့ဆောင်ပေးပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>အချိန်မှန်</strong> - သတ်မှတ်ထားသော အချိန်အတိုင်း ပြေးဆွဲပေးပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>တတ်နိုင်သော ဈေးနှုန်း</strong> - သက်သာသော ဈေးနှုန်းဖြင့် ဝန်ဆောင်မှု ပေးပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>ယုံကြည်စိတ်ချရ</strong> - နှစ်ပေါင်းများစွာ ဝန်ဆောင်မှု ပေးအပ်ခဲ့ပါသည်</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
