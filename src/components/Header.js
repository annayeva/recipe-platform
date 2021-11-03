function Header ({titleText, pText}) {
    return(
        <div>
            <h1>{titleText}</h1>
        </div>
    )
}

Header.defaultProps = {
    titleText: "Default tittle",
    pText: "default paragraph text"
}

export default Header