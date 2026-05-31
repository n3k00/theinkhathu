"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    route: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", route: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-emerald-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ဆက်သွယ်ရန်</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            ကြိုတင်မှာယူလိုပါက သို့မဟုတ် မေးစရာရှိပါက ဆက်သွယ်ပါ
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ဆက်သွယ်ရန် အချက်အလက်</h2>
              <p className="text-gray-600 mb-8">
                ယာဥ်လိုင်းနှင့် ပတ်သက်၍ ကြိုတင်မှာယူလိုပါက အောက်ပါ နည်းလမ်းများဖြင့် ဆက်သွယ်နိုင်ပါသည်။
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ဖုန်း</h3>
                    <p className="text-gray-600">+95 9 XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">အီးမေးလ်</h3>
                    <p className="text-gray-600">info@theinkhathu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ပြေးဆွဲနေသော လမ်းကြောင်းများ</h3>
                    <p className="text-gray-600">တောင်ကြီး ↔ တာချီလိတ် ↔ လားရှိုး</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ကြိုတင်မှာယူရန်</h2>

              {isSubmitted ? (
                <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-semibold">ကျေးဇူးတင်ပါသည်!</p>
                  <p>သင့်မှာယူမှုကို လက်ခံရရှိပါပြီ။ မကြာမီ ပြန်လည် ဆက်သွယ်ပါမည်။</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    အမည်
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="သင့်အမည်"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    ဖုန်းနံပါတ်
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    placeholder="09 XXXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="route" className="block text-sm font-medium text-gray-700 mb-1">
                    လမ်းကြောင်း
                  </label>
                  <select
                    id="route"
                    name="route"
                    value={formData.route}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                  >
                    <option value="">လမ်းကြောင်း ရွေးပါ</option>
                    <option value="taunggyi-tachileik">တောင်ကြီး → တာချီလိတ်</option>
                    <option value="tachileik-taunggyi">တာချီလိတ် → တောင်ကြီး</option>
                    <option value="tachileik-lashio">တာချီလိတ် → လားရှိုး</option>
                    <option value="lashio-tachileik">လားရှိုး → တာချီလိတ်</option>
                    <option value="taunggyi-lashio">တောင်ကြီး → လားရှိုး</option>
                    <option value="lashio-taunggyi">လားရှိုး → တောင်ကြီး</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    အကြောင်းအရာ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                    placeholder="ခရီးသည် အရေအတွက်၊ ကုန်ပစ္စည်း အမျိုးအစား စသဖြင့်"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "ပို့နေသည်..." : "မှာယူရန်"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
