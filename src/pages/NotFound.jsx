import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='mb-8 font-bold text-8xl'>Ooops!</h1>
          <p className='mb-8 text-5xl'>404 - Page not found!</p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
