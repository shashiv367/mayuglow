import { Link } from 'react-router-dom'
import { Leaf, Droplets, Heart, Recycle } from 'lucide-react'
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import heroImg from '../../assets/hero.webp'

const values = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Every ingredient is sourced from nature. No synthetic fragrances, no artificial colors, no compromises.',
  },
  {
    icon: Droplets,
    title: 'Cold Process',
    description: 'Traditional cold-process method preserves the integrity of oils and nutrients for maximum skin benefits.',
  },
  {
    icon: Heart,
    title: 'Handcrafted',
    description: 'Each bar is lovingly poured, cut, and cured by hand in small batches for consistent quality.',
  },
  {
    icon: Recycle,
    title: 'Eco Conscious',
    description: 'Plastic-free packaging, biodegradable materials, and sustainable sourcing at every step.',
  },
]

export default function WhyNatural() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Visual side - hero.webp full fit */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/15 border-4 border-white/90 bg-white group">
              <img
                src={heroImg}
                alt="Why MayuGlow Natural Skincare"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom gradient overlay for elegance and text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sage-950/70 via-sage-950/20 to-transparent pointer-events-none" />

              {/* Inset content card/badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium uppercase tracking-wider mb-2">
                  Pure Botanical Craft
                </div>
                <h4 className="font-heading text-2xl font-semibold leading-tight">Zero Chemicals. Forever & Always.</h4>
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-white/80 rounded-2xl p-3.5 shadow-lg animate-float">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content side */}
          <div>
            <ScrollReveal>
              <SectionHeading
                label="Why MayuGlow"
                title="Purity You Can Feel"
                subtitle="We believe skincare should be simple, honest, and rooted in nature."
                align="left"
              />
            </ScrollReveal>

            <StaggerContainer className="space-y-6" staggerDelay={0.12}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 group-hover:bg-sage-200 flex items-center justify-center shrink-0 transition-colors">
                      <value.icon size={22} className="text-sage-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-sage-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-sage-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.3} className="mt-8">
              <Link to="/about" className="btn-primary inline-flex">
                <span>Learn Our Process</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
