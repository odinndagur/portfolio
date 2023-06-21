export function PortfolioItem({
    children,
    style,
    className,
}: {
    children?: any
    style?: any
    className?: string
}) {
    return (
        <div
            style={{
                boxShadow: 'var(--card-box-shadow)',
                borderRadius: '10px',
                padding: '1rem',
                height: '300px',
                // height: 'auto',
                width: 'auto',
                ...style,
                overflow: 'hidden',
            }}
            className={className ?? undefined}
        >
            {children}
        </div>
    )
}
