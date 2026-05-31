import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "အကြောင်း - Thein Khathu",
  description: "Thein Khathu အကြောင်း သိကောင်းစရာများ",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ကျွန်ုပ်တို့အကြောင်း</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Thein Khathu ၏ ရည်ရွယ်ချက်နှင့် ရာဇဝင်
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ကျွန်ုပ်တို့ ဘယ်သူလဲ</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thein Khathu သည် မြန်မာနိုင်ငံရှိ ပြည်သူများအား သတင်းအချက်အလက်များ အချိန်နှင့်တပြေးညီ
              ပေးအပ်ရန် ရည်ရွယ်ထားသော website တစ်ခု ဖြစ်ပါသည်။
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ကျွန်ုပ်တို့သည် စစ်မှန်သော သတင်းအချက်အလက်များကိုသာ ဖော်ပြပေးပြီး၊ ပြည်သူများ၏
              သိရှိလိုသော ဆန္ဒကို ဖြည့်ဆည်းပေးရန် ကြိုးစားနေပါသည်။
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "သတင်းအချက်အလက် ဖြန့်ဝေခြင်း",
                  description: "နေ့စဉ် ဖြစ်ပျက်နေသော အကြောင်းအရာများကို ပြည်သူများ သိရှိနိုင်ရန် ဖြန့်ဝေပေးပါသည်။",
                },
                {
                  title: "ပညာပေးခြင်း",
                  description: "ဗဟုသုတ ရရှိစေမည့် ဆောင်းပါးများကို ဖော်ပြပေးပါသည်။",
                },
                {
                  title: "ယဉ်ကျေးမှု ထိန်းသိမ်းခြင်း",
                  description: "မြန်မာ့ယဉ်ကျေးမှုကို ထိန်းသိမ်းစောင့်ရှောက်ပါသည်။",
                },
                {
                  title: "အသိုင်းအဝိုင်း တည်ဆောက်ခြင်း",
                  description: "ပြည်သူများ အတူတကွ ပူးပေါင်းဆောင်ရွက်နိုင်ရန် ကူညီပေးပါသည်။",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">ကျွန်ုပ်တို့၏ တန်ဖိုးများ</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>ရိုးသားမှု</strong> - အမြဲတမ်း ရိုးသားစွာ ဖော်ပြပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>တိကျမှု</strong> - စစ်မှန်သော သတင်းအချက်အလက်များသာ ဖော်ပြပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>အချိန်မီ</strong> - နောက်ဆုံးရ သတင်းများကို အချိန်နှင့်တပြေးညီ ဖော်ပြပါသည်</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span><strong>လူတိုင်းရောက်ရှိနိုင်မှု</strong> - လူတိုင်း အသုံးပြုနိုင်အောင် ကြိုးစားပါသည်</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
