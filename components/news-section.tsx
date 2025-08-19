"use client"

import { useState, useEffect } from "react"
import { Sparkles, Instagram } from "lucide-react"

export function NewsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Cargar el script de Instagram
    const script = document.createElement("script")
    script.async = true
    script.src = "https://www.instagram.com/embed.js"
    script.onload = () => {
      setIsLoaded(true)
      // Procesar los embeds de Instagram
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
    document.body.appendChild(script)

    return () => {
      // Limpiar el script al desmontar
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#039b9e]/10 via-[#028a8e]/5 to-[#039b9e]/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-20 left-20 h-6 w-6 text-[#039b9e]/20 animate-pulse" />
        <Sparkles className="absolute bottom-20 right-20 h-4 w-4 text-[#028a8e]/30 animate-pulse delay-1000" />
        <Sparkles className="absolute top-1/2 left-1/4 h-5 w-5 text-[#039b9e]/15 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-[#E4405F]" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">Últimas Noticias</h2>
          </div>
          <p className="text-xl text-slate-600">
            Mantente informado sobre las actividades de nuestra comunidad educativa
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Post 1 */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DNg3kvStIX9/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: "0",
                width: "99.375%",
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href="https://www.instagram.com/reel/DNg3kvStIX9/?utm_source=ig_embed&utm_campaign=loading"
                  style={{
                    background: "#FFFFFF",
                    lineHeight: "0",
                    padding: "0 0",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "50%",
                        flexGrow: "0",
                        height: "40px",
                        marginRight: "14px",
                        width: "40px",
                      }}
                    ></div>
                    <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center" }}>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          flexGrow: "0",
                          height: "14px",
                          marginBottom: "6px",
                          width: "100px",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          flexGrow: "0",
                          height: "14px",
                          width: "60px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div style={{ padding: "19% 0" }}></div>
                  <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 60 60"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                          <g>
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
