import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/products'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-cream-50 via-sage-100/50 to-cream-50">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeading
            label="Love Letters"
            title="What Our Customers Say"
            subtitle="Real stories from real people who made the switch to natural."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col bg-white/75 backdrop-blur-xl border border-white/70 shadow-md hover:shadow-xl transition-all duration-300">
                <Quote size={28} className="text-sage-500 mb-4 opacity-75" />
                <p className="text-sage-800 leading-relaxed mb-6 flex-1 text-sm md:text-base font-normal">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sage-100">
                  <div>
                    <div className="font-semibold text-sage-900 text-sm">{t.name}</div>
                    <div className="text-xs text-sage-500">{t.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={13} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <div className="text-[10px] text-sage-600 font-medium tracking-wide uppercase">{t.product}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
