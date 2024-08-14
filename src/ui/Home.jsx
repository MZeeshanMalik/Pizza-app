// import CreateUser from "../features/user/CreateUser";
import { useSelector } from 'react-redux';
import CreateUser from '../Features/user/CreateUser';
import Button from './Button';
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-10 text-center text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the ovesn, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Our Menue
        </Button>
      )}
    </div>
  );
}

export default Home;
