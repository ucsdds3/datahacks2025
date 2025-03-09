import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface FAQProps {
  questions: { [key: string]: string };
}

const FAQ = ({ questions }: FAQProps) => {
  const [expanded, setExpanded] = useState(-1);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <div className="flex flex-col items-center lg:w-[60vw] w-[95vw] font-albert-sans">
      <h3 className="text-5xl font-bold text-white">FAQ</h3>
      {Object.entries(questions).map(([question, answer], index) => (
        <FAQQuestion
          question={question}
          answer={answer}
          key={index}
          isExpanded={expanded === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

interface FAQQuestionProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const FAQQuestion: React.FC<FAQQuestionProps> = ({ question, answer, isExpanded, onToggle }) => {
  return (
    <div className="faq-sectionbox mt-5 w-full">
      <div
        className="display flex justify-between faq-question pb-4 border-b-2 border-[white] cursor-pointer"
        onClick={onToggle}
      >
        <p className="justify-center flex text-xl text-white">{question}</p>
        {isExpanded && <IoIosArrowUp className="justify-center text-3xl text-white" />}
        {!isExpanded && <IoIosArrowDown className="justify-center text-3xl text-white" />}
      </div>
      {isExpanded && (
        <div className="faq-answer mt-4 pt-4 pb-8 border-b-2 border-[white]">
          <p className="justify-center flex text-xl text-white">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
