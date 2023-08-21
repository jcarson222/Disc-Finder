import { useState } from "react";
import { FormRow, SubmitBtn } from "../components";
import { Form } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { updateUser } from "../../features/user/userSlice";
import styled from "styled-components";

const UserProfile = () => {
  // const { isLoading, user } = useSelector((store) => store.user);
  // const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    lastName: "",
    location: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, lastName, location } = userData;
  //   if (!name || !email || !lastName || !location) {
  //     toast.error("please fill out all fields");
  //     console.log("please fill out all fields");
  //     return;
  //   }
  //   console.log("saved changes");
  //   dispatch(updateUser(userData));
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper className="section-center">
      <Form method="patch" className="form">
        <h3>profile</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            labelText="first name"
            value={userData.name}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
          />

          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default UserProfile;

const Wrapper = styled.section`
  background: var(--white);
  padding: 3rem 2rem 4rem;

  h3 {
    text-align: left;
    margin-bottom: 1.38rem;
  }

  .form {
    margin: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-label {
    color: var(--clr-grey-3);
  }
  .form-input,
  .form-textarea,
  .form-select {
    background: var(--white);
    border: 1px solid var(--clr-grey-3);
    color: var(--clr-grey-3);
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
  }

  /* .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  } */
  /* .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  } */
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
