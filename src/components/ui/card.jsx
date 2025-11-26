export function Card({ className = "", children }) {
  return <div className={`bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ className = "", children }) {
  return <div className={`border-b border-slate-800/50 px-4 py-3 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }) {
  return <h3 className={`font-semibold text-lg text-slate-100 ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }) {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
}
