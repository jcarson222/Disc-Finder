import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import discs from "../assets/disc-shopping.webp";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          find the <br />
          perfect flight
        </h1>
        <p>
          Looking for a quick way to find the disc to match your desired flight
          path without browsing for hours at your local disc golf shop? As the
          sport grows, so does the product selection. Let Disc Finder do all
          that searching for you. In seconds, find the discs to meet your needs.
        </p>
        <Link to="/search" className="btn hero-btn">
          search discs
        </Link>
      </article>
      <article className="img-container">
        <img src={discs} alt="disc selection" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1.3rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--clr-primary-9);
      bottom: -7%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
