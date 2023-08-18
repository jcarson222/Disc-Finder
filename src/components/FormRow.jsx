import styled from "styled-components";

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ""}
          onChange={onChange}
          required
        />
      </div>
    </Wrapper>
  );
};
export default FormRow;

const Wrapper = styled.div`
  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-label {
    display: block;
    font-size: 16px;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    line-height: 1.5;
    color: var(--clr-primary-10);
  }
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--border-radius);
    background: rgba(0, 0, 0, 0.54);
    border: 1px solid var(--clr-primary-8);
    color: var(--clr-primary-10);
  }
  .form-input,
  .form-select,
  .form-btn {
    height: 35px;
  }
  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--grey-400);
  }
  .form-alert {
    color: var(--red-dark);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
  }
`;
