import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thein Khathu
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              သင့်အတွက် အကောင်းဆုံး ဝန်ဆောင်မှုများ ပေးအပ်ရန် ကြိုးစားနေပါသည်။
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

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              သင့်လိုအပ်ချက်အလိုက် အကောင်းဆုံး ဖြေရှင်းချက်များ ပေးအပ်ပါသည်
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "သတင်းအချက်အလက်",
                description: "နောက်ဆုံးရ သတင်းအချက်အလက်များကို အချိန်နှင့်တပြေးညီ ရရှိနိုင်ပါသည်။",
                icon: "📰",
              },
              {
                title: "ယုံကြည်စိတ်ချရ",
                description: "စစ်မှန်သော သတင်းအချက်အလက်များကိုသာ ဖော်ပြပေးပါသည်။",
                icon: "✅",
              },
              {
                title: "အခမဲ့ ဝန်ဆောင်မှု",
                description: "လူတိုင်း အသုံးပြုနိုင်ရန် အခမဲ့ ဝန်ဆောင်မှု ပေးအပ်ပါသည်။",
                icon: "🆓",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ဆက်သွယ်လိုပါသလား?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            မေးစရာရှိပါက သို့မဟုတ် ပူးပေါင်းဆောင်ရွက်လိုပါက ဆက်သွယ်ပါ။
          </p>
          <Link
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            ဆက်သွယ်ရန်
          </Link>
        </div>
      </section>
    </div>
  );
}
