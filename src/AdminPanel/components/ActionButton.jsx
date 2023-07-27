export default function ActionButton({ selectedComments }) {
  const deleteComment = async () => {
    let cid;
    if (selectedComments.length === 1) {
      cid = selectedComments[0];
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/comments/${cid}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='dropdown-bottom dropdown'>
      <label tabIndex={0} className='btn-primary btn'>
        Action
      </label>
      <ul tabIndex={0} className='dropdown-content menu rounded-box z-[1] w-52 bg-black p-2 shadow'>
        {/* <li>
          <a>Edit</a>
        </li> */}
        <li>
          <button onClick={() => deleteComment()}>Delete</button>
        </li>
      </ul>
    </div>
  );
}
