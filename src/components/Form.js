import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import axios from "axios";

const schema = yup.object().shape({
  // validation
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "That's not a real name."),
  phone: yup
    .string()
    .required("Please enter a phone number.")
    .matches(/^[0-9]{10}$/, "Please enter a valid phone number."),
  //   crust: yup
  //     .string()
  //     .required("Please select a crust.")
  //     .matches(/^[0-9]{10}$/, "Please select a crust."),
  //   sauce: yup
  //     .string()
  //     .required("Please select a sauce.")
  //     .matches(/^[0-9]{10}$/, "Please select a sauce."),
});

const defaultFormState = {
  name: "",
  phone: "",
  crust: "Original",
  sauce: "classic marinara",
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    onions: false,
    peppers: false,
    jalapenos: false,
    spinach: false,
    pinneapple: false,
    mushroom: false,
    olives: false,
    tomatoes: false,
    extracheese: false,
  },
  instructions: "",
};

const defaultErrorState = {
  name: "",
  phone: "",
};

const Form = (props) => {
  const [formState, setFormState] = useState(defaultFormState);
  const [errors, setErrors] = useState(defaultErrorState);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    schema.isValid(formState).then((valid) => setIsDisabled(!valid)); // validation
  }, [formState, schema]);

  const validate = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name) // validation
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
        <div id="header">
          <h2>Create Your Pizza!</h2>
        </div>
        <div id="Order-Information">
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
            Select Crust
            <select
              name="crust"
              data-cy="crust"
              defaultValue="Original"
              onChange={handleChange}
            >
              <option value="Original">Original</option>
              <option value="Thin">Thin</option>
              <option value="Thick">Thick</option>
              <option value="Stuffed">Stuffed</option>
            </select>
          </label>
        </div>
        <fieldset>
          <label>
            <input
              checked
              type="radio"
              name="sauce"
              onChange={handleChange}
              data-cy="classic marinara"
              value="classic marinara"
            />
            Classic Marinara
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              onChange={handleChange}
              data-cy="garlic ranch"
              value="garlic ranch"
            />
            Garlic Ranch
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              onChange={handleChange}
              data-cy="BBQ sauce"
              value="BBQ sauce"
            />
            BBQ Sauce
          </label>
          <label>
            <input
              checked
              type="radio"
              name="sauce"
              onChange={handleChange}
              data-cy="spinach alfredo"
              value="spinach alfredo"
            />
            Spinach Alfredo
          </label>
        </fieldset>

        <fieldset>
          {/* <div class="toppings"> */}
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="pepperoni"
              value="pepperoni"
            />
            pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="sausage"
              value="sausage"
            />
            sausage
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="bacon"
              value="bacon"
            />
            bacon
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="chicken"
              value="chicken"
            />
            chicken
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="onions"
              value="onions"
            />
            onions
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="peppers"
              value="peppers"
            />
            peppers
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="jalapenos"
              value="jalapenos"
            />
            jalapenos
          </label>
          {/* </div> */}
          {/* <div class="toppings"> */}
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="spinach"
              value="spinach"
            />
            spinach
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="pinneapple"
              value="pinneapple"
            />
            pinneapple
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="mushrooms"
              value="mushrooms"
            />
            mushrooms
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="olives"
              value="olives"
            />
            olives
          </label>
          <label>
            <input
              type="checkbox"
              name="toppings"
              onChange={handleChange}
              data-cy="tomatoes"
              value="tomatoes"
            />
            tomatoes
          </label>
          {/* </div> */}
        </fieldset>
        <label>
          <textarea
            name="instructions"
            data-cy="instructions"
            onChange={handleChange}
            value={formState.instructions}
            placeholder="Anything else you'd like to add?"
          />
        </label>

        <button data-cy="submit-button" onClick={Link} type="submit">
          Submit Order
        </button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  margin: 5rem auto;
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  #header {
    text-align: center;
    background: url(https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/20-3-large.jpg?itok=1EY8KWJG);
    background-position: center;
    height: 20vh;
    width: 700px;
  }
  label {
    width: 60%;
    margin: 2% 4%;
  }
  fieldset {
    display: flex;
    flex-direction: column;
  }
  //   .toppings {
  //     display: flex;
  //     flex-direction: column
  //     color: purple;
  //   }

  #Order-Information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 8% 0%;
    height: 20vh;
  }
  textarea {
    width: 80%;
    margin: 2%;
  }
  button {
    display: flex;
    margin: 0 auto;
    padding: 1%;
    color: black;
  }
  select {
    height: 40px;
    width: 90%;
  }
`;

export default Form;
