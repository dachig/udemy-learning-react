import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleChangeUserInput("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleChangeUserInput("annualInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleChangeUserInput("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => handleChangeUserInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
