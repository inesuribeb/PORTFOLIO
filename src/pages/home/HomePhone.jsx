import { useNavigate } from 'react-router-dom';

const HomePhone = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/art');
  };

  return (
    <div className="home-container">
      <h1 
        onClick={handleClick}
      >
        Hello
      </h1>
    </div>
  );
};
  
  export default HomePhone;