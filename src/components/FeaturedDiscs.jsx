import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Error from "./Error";
// import Loading from "./Loading";
import DiscCard from "./DiscCard";
import { tempDiscs } from "../../utils/constants";

const FeaturedProducts = () => {
  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <Error />;
  // }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured discs</h2>
        <div className="underline" />
      </div>

      <div className="section-center featured">
        {tempDiscs.map((product) => {
          return <DiscCard key={product.id} {...product} />;
        })}
      </div>
      {/* <Link to="/products" className="btn">
        all products
      </Link> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 5rem;
    img {
      height: 20vw;
      width: 20vw;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

export default FeaturedProducts;
