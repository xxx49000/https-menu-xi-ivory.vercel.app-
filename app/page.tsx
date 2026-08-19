import {
  Utensils,
  Coffee,
  Cookie,
  Star,
  Landmark,
  Award,
  CircleCheck,
  Drumstick,
  Soup,
  Flame,
  Snowflake,
  CakeSlice,
  QrCode,
} from "lucide-react"
import { QrSection } from "@/components/qr-section"

const mainMeals = [
  { name: "طبق إفطار فندق", desc: "وجبة إفطار فندقية كاملة ومتنوعة", member: 100, visitor: 115 },
  { name: "فيليه بيف ماشروم صوص", desc: "يُقدم مع أرز أبيض وخضار سوتيه", member: 225, visitor: 260 },
  { name: "ميكس جريل كبير", desc: "ربع دجاج، 2 ستيك، 3 كفتة، أرز، خضار", member: 420, visitor: 485 },
  { name: "ميني ميكس جريل", desc: "صدور دجاج، 2 كفتة، شريحة ستيك", member: 275, visitor: 320 },
  { name: "ستيك مشوي على الفحم", desc: "مع مكرونة وبوم شيبسي", member: 250, visitor: 290 },
  { name: "كفتة مشوية على الفحم", desc: "على السيخ أو شامي", member: 215, visitor: 250 },
  { name: "دجاج بانيه", desc: "مع مكرونة وبوم شيبسي", member: 180, visitor: 210 },
  { name: "دجاج مشوي على الفحم", desc: "نصف دجاجة مع أرز وخضار", member: 230, visitor: 265 },
  { name: "صدور دجاج فيليه مشوي", desc: "على الفحم متبلة طازجة", member: 180, visitor: 210 },
  { name: "شيش طاووق تركيا", desc: "قطع دجاج متبلة مشوية", member: 185, visitor: 215 },
  { name: "دجاج وكفتة", desc: "ربع دجاج مع كفتة مشوية", member: 230, visitor: 265 },
  { name: "صدور دجاج بصوص الليمون", desc: "صدور دجاج مع صوص ليمون", member: 185, visitor: 215 },
  { name: "ميكس سي فوود", desc: "جمبري، كاليماري، فيليه سمك", member: 245, visitor: 285 },
  { name: "فيليه سمك مقلي", desc: "فيليه سمك مقلي مقرمش", member: 160, visitor: 185 },
]

const hotDrinks = [
  { name: "شاي أحمر (فتلة / كشري)", price: 7 },
  { name: "شاي بالنعناع", price: 9 },
  { name: "شاي أخضر", price: 8 },
  { name: "شاي باللبن", price: 12 },
  { name: "أعشاب طبيعية", price: 7 },
  { name: "قهوة تركي (فاتح/غمق/محوج)", price: 13 },
  { name: "قهوة باللبن", price: 24 },
  { name: "قهوة دوبل", price: 20 },
  { name: "إسبريسو", price: 24 },
  { name: "نسكافيه بلاك", price: 10 },
  { name: "نسكافيه باللبن", price: 20 },
  { name: "كابيتشينو", price: 36 },
  { name: "كاكاو ساخن", price: 29 },
  { name: "سحلب بالمكسرات", price: 24 },
  { name: "شيكولاتة جلاسية", price: 30 },
  { name: "قرفة حليب", price: 8 },
  { name: "هوت سيدر (تفاح ساخن)", price: 27 },
  { name: "ليمون ساخن", price: 7 },
]

const coldDrinks = [
  { name: "مياه معدنية (صغيرة)", price: 6 },
  { name: "مياه معدنية (كبيرة)", price: 10 },
  { name: "عصير مانجو طازج", price: 37 },
  { name: "عصير جوافة", price: 24 },
  { name: "عصير برتقال طازج", price: 32 },
  { name: "عصير فراولة", price: 26 },
  { name: "عصير بطيخ", price: 19 },
  { name: "عناب (كركديه بارد)", price: 16 },
  { name: "ليمون نعناع منعش", price: 13 },
  { name: "موز باللبن", price: 23 },
  { name: "زبادي سادة", price: 27 },
  { name: "زبادي فواكه", price: 32 },
  { name: "عصير معلب", price: 13 },
  { name: "آيس كوفي", price: 28 },
  { name: "صن شاين", price: 22 },
  { name: "كانز غازي", price: 21 },
  { name: "زجاجة مانجو (1 لتر)", price: 141 },
]

