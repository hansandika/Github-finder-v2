import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubAction';

export default function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter someting', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  const handleClear = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <div className='grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 text-black bg-gray-200 input input-lg'
                placeholder='Search...'
                value={text}
                onChange={handleChange}
              />
              <button
                typpe='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users?.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
