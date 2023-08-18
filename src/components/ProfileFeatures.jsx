import React from "react";
import styled from "styled-components";
import { profileFeatures } from "../../utils/constants";

const ProfileFeatures = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="title">
          <h2>profile features</h2>
          <p>
            Register to take advantage of the personalized features Disc Finder
            has to offer!
          </p>
          <div className="underline" />
        </article>
        <div className="features-center">
          {profileFeatures.map((feature) => {
            const { id, icon, title, text } = feature;
            return (
              <article key={id} className="feature">
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h2,
  h4 {
    color: var(--clr-grey-1);
  }
  /* padding: 5rem 0; */

  background: var(--clr-primary-10);

  p {
    margin-bottom: 2;
    line-height: 2;
    font-size: 1.2rem;
    color: var(--clr-primary-3);
  }
  .features-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .feature {
    background: var(--clr-grey-8);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 20%;
    box-shadow: var(--shadow-2);
    p {
      color: var(--clr-grey-1);
    }
  }
  span {
    width: 6rem;
    height: 6rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 20%;
    background: transparent;
    color: var(--clr-grey-1);
    svg {
      font-size: 6rem;
    }
  }

  @media (min-width: 576px) {
    .features-center {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding-bottom: 10rem;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default ProfileFeatures;
