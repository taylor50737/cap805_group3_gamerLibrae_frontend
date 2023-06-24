export default function ActionButton() {
  return (
    <div className='dropdown-bottom dropdown'>
      <label tabIndex={0} className='btn'>
        Action
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow'
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
}
