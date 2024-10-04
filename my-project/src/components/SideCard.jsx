const SideCard = ({data: {image, title}}) => {

    return(
        <div className="flex mb-5 py-4 px-3 bg-white rounded-md">
            <img className="w-14 h-16 rounded-md" src={image} alt={title}/>
            <p className="ms-5 mt-6 text-xs font-bold text-black">{title}</p>
        </div>
    )
}

export default SideCard;