export default ({fullSize = false, children, className}) => {


return <section className={`container${fullSize && '-fluid'} row ${className}`}>
        {children}
</section>
}
