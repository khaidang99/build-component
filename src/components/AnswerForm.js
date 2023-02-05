/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useStoreContext } from "../store";

function AnswerForm({ questionSelected, answerItem }) {
  const { state, setAnswersOrder } = useStoreContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (answerItem.answer) {
      Object.entries(answerItem.answer).forEach(([name, value]) =>
        setValue(name, value)
      );
    }
  }, [answerItem]);

  const getElementField = (field) => {
    switch (field.typeField) {
      case "mess":
        return (
          <div className="mb-3">
            <div dangerouslySetInnerHTML={{ __html: field.question }}></div>
          </div>
        );
      case "text":
        return (
          <div className="mb-3">
            <label dangerouslySetInnerHTML={{ __html: field.question }}></label>

            <input
              type={"text"}
              className="w-full rounded-lg border-slate-200"
              {...register(field.name, { required: field.required })}
            />
            {errors[field.name] && (
              <span className="inline-block pt-2 text-sm text-gleads-danger-500">
                This field is required
              </span>
            )}
          </div>
        );
      case "radio":
        return (
          <div className="mb-3">
            <p
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: field.question }}
            ></p>
            {field.options.map((option, indexOption) => (
              <div key={indexOption} className="mb-1">
                <label className="inline-block cursor-pointer disabled:cursor-not-allowed">
                  <input
                    {...register(field.name, {
                      required: field.required,
                    })}
                    type="radio"
                    className="mr-1 inline-block"
                    value={option.value}
                  />
                  {option.label}
                </label>
              </div>
            ))}
            {errors[field.name] && (
              <span className="inline-block pt-2 text-sm text-gleads-danger-500">
                This field is required
              </span>
            )}
          </div>
        );
      case "other":
        return (
          <div className="mb-3">
            <p
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: field.question }}
            ></p>
            {field.options.map((option, indexOption) => (
              <div key={indexOption} className="mb-1">
                <label
                  key={indexOption}
                  className="inline-block cursor-pointer"
                >
                  <input
                    {...register(field.name, { required: field.required })}
                    type="radio"
                    className="mr-1 inline-block"
                    value={option.value}
                  />
                  {option.label}
                </label>
              </div>
            ))}
            <div className="mb-1">
              <label className="inline-block cursor-pointer">
                <input
                  {...register(field.name)}
                  type="radio"
                  value="__other"
                  className="mr-1 inline-block"
                />
                <input type="text" {...register(field.name)} />
              </label>
            </div>
            {errors[field.name] && (
              <span className="inline-block pt-2 text-sm text-gleads-danger-500">
                This field is required
              </span>
            )}
          </div>
        );
      default:
        return <></>;
    }
  };

  const onSubmit = (data) => {
    const payload = {
      step: answerItem.step,
      answer: data,
      redirectToStep: questionSelected.redirectToStep,
    };
    setAnswersOrder(payload);
  };

  const isLastQuestion = () => {
    return (
      state.answersOrder[state.answersOrder.length - 1].step === answerItem.step
    );
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={!isLastQuestion()}>
        {questionSelected.fields &&
          questionSelected.fields.map((field, indexField) => (
            <div key={indexField}>{getElementField(field)}</div>
          ))}
        <button
          className="btn-submit rounded bg-sky-300 px-2 py-1"
          type="submit"
        >
          submit
        </button>
      </fieldset>
    </form>
  );
}

export default AnswerForm;
