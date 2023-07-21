import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPersonHandler = () => {
    let randomNumber = Math.floor(Math.random() * (people.length - 1));
    if (randomNumber === index) {
      randomNumber++;
    }
    const newIndex = randomNumber % people.length;
    setIndex(() => newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPersonHandler}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPersonHandler}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPersonHandler}>
          Random Person!
        </button>
      </article>
    </main>
  );
};
export default App;
