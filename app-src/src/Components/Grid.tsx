export function Grid({
    children,
    width,
}: {
    children?: any
    width?: string | number
}) {
    return (
        <div
            className="grid"
            style={{
                scrollSnapType: 'y mandatory',
                gridTemplateColumns: `repeat(auto-fill, minmax(${
                    width ? width : '300px'
                },1fr))`,
            }}
        >
            {children}
        </div>
    )
}
