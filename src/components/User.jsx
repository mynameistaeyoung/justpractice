const User = ({ user, onClickDeleteButtonHandler }) => {
    return (
        <div className='squareStyle'>{user.age}살 - {user.name}
            <button onClick={() => onClickDeleteButtonHandler(user.id)}>삭제!</button>
        </div>
    )
}

export default User