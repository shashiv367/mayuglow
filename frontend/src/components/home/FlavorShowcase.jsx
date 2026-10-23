import { flavors } from '../../data/products'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'

export default function FlavorShowcase() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-cream-50 via-sage-50/50 to-cream-50">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <SectionHeading
            label="Nature's Palette"
            title="50+ Flavors to Discover"
            subtitle="From calming lavender to energizing citrus, every flavor is sourced from nature and crafted with love."
          />
        </div>
      </ScrollReveal>

      {/* Marquee row 1 */}
      <div className="relative mt-8 mb-8 sm:mb-10 overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...flavors, ...flavors].map((flavor, i) => (
            <div
              key={`${flavor.id}-${i}`}
              className="inline-flex items-center gap-3.5 mx-4 sm:mx-5 px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/60 shadow-md cursor-default shrink-0 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-3xl">{flavor.emoji}</span>
              <div>
                <span className="block font-heading text-lg font-semibold text-sage-800">{flavor.name}</span>
                <span className="block text-xs text-sage-500 tracking-wide uppercase font-medium">Natural Extract</span>
              </div>
              <div
                className="w-3 h-3 rounded-full ml-2 shadow-xs"
                style={{ backgroundColor: flavor.color }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - reverse */}
      <div className="relative overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {[...flavors.slice().reverse(), ...flavors.slice().reverse()].map((flavor, i) => (
            <div
              key={`rev-${flavor.id}-${i}`}
              className="inline-flex items-center gap-3 mx-4 px-5 py-3 rounded-full border border-sage-200/80 bg-white/60 backdrop-blur-sm cursor-default shrink-0 hover:bg-white/90 hover:shadow-sm transition-all"
            >
              <span className="text-xl">{flavor.emoji}</span>
              <span className="font-medium text-sm text-sage-700">{flavor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
