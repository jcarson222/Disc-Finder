import React from "react";
import styled from "styled-components";
import { profileFeatures } from "../../utils/constants";

const ProfileFeatures = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="title">
          <h2>create a profile</h2>
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
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .features-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .feature {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 576px) {
    .features-center {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default ProfileFeatures;
