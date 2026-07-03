import admin from '../../../assets/docs/admin.avif'
import users from '../../../assets/docs/users.avif'
import posts from '../../../assets/docs/posts.avif'
export default function SQL() {
    return (
        <>
            <h2> Table Admin</h2>
            <br />
            <div className="flex items-center justify-center">
                <img src={admin} alt="sql" className=' rounded-3xl' />
                <br />
            </div>
            <br />
            <h2>Table Users </h2>
            <br />
            <div className="flex items-center justify-center">
                <img src={users} alt="sql" className=' rounded-3xl' />
                <br />
            </div>
            <br />
            <h2>Table Posts </h2>
            <div className="flex items-center justify-center">
                <img src={posts} alt="sql" className=' rounded-3xl' />
                <br />
            </div>
        </>
    )
}