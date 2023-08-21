import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiscCard = ({
  img,
  name,
  id,
  speed,
  glide,
  turn,
  fade,
  manufacturer,
  links,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={img} alt={name} />
        <Link to="*" className="link">
          <FaSearch />
        </Link>
      </div>

      <footer>
        <h5>{name}</h5>
        <p>{manufacturer}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* width: 100%; */
  /* background-color: black; */

  .container {
    position: relative;
    background: transparent;
    border-radius: 50%;
  }
  img {
    margin-left: 20px;
    object-fit: cover;
    border-radius: 50%;
    transition: var(--transition);
    box-shadow: var(--shadow-4);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
  }

  footer p {
    color: var(--clr-primary-5);

    font-size: 20px;
  }

  footer h5 {
    font-size: 30px;
  }
`;
export default DiscCard;
