import spinner from "../assets/images/spinner.gif";

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading" />
            <h1>Loading latest data from NASA...</h1>
        </div>
    )
}

export default Loader