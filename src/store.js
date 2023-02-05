import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ACTIONS = {
  SET_INFO_CONTACT: "SET_INFO_CONTACT",
  SET_ANSWERS_ORDER: "SET_ANSWERS_ORDER",
  SET_STATUS_FORM: "SET_STATUS_FORM",
  RESET_QUESTION: "RESET_QUESTION",
  BACK_QUESTION: "BACK_QUESTION",
};

export const STATUS_FORM = {
  CONTACT: "CONTACT",
  QUESTIONS: "QUESTIONS",
};

export const NUMBER_LAST_STEP = 999;

const gleadsBotInitialState = {
  personalInformation: {},
  statusForm: STATUS_FORM.CONTACT,
  currentQuestionStep: 1,
  answersOrder: [{ step: 1, answer: 1 }],
};

export const GleadsBotContext = createContext();

const gleadsBotReducer = (state, action) => {
  let cloneAnswersOrder = [...state.answersOrder];
  switch (action.type) {
    case ACTIONS.SET_INFO_CONTACT:
      return {
        ...state,
        statusForm: STATUS_FORM.QUESTIONS,
        personalInformation: action.payload,
      };

    case ACTIONS.SET_STATUS_FORM:
      return {
        ...state,
        statusForm: action.payload,
      };

    case ACTIONS.SET_ANSWERS_ORDER:
      const { payload } = action;
      const indexAnswer = cloneAnswersOrder.findIndex(
        (answer) => answer.step === payload.step
      );
      if (indexAnswer >= 0) {
        cloneAnswersOrder[indexAnswer] = payload;
        cloneAnswersOrder.length = indexAnswer + 1;
      } else {
        cloneAnswersOrder.push(payload);
      }

      if (payload.redirectToStep) {
        cloneAnswersOrder.push({
          step: payload.redirectToStep,
          answer: 0,
        });
      }

      return { ...state, answersOrder: cloneAnswersOrder };

    case ACTIONS.BACK_QUESTION:
      if (cloneAnswersOrder.length > 1) {
        cloneAnswersOrder.length = cloneAnswersOrder.length - 1;
        cloneAnswersOrder[cloneAnswersOrder.length - 1].answer = 0;
        return { ...state, answersOrder: cloneAnswersOrder };
      }

    case ACTIONS.RESET_QUESTION:
      if (cloneAnswersOrder.length > 1) {
        cloneAnswersOrder.length = 1;
        cloneAnswersOrder[0].answer = 0;
        return { ...state, answersOrder: cloneAnswersOrder };
      }

    default:
      return state;
  }
};

export const useStoreContext = () => useContext(GleadsBotContext);

export function StoreGleadsBot({ children }) {
  const recaptchaRef = useRef();
  const [state, dispatch] = useReducer(gleadsBotReducer, gleadsBotInitialState);
  useEffect(() => {
    const infoContact = sessionStorage.getItem("INFO_CONTACT_BOT");
    if (infoContact) {
      dispatch({
        type: ACTIONS.SET_STATUS_FORM,
        payload: STATUS_FORM.QUESTIONS,
      });
    } else {
      dispatch({
        type: ACTIONS.SET_STATUS_FORM,
        payload: STATUS_FORM.CONTACT,
      });
    }
  }, []);

  const sendContact = async (formData, token) => {
    const endpoint = `${process.env.NEXT_PUBLIC_API_FORM}/api/portal/contact_form`;
    const headers = {
      "Content-Type": "application/json",
      "captcha-response": token,
    };

    Object.assign(formData, {
      website_id: process.env.NEXT_PUBLIC_WEBSITE_ID,
      contact_from_id: 5,
      message: formData.message || " ",
      subject: " ",
    });

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    };

    return await fetch(endpoint, options).then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error("Không thể gửi đi thông tin liên hệ");
      }
    });
  };

  const formatAnswers = (results) => {
    let listResults = ``;
    results.forEach((result) => {
      for (const key of Object.keys(result.answer)) {
        listResults += `<li><span style="font-style: italic;">${key}</span><span>: </span><span style="font-weight: 600;">${result.answer[key]}</span></li>`;
      }
    });
    return `<ul style="margin-top: 0;">${listResults}</ul>`;
  };

  const setInfoContact = async (formData) => {
    const token = await recaptchaRef.current.executeAsync();
    try {
      if (formData && token) {
        await sendContact(formData, token);
        sessionStorage.setItem("INFO_CONTACT_BOT", JSON.stringify(formData));
        dispatch({
          type: ACTIONS.SET_INFO_CONTACT,
          payload: formData,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setAnswersOrder = async (value) => {
    if (value && value.step) {
      try {
        if (value.redirectToStep === NUMBER_LAST_STEP) {
          const token = await recaptchaRef.current.executeAsync();
          if (token) {
            const results = [...state.answersOrder];
            results[results.length - 1] = value;
            const infoContact = JSON.parse(
              sessionStorage.getItem("INFO_CONTACT_BOT")
            );
            infoContact.message = formatAnswers(results);
            await sendContact(infoContact, token);
          }
        }
        dispatch({
          type: ACTIONS.SET_ANSWERS_ORDER,
          payload: value,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const backQuestion = () => {
    dispatch({
      type: ACTIONS.BACK_QUESTION,
    });
  };

  const resetQuestion = () => {
    dispatch({
      type: ACTIONS.RESET_QUESTION,
    });
  };

  return (
    <GleadsBotContext.Provider
      value={{
        state: state,
        setInfoContact,
        setAnswersOrder,
        backQuestion,
        resetQuestion,
        sendContact,
      }}
    >
      {children}
      <div className="mr-2 hidden">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_G_RECAPTCHA_V3_SITE_KEY}
          badge="inline"
          size="invisible"
        />
      </div>
    </GleadsBotContext.Provider>
  );
}