const bakery = [
  { name: "باتيه (بالجبن/الشوكولاتة)", member: 16, visitor: 20 },
  { name: "كرواسون طازج", member: 15, visitor: 18 },
  { name: "دنش فواكه", member: 19, visitor: 22 },
  { name: "إكلير", member: 16, visitor: 19 },
  { name: "بالميه مقرمش", member: 15, visitor: 18 },
  { name: "براونيز كيك", member: 36, visitor: 42 },
  { name: "ملفيه", member: 24, visitor: 28 },
  { name: "أرز باللبن", member: 24, visitor: 28 },
  { name: "جيلي فواكه", member: 21, visitor: 25 },
  { name: "عيش باجيت فرنسي", member: 24, visitor: 28 },
  { name: "قراقيش سادة/عجوة (1 كجم)", member: 115, visitor: 140 },
  { name: "بسكويت سمسم (1 كجم)", member: 137, visitor: 158 },
  { name: "بيتي فور فاخر (1 كجم)", member: 220, visitor: 253 },
  { name: "كوكيز مشكل (1 كجم)", member: 134, visitor: 155 },
  { name: "حجازية إسكندراني", member: 106, visitor: 122 },
  { name: "بسيمة سادة (1 كجم)", member: 269, visitor: 310 },
  { name: "هريسة إسكندراني (1 كجم)", member: 99, visitor: 114 },
  { name: "بسبوسة طازجة (1 كجم)", member: 110, visitor: 127 },
  { name: "كنافة مبرومة", member: 478, visitor: 550 },
  { name: "كنافة شيكولاتة", member: 178, visitor: 205 },
  { name: "ساليزون موالح (1 كجم)", member: 313, visitor: 360 },
  { name: "باتون ساليه (1 كجم)", member: 120, visitor: 138 },
  { name: "فطير مشلتت بلدي", member: 93, visitor: 107 },
  { name: "جاتوه سواريه (1 كجم)", member: 305, visitor: 351 },
]

const cakes = [
  { size: "تورتة مقاس 24 سم", member: 366, visitor: 421 },
  { size: "تورتة مقاس 20×30", member: 688, visitor: 792 },
  { size: "تورتة مقاس 30×40", member: 850, visitor: 978 },
  { size: "تورتة مقاس 40×40", member: 943, visitor: 1085 },
  { size: "تورتة جامبو 40×60", member: 1441, visitor: 1658 },
]

const navLinks = [
  { href: "#mains", label: "الوجبات الرئيسية", icon: Utensils },
  { href: "#drinks", label: "المشروبات", icon: Coffee },
  { href: "#bakery", label: "الحلواني والمخبوزات", icon: Cookie },
  { href: "#pension", label: "وجبة المعاشات", icon: Star, highlight: true },
  { href: "#qr", label: "رمز QR", icon: QrCode },
]

