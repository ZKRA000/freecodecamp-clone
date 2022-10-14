import user from '../img/user.jpg'
import thumbnail from '../img/thumbnail.jpg'
import '../css/post-tile.css'

function PostTile() {
    return (
    <div className="post-tile">
        <img src={thumbnail} alt="" className="post-tile__thumbnail" />
        <div>
            <p>#TYPESCRIPT</p>
            <h2>TypeScript Generics – Use Case and Examples</h2>
            <div className="post-tile__bottom">
                <img src={user} alt="" className="post-tile__user" />
                <div>2 DAYS AGO</div>
            </div>
        </div>
    </div>
    )
}

export default PostTile