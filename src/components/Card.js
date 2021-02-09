const Card = ({ imageUrl, firstName, lastName, age }) => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={imageUrl} alt="user image" />
            </div>
            <p>{firstName} {lastName}</p>
            <p>age: {age}</p>
        </div>
    )

}

export default Card;