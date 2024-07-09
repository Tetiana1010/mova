import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import { createWord } from "@/src/db/mutations";

import XIcon from "../icons/x-icon";
import { useQueryClient } from "@tanstack/react-query";

interface AddWordFormProps {
  handleToggle: () => void;
}

interface FormValues {
  word: string;
  translation: string;
  example?: string;
}

const newWordSchema = Yup.object().shape({
  word: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  translation: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  example: Yup.string().min(1, "Too Short!").max(100, "Too Long!"),
});

const AddWordForm: React.FC<AddWordFormProps> = ({ handleToggle }) => {
  const initialValues: FormValues = {
    word: "",
    translation: "",
    example: "",
  };

  const renderField = (
    label: string,
    name: keyof FormValues,
    type: string,
    placeholder: string,
    errors: any,
    touched: any,
  ) => (
    <div className="mb-4 relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 text-left"
      >
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border"
      />
      {errors[name] && touched[name] ? (
        <div className="absolute text-red-600 text-xs mt-1 text-pink">
          {errors[name]}
        </div>
      ) : null}
    </div>
  );
  const queryCache = useQueryClient();

  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Add a New Word</h1>
          <button
            className="bg-pink text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleToggle}
          >
            <XIcon />
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={newWordSchema}
          onSubmit={async ({ translation, word, example }) => {
            toast.promise(createWord(word, translation, example ?? ""), {
              loading: "Creating word",
              success: (data) => {
                handleToggle();
                queryCache.refetchQueries({
                  queryKey: ["words"],
                });
                return `Word ${data.word} created!`;
              },
              error: (err) => `Error: ${err.message}`,
            });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              {renderField(
                "Word",
                "word",
                "text",
                "Enter the word",
                errors,
                touched,
              )}
              {renderField(
                "Translation",
                "translation",
                "text",
                "Enter the translation",
                errors,
                touched,
              )}
              {renderField(
                "Example of usage",
                "example",
                "text",
                "Enter the example of usage",
                errors,
                touched,
              )}

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Word
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddWordForm;
