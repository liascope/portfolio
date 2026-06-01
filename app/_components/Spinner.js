export default function Spinner({ size = 'w-[16rem]' }) {
  return (
    <div
      className={`mx-auto my-40 ${size} aspect-square rounded-full border-[8px] border-white/30 border-r-sky-300 border-l-sky-900/70 border-b-teal-900/70 animate-spin b`}
    />
  )
}
