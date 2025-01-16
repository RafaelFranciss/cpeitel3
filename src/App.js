import './App.css';
import { useState } from "react";

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function App() {
  const fullName = "RAFAEL FRANCIS ACUNA";
  const section = "IT3A";
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic"
  ];

  const handleKeyClick = (index) => {
    if (index >= 0 && index < items.length) {
      setDisp(items[index]);
    }
  };

  const resetClickHandler = () => {
    setDisp("10 Things That Require Zero Talent");
  };

  const surnameClickHandler = () => {
    setDisp(fullName);
  };


  const whatILearned = "Last semester, I learned the fundamentals of ReactJS and became more focused on following instructions carefully. I developed a solid understanding of key concepts such as components, state, and props, which are required for developing React apps. This also helped me improve my ability to follow lectures and directions step by step, making improvements easier to carry out. ";
  const whatIWantToLearn = "As I try to keep enhancing my web and application programming skills, I plan to learn more on a few key areas to improve my understanding and become more proficient in creating modern web applications. While last semester I established a solid basis in ReactJS, the next step is to look into more advanced ideas and resources that will allow me to construct dynamic, productive, and versatile applications.";
  const howIWillLearn = "While I have a basic understanding of web and application development, I realize that in order to fully succeed, I will need to go deeper into deeper topics, obtain practical knowledge, and consistently improve my skills. To do this, I have created a thorough plan for approaching my learning in the upcoming semesters, bringing together official learning in school, with self-directed research and practice.";

  const whatILearnedHandler = () => setDisp(whatILearned);
  const whatIWantToLearnHandler = () => setDisp(whatIWantToLearn);
  const howIWillLearnHandler = () => setDisp(howIWillLearn);

  return (
    <div className="App">
      <h1>{`${fullName} - ${section}`}</h1>

      <div className="CalcContainer">
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">

          <Key label={1} clickHandler={() => handleKeyClick(0)} />
          <Key label={2} clickHandler={() => handleKeyClick(1)} />
          <Key label={3} clickHandler={() => handleKeyClick(2)} />
          <Key label={4} clickHandler={() => handleKeyClick(3)} />
          <Key label={5} clickHandler={() => handleKeyClick(4)} />
          <Key label={6} clickHandler={() => handleKeyClick(5)} />
          <Key label={7} clickHandler={() => handleKeyClick(6)} />
          <Key label={8} clickHandler={() => handleKeyClick(7)} />
          <Key label={9} clickHandler={() => handleKeyClick(8)} />
          <Key label={0} clickHandler={() => handleKeyClick(9)} />
          <Key label={"RESET"} clickHandler={resetClickHandler} />
          <Key label={"NAME"} clickHandler={surnameClickHandler} className="surname" />
          
          <Key label={"What I learned?"} clickHandler={whatILearnedHandler} />
          <Key label={"What I want to learn?"} clickHandler={whatIWantToLearnHandler} />
          <Key label={"How will I learn?"} clickHandler={howIWillLearnHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
