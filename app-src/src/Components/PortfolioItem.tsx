export function PortfolioItem({
    children,
    style,
}: {
    children?: any
    style?: any
}) {
    return (
        <div
            style={{
                boxShadow: 'var(--card-box-shadow)',
                borderRadius: '10px',
                padding: '1rem',
                // height: '300px',
                height: 'auto',
                width: 'auto',
                ...style,
            }}
        >
            {children}
        </div>
    )
}
