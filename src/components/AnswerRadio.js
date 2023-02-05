import React from "react";

import { useStoreContext } from "../store";

function AnswerRadio({ questionSelected, answerItem }) {
  const { state, setAnswersOrder } = useStoreContext();
  const handleChooseOption = (value) => {
    setAnswersOrder(value);
  };

  const isLastQuestion = () => {
    return (
      state.answersOrder[state.answersOrder.length - 1].step === answerItem.step
    );
  };

  return (
    <div className="group-question">
      <div className="flex">
        <div className="mr-1 shrink-0">
          <img
            src="../../public/logo-only-Gleads.png"
            width={138}
            height={138}
            className="h-10 w-10"
            alt="icon success"
          />
        </div>
        <div className="question">{questionSelected.question}</div>
      </div>
      <div className="text-right">
        {questionSelected.fields.map((field, indexOption) => (
          <button
            key={indexOption}
            disabled={!isLastQuestion()}
            className={`${
              field.value === answerItem.answer[questionSelected.name]
                ? "active"
                : ""
            } option ml-2 disabled:cursor-not-allowed`}
            onClick={() => {
              handleChooseOption({
                step: answerItem.step,
                answer: {
                  [questionSelected.name]: field.value,
                },
                ...field,
              });
            }}
          >
            {field.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnswerRadio;
