import React, { useState, useEffect } from "react";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "That's not a real name."),
  phone: yup
    .string()
    .required("Please enter a phone number.")
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number."),
});

const defaultFormState = {
  name: "",
  phone: "",
  bun: "Sesame Seed",
  patties: "1",
  condiments: {
    ketchup: false,
    mustard: false,
    mayonaise: false,
    barbecue: false,
    lettuce: false,
    onion: false,
    cheese: false,
    bacon: false,
  },
  instructions: "",
};

const defaultErrorState = {
  name: "",
  phone: "",
};

const BurgerForm = (props) => {
  const [formState, setFormState] = useState(defaultFormState);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    schema.isValid(formState).then((valid) => setIsDisabled(!valid));
  }, [formState, schema]);

  const validate = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormState({
        ...formState,
        condiments: {
          ...formState.condiments,
          [e.target.value]: e.target.checked,
        },
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.name === "name" || e.target.name === "phone") {
      validate(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => props.addOrder(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            data-cy="name"
            value={formState.name}
          />
          {errors.name.length > 0 && (
            <p style={{ color: "red" }}>{errors.name}</p>
          )}
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            data-cy="phone"
            value={formState.phone}
          />
          {errors.phone.length > 0 && (
            <p style={{ color: "red" }}>{errors.phone}</p>
          )}
        </label>
        <label>
          Select Bun
          <select
            name="topping1"
            data-cy="topping1"
            defaultValue="Regular"
            onChange={handleChange}
          >
            <option value="Regular">Regular</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
            <option value="Stuffed">Stuffed</option>
          </select>
        </label>
        <fieldset>
          <label>
            <input
              checked
              type="radio"
              name="topping1"
              onChange={handleChange}
              data-cy="1"
              value="1"
            />
            bacon
          </label>
          <label>
            <input
              type="radio"
              name="topping1"
              onChange={handleChange}
              data-cy="2"
              value="2"
            />
            italian
          </label>
          <label>
            <input
              type="radio"
              name="topping1"
              onChange={handleChange}
              data-cy="3"
              value="3"
            />
            pepperoni
          </label>
        </fieldset>
        <fieldset>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="jalapenos"
              value="ketchup"
            />
            jalapenos
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="mushrooms"
              value="mustard"
            />
            mushrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="olives"
              value="mayonaise"
            />
            olives
          </label>
        </fieldset>
        <label>
          <textarea
            name="instructions"
            data-cy="instructions"
            onChange={handleChange}
            value={formState.instructions}
          />
        </label>
        <button data-cy="submit-button" disabled={isDisabled} type="submit">
          Order Your Burger
        </button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin: 5rem auto;
  width: 900px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export default Form;
