import React from "react";

import { useStoreContext } from "../store";

function AnswerRadio({ questionSelected, answerItem }) {
  const { setAnswersOrder } = useStoreContext();
  const handleChooseOption = (value) => {
    setAnswersOrder(value);
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
        {questionSelected.fields.map((field, indexOption) => (
          <div key={indexOption} className={`question`}>
            <div
              onClick={() =>
                handleChooseOption({
                  step: answerItem.step,
                  answer: 0,
                  ...questionSelected,
                })
              }
              dangerouslySetInnerHTML={{ __html: field.label }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnswerRadio;
