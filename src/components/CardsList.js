import Card from './Card';

const CardsList = ({ users }) => {
    return (
        <div className="cards-list">
            {users.map(user => <Card {...user} key={user.id} />)}
        </div>
    )
}

export default CardsList;