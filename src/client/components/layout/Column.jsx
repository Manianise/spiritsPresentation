export default ({
    sm = 6,
    md = 6,
    xl = 6,
    xxl = 6,
    children,
    ...props
}) => {
return <div className={`col-sm-${sm} col-sm-${md} col-sm-${xl} col-sm-${xxl}` }>
    {children}
</div>

}