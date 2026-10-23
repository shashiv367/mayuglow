import { Link } from 'react-router-dom'
import { ArrowRight, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImg from '../../assets/hero.webp'

export default function Hero() {
  return (
    <section className="relative hero-mesh overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sage-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lavender-200/10 rounded-full blur-3xl" style={{ background: 'rgba(184, 169, 201, 0.08)' }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-10 md:pt-28 md:pb-14 lg:pt-28 lg:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/50 mb-6">
                <Leaf size={14} className="text-sage-600" />
                <span className="text-xs font-medium tracking-wider uppercase text-sage-600">
                  100% Natural · Chemical Free
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-sage-900 mb-5"
            >
              Nature&apos;s
              <br />
              <span className="gradient-text">Purest</span>
              <br />
              Embrace
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-sage-600 leading-relaxed max-w-lg mb-8"
            >
              Handcrafted soaps infused with lavender, moringa, sunnipindi, and 50+ nature-inspired flavors. Zero chemicals. Pure glow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="btn-primary group">
                <span>Explore Collection</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Story
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-5 mt-8 pt-6 border-t border-sage-200/50"
            >
              {['Handmade', 'Eco-Friendly', 'Cruelty Free', 'Vegan'].map((badge) => (
                <span key={badge} className="text-xs font-medium tracking-wider uppercase text-sage-500">
                  ✦ {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual Showcase - Image fills card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-md xl:max-w-lg aspect-square mx-auto">
              {/* Soft decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sage-200/50 via-cream-200/40 to-sage-300/30 rounded-[2.5rem] blur-2xl -z-10" />

              {/* Main Card with image completely filling it */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/12 border-4 border-white/90 bg-white group">
                <img
                  src={heroImg}
                  alt="MayuGlow Natural Skincare Showcase"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle bottom gradient overlay for readability */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none" />

                {/* Bottom banner badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-white/70">
                    <p className="text-xs font-semibold text-sage-900 tracking-wide">100% Handcrafted</p>
                    <p className="text-[10px] text-sage-600">Pure Cold-Processed</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white/70 flex items-center justify-center">
                    <Leaf size={16} className="text-sage-600" />
                  </div>
                </div>
              </div>

              {/* Orbiting accent pills */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/80 flex items-center justify-center animate-float">
                <span className="text-xl">🌿</span>
              </div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/80 flex items-center justify-center animate-float-reverse">
                <span className="text-xl">🍯</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
