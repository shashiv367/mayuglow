import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { flavors } from '../../data/products'

export default function ProductCard({ product, index = 0 }) {
  const flavorData = (product.flavors || []).map((f) => flavors.find((fl) => fl.id === f)).filter(Boolean)
  const minPrice = product.sizes && product.sizes.length > 0 
    ? Math.min(...product.sizes.map((s) => s.price)) 
    : (product.price || 149)

  return (
    <Link
      to={`/products/${product.slug || product._id || product.id}`}
      className="group product-glow block h-full"
    >
      <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden bg-white/60 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Image area */}
        <div className="relative aspect-square overflow-hidden bg-sage-50">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient || 'from-sage-200 to-sage-400'} animate-gradient`} />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

          {/* Floating emoji or uploaded image */}
          <div className="absolute inset-0 flex items-center justify-center">
            {product.imageUrls?.[0] || product.image ? (
              <img
                src={product.imageUrls?.[0] || product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <span className="text-4xl sm:text-5xl md:text-6xl drop-shadow-md transform group-hover:scale-110 transition-transform duration-500">
                {flavorData[0]?.emoji || '🧼'}
              </span>
            )}
          </div>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-1.5 z-10">
            {product.bestseller && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase bg-gold-500/90 text-sage-950 rounded-full backdrop-blur-sm shadow-sm">
                Bestseller
              </span>
            )}
            {product.new && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase bg-sage-600/90 text-white rounded-full backdrop-blur-sm shadow-sm">
                New
              </span>
            )}
            {product.category === 'combo' && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase bg-white/80 text-sage-800 rounded-full backdrop-blur-sm shadow-sm">
                Combo
              </span>
            )}
          </div>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
            <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-lg sm:rounded-xl px-2.5 py-1.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-sage-800 shadow-sm">
              <ShoppingBag size={14} />
              <span>View Details</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
          <div>
            {/* Flavor tags */}
            <div className="flex flex-wrap gap-1 mb-1.5 sm:mb-2">
              {flavorData.slice(0, 2).map((f) => (
                <span
                  key={f.id}
                  className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${f.color}25`, color: f.color === '#FFF8E7' || f.color === '#F5F5DC' ? '#6B8F71' : f.color }}
                >
                  {f.name}
                </span>
              ))}
              {flavorData.length > 2 && (
                <span className="text-[9px] sm:text-[10px] font-medium text-sage-400 px-1 py-0.5">
                  +{flavorData.length - 2}
                </span>
              )}
            </div>

            <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-sage-900 mb-1 group-hover:text-sage-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-sage-500 mb-2 sm:mb-3 line-clamp-1">{product.tagline}</p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-sage-100/70">
            <div>
              <span className="text-sm sm:text-base font-semibold text-sage-800">₹{minPrice}</span>
              {product.sizes && product.sizes.length > 1 && (
                <span className="text-[10px] sm:text-xs text-sage-400 ml-1">onwards</span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-gold-500 text-gold-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-sage-700">{product.rating}</span>
              <span className="text-[10px] sm:text-xs text-sage-400">({product.reviews})</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
