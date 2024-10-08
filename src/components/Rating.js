import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={{ cursor : "pointer", marginLeft:10 }}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;