function DualPrice({ member, visitor }: { member: number; visitor: number }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold whitespace-nowrap bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-100">
      <span className="text-brand-green">
        {member} <span className="text-[10px]">ج.م</span>
      </span>
      <span className="text-slate-300">|</span>
      <span className="text-slate-600">
        {visitor} <span className="text-[10px]">ج.م</span>
      </span>
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-brand-cream text-slate-800 antialiased">
      {/* Sticky quick-jump nav */}
      <nav className="no-print sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white border-b border-brand-gold/30 shadow-lg">
        <div className="max-w-4xl mx-auto px-3 py-2.5 flex items-center justify-between overflow-x-auto gap-2 text-xs font-semibold">
          {navLinks.map(({ href, label, icon: Icon, highlight }) => (
            <a
              key={href}
              href={href}
              className={
                highlight
                  ? "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/30 hover:bg-amber-500 text-amber-300 hover:text-slate-900 border border-amber-500/40 transition whitespace-nowrap"
                  : "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold/20 hover:bg-brand-gold hover:text-brand-dark text-brand-gold transition whitespace-nowrap"
              }
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero header */}
      <header className="bg-gradient-to-b from-brand-dark via-emerald-950 to-brand-green text-white relative overflow-hidden border-b-4 border-brand-gold shadow-md">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-4 py-8 relative z-10 text-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-brand-dark/80 border-2 border-brand-gold p-1 flex items-center justify-center shadow-inner">
            <div className="w-full h-full rounded-full border border-brand-gold/50 flex items-center justify-center bg-emerald-900/40">
              <Landmark className="w-8 h-8 text-brand-gold" />
            </div>
          </div>

          <span className="inline-block px-3 py-0.5 bg-brand-gold text-brand-dark text-xs font-bold rounded-full mb-2 tracking-wide">
            الإسكندرية
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-brand-gold mb-3 tracking-wide leading-snug text-balance">
            نادي ودار البنك الأهلي المصري
          </h1>
          <p className="text-emerald-100 text-sm md:text-base font-light mt-3 text-pretty">
            قائمة الوجبات والمشروبات والخدمات بالنادى والدار
          </p>

          <div className="mt-6 inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-2xl border border-brand-gold/30 text-xs text-emerald-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
              <span>
                السعر للـ <strong>أعضاء</strong>
              </span>
            </div>
            <span className="text-brand-gold">|</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span>
                السعر لـ <strong>غير الأعضاء</strong>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* QR popup (opens when clicking the "رمز QR" link) */}
      <QrSection />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        {/* Pensioners meal banner */}
        <section id="pension" className="scroll-mt-16">
          <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white rounded-3xl p-6 shadow-xl border-2 border-amber-300/60 relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 text-amber-900/30 text-9xl font-bold select-none pointer-events-none">
              65
            </div>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-amber-400/40 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-amber-900/40 flex items-center justify-center text-amber-200 border border-amber-300">
                    <Award className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold text-white">وجبة موظفي المعاشات المميزة</h2>
                    <p className="text-xs text-amber-100">سعر موحد ومخصص لأسرة البنك الأهلي المصري</p>
                  </div>
                </div>
                <div className="bg-amber-950/80 border border-amber-300 text-amber-200 px-4 py-1.5 rounded-xl font-bold text-lg text-center">
                  65 <span className="text-xs font-normal">ج.م</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-amber-950/30 rounded-2xl p-3 border border-amber-400/20">
                  <h3 className="font-bold text-amber-200 text-sm mb-1.5 flex items-center gap-1">
                    <CircleCheck className="w-4 h-4 text-amber-400" />
                    الأطباق المرفقة:
                  </h3>
                  <p className="text-amber-50">شوربة اليوم + سلطة طازجة + خبز طازج</p>
                </div>
                <div className="bg-amber-950/30 rounded-2xl p-3 border border-amber-400/20">
                  <h3 className="font-bold text-amber-200 text-sm mb-1.5 flex items-center gap-1">
                    <Drumstick className="w-4 h-4 text-amber-400" />
                    1. الطبق الرئيسي:
                  </h3>
                  <p className="text-amber-50 leading-relaxed">
                    صدور دجاج بانيه أو مشوي / كفتة مشوية / ربع دجاج مشوي أو روستو / روز بيف بصوص الماشروم / شيش طاووق
                  </p>
                </div>
              </div>

              <div className="mt-3 bg-amber-950/30 rounded-2xl p-3 border border-amber-400/20 text-xs">
                <h3 className="font-bold text-amber-200 mb-1 flex items-center gap-1">
                  <Soup className="w-4 h-4 text-amber-400" />
                  2. اختر الطبق:
                </h3>
                <p className="text-amber-50">
                  مكرونة وايت/ريد صوص <strong>أو</strong> أرز اليوم + طاجن اليوم <strong>أو</strong> بطاطس محمرة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main meals */}
        <section id="mains" className="scroll-mt-16">
          <div className="flex items-center justify-between border-b-2 border-brand-gold/40 pb-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green text-brand-gold flex items-center justify-center shadow">
                <Utensils className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-dark">الوجبات والأطباق الرئيسية</h2>
                <p className="text-xs text-slate-500">تُقدم جميع الأطباق مع مقبلاتها المذكورة</p>
              </div>
            </div>
            <div className="hidden sm:flex text-xs font-bold text-slate-500 gap-4 pl-2">
              <span>عضو</span>
              <span>زائر</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainMeals.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:border-brand-gold/50 transition"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <DualPrice member={item.member} visitor={item.visitor} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section id="drinks" className="scroll-mt-16">
          <div className="flex items-center justify-between border-b-2 border-brand-gold/40 pb-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green text-brand-gold flex items-center justify-center shadow">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-dark">منيو الكافيتريا (المشروبات)</h2>
                <p className="text-xs text-slate-500">أسعار موحدة لجميع الزوار والأعضاء</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <h3 className="text-sm font-bold text-brand-green mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                المشروبات الساخنة
              </h3>
              <div className="space-y-3 text-xs">
                {hotDrinks.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{d.name}</span>
                    <span className="dotted-line" />
                    <span className="font-bold text-brand-green text-sm whitespace-nowrap">{d.price} ج.م</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <h3 className="text-sm font-bold text-brand-green mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-sky-500" />
                المشروبات الباردة والعصائر
              </h3>
              <div className="space-y-3 text-xs">
                {coldDrinks.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <span className="font-semibold text-slate-800">{d.name}</span>
                    <span className="dotted-line" />
                    <span className="font-bold text-brand-green text-sm whitespace-nowrap">{d.price} ج.م</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bakery */}
        <section id="bakery" className="scroll-mt-16">
          <div className="flex items-center justify-between border-b-2 border-brand-gold/40 pb-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green text-brand-gold flex items-center justify-center shadow">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand-dark">الحلواني والمخبوزات والشرقيات</h2>
                <p className="text-xs text-slate-500">حلويات فاخرة، تورتات للمناسبات ومخبوزات طازجة يومياً</p>
              </div>
            </div>
            <div className="hidden sm:flex text-xs font-bold text-slate-500 gap-4 pl-2">
              <span>عضو</span>
              <span>زائر</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              {bakery.map((item) => (
                <div key={item.name} className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold text-slate-800">{item.name}</span>
                  <span className="font-bold whitespace-nowrap">
                    <span className="text-brand-green">{item.member}</span> /{" "}
                    <span className="text-slate-500">{item.visitor} ج.م</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <h4 className="font-bold text-slate-800 text-xs mb-3 flex items-center gap-1.5">
                <CakeSlice className="w-4 h-4 text-pink-500" />
                تورتات المناسبات والحفلات:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                {cakes.map((c, i) => (
                  <div
                    key={c.size}
                    className={
                      i === cakes.length - 1
                        ? "bg-slate-50 p-2.5 rounded-xl border border-slate-100 col-span-2 md:col-span-1"
                        : "bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                    }
                  >
                    <span className="block text-slate-500 text-[10px]">{c.size}</span>
                    <span className="font-bold text-brand-green text-sm">
                      {c.member} <span className="text-[10px] font-normal text-slate-500">/ {c.visitor} ج.م</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 text-xs py-8 border-t-2 border-brand-gold mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="w-10 h-10 mx-auto rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center text-brand-gold">
            <Landmark className="w-5 h-5" />
          </div>
          <p className="font-bold text-sm text-brand-gold">نادي ودار البنك الأهلي المصري - الإسكندرية</p>
          <p className="text-emerald-200/80">
            جميع الأسعار بالجنيه المصري (ج.م) وتخضع للسياسات والشروط المعتمدة من النادي.
          </p>
          <div className="pt-2 text-[10px] text-slate-400">
            <p>مسح رمز الـ QR يمنحك الاطلاع الدائم على أحدث القوائم والأسعار المعتمدة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
