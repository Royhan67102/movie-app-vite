function Hello(props) { //props bisa diganti dengan nama apa saja
    const {name} = props;
    return(
        <div>
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend enginers</p>
        </div>
    )
}
export default Hello;