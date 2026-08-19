"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
import { Landmark, Download, QrCode, ScanLine, X, Printer } from "lucide-react"

export function QrSection() {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState("")
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUrl(window.location.href.split("#")[0])

    const syncFromHash = () => setOpen(window.location.hash === "#qr")
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  const close = useCallback(() => {
    // clear the hash without adding a new history entry
    history.replaceState(null, "", window.location.pathname + window.location.search)
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close])

  function handleDownload() {
    const canvas = wrapRef.current?.querySelector("canvas")
    if (!canvas) return
    const link = document.createElement("a")
    link.download = "national-bank-menu-qr.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="رمز QR لقائمة النادي"
    >
      {/* backdrop */}
      <button
        aria-label="إغلاق"
        onClick={close}
        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm cursor-default"
      />

      {/* modal card */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl border-2 border-brand-gold/60 bg-gradient-to-b from-brand-dark via-emerald-950 to-brand-green text-white shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />

        <button
          onClick={close}
          aria-label="إغلاق"
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-emerald-900/70 border border-brand-gold/40 text-brand-gold flex items-center justify-center hover:bg-emerald-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 flex flex-col items-center gap-5 p-6 md:p-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-brand-gold text-brand-dark text-xs font-bold rounded-full">
            <ScanLine className="w-3.5 h-3.5" />
            رمز الاستجابة السريعة
          </span>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-gold text-balance">
            امسح الرمز لعرض القائمة الكاملة
          </h2>

          {/* Large QR card */}
          <div
            ref={wrapRef}
            className="rounded-3xl bg-white p-5 shadow-lg border-4 border-brand-gold relative"
          >
            {url ? (
              <QRCodeCanvas
                value={url}
                size={280}
                bgColor="#ffffff"
                fgColor="#00572b"
                level="H"
                marginSize={1}
                imageSettings={{
                  src:
                    "data:image/svg+xml;base64," +
                    btoa(
                      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#00381c"/><circle cx="20" cy="20" r="17" fill="none" stroke="#c5a059" stroke-width="1.5"/></svg>',
                    ),
                  height: 56,
                  width: 56,
                  excavate: true,
                }}
              />
            ) : (
              <div className="w-[280px] h-[280px] flex items-center justify-center text-brand-green">
                <QrCode className="w-20 h-20 animate-pulse" />
              </div>
            )}
            {/* gold logo overlay center */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-brand-dark border border-brand-gold flex items-center justify-center">
                <Landmark className="w-6 h-6 text-brand-gold" />
              </span>
            </div>
          </div>

          <p className="text-emerald-100 text-sm leading-relaxed text-pretty max-w-sm">
            وجّه كاميرا هاتفك نحو الرمز للاطلاع الدائم على أحدث الوجبات والأسعار المعتمدة من نادي ودار البنك الأهلي المصري.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-400 transition shadow"
            >
              <Download className="w-4 h-4" />
              تحميل رمز QR
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-emerald-900/60 text-brand-gold border border-brand-gold/40 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-emerald-900 transition"
            >
              <Printer className="w-4 h-4" />
              طباعة القائمة
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
