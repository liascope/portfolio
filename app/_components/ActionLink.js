import Link from 'next/link'

export default function ActionLink({ href, children, icon: Icon, variant = 'primary', target }) {
  const styles =
    variant === 'secondary'
      ? 'border border-white/10 text-white hover:border-violet-500/50 hover:bg-violet-500/10'
      : 'bg-white text-black hover:bg-violet-500/40 hover:text-white'

  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`flex items-center gap-2 rounded-full px-5 py-2 sm:px-7 sm:py-3 font-medium transition ${styles}`}
    >
      {' '}
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </Link>
  )
}
