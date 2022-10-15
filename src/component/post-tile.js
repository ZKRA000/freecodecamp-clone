import user from '../img/user.jpg'
import thumbnail from '../img/thumbnail.jpg'
import '../css/post-tile.css'

function PostTile(props) {
    return (
    <div className="post-tile">
        <img src={thumbnail} alt="" className="post-tile__thumbnail" />
        <div>
            <p>{props.tag}</p>
            <h2>{props.title}</h2>
            <div className="post-tile__bottom">
                <img src={user} alt="" className="post-tile__user" />
                <div>{props.time}</div>
            </div>
        </div>
    </div>
    )
}

export default PostTile