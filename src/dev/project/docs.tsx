import { useState } from 'react'
// للمستخدم
import c from '../../assets/docs/Create-_LoginUsers.avif'
import u from '../../assets/docs/update-_deleteUsers.avif'
import fack from '../../assets/docs/not-login-or-fake-token.avif'
import page from '../../assets/docs/privat-page-for_user.avif'
import search from '../../assets/docs/searchuser.png'
// للبوست
import cu from '../../assets/docs/create_update-post.avif'
import ds from '../../assets/docs/search_post_and_seeAllPosts post.avif'
import ud from '../../assets/docs/update_delete-post.avif'
export default function Docs() {
  const [use, setuser] = useState(false)
  const [pos, setpos] = useState(false)
  return (
    <>
      <div className='flex align-middle justify-center gap-3.5 font-bold text-2xl '>
        <a className='hover:scale-[1.02] hover:text-blue-300  active:scale-90  hover:-translate-y-3 duration-500 ease-in-out text-cyan-500' href="#users" onClick={() => setuser(!use)}> Show Api for  users</a>
        <a className='hover:scale-[1.02] hover:text-cyan-200  active:scale-90 hover:-translate-y-3 duration-500 ease-in-out text-fuchsia-400' href="#posts" onClick={() => setpos(!pos)}> Show Api for  posts</a>
      </div>
      <br />
      <br />
      {/* users */}
      {use && (
        <div id='users'>
          <h2>crud users and private page  for users</h2>
          <br />
          <img className='rounded-3xl max-w-[90vw] '
            src={c}
          />
          <br />
          <img className='rounded-3xl max-w-[90vw]'
            src={u}
          />
          <br />
          <img className='rounded-3xl max-w-[90vw]'
            src={fack}
          />
          <br />
          <img className='rounded-3xl max-w-[90vw]'
            src={page} alt="users"
          />
          <br />
          <button className='bg-cyan-600  p-2 rounded-4xl text-2xl font-bold '>search for users</button>
          <br />
          <br />
          <img className='rounded-3xl max-w-[90vw]'
            src={search} alt="users"
          />
          {/* posts */}
        </div>
      )}
      {pos && (
        <div id='posts'>
          {/* <hr className='bg-black  text-black   ' /> */}
          <h1>CRUD posts and verify auth</h1>
          <br />
          <img className='rounded-2xl max-w-[90vw]'
            src={cu} alt="posts هحط صور  هنا" />
          <br />
          <img className='rounded-2xl max-w-[90vw]'
            src={ds} alt="posts هحط صور  هنا" />
          <br />
          <img className='rounded-2xl max-w-[90vw]'
            src={ud} alt="posts هحط صور  هنا" />
        </div>
      )}
    </>
  )
}