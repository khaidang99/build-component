import FormContact from "./FormContact";
import FormQuestions from "./FormQuestions";
import React from "react";

import { STATUS_FORM, useStoreContext } from "./store";

function TemplateGleadsBot() {
  const { state, backQuestion, resetQuestion } = useStoreContext();
  return (
    <div>
      <div className="box-chat">
        <div className="chat-head">
          <div className="w-[105px] h-auto">
            <img
              src={`../public/logoWhite.png`}
              className="h-full w-full"
              height={48}
              width={105}
              alt="logo-gleads"
            />
          </div>
          {state.statusForm === STATUS_FORM.QUESTIONS && (
            <div>
              <button
                onClick={() => {
                  resetQuestion();
                }}
                disabled={state.answersOrder.length <= 1}
                className="mr-3 text-white disabled:cursor-not-allowed"
              >
                Reset
              </button>
              <button
                onClick={() => {
                  backQuestion();
                }}
                disabled={state.answersOrder.length <= 1}
                className="text-white disabled:cursor-not-allowed"
              >
                Back
              </button>
            </div>
          )}
        </div>
        <div className="chat-body">
          <div className="padded-area">
            {state.statusForm === STATUS_FORM.CONTACT && <FormContact />}
            {state.statusForm === STATUS_FORM.QUESTIONS && <FormQuestions />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateGleadsBot;
