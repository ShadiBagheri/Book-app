import heart from "../assets/heart.png";

const Footer = () => {
    return(
        <>
            <footer className="container flex justify-center items-center w-3/5 mx-auto mt-10 px-5 py-3 bg-white rounded-lg">
                <h1 className="text-lg font-bold text-center me-2 text-black">Deployed By Shadi</h1>
                <img className="size-6" src={heart} alt="heart-icon"/>
            </footer>
        </>
    )
}

export default Footer;