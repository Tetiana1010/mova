import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

import { editWord } from "@/src/db/mutations";
import { useQueryClient } from "@tanstack/react-query";

import XIcon from "../icons/x-icon";

interface EditWordFormProps {
  handleToggle: () => void;
  word: FormValues;
}

interface FormValues {
  word: string;
  translation: string;
  example?: string;
  id?: number;
}

const editWordSchema = Yup.object().shape({
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

const EditWordForm: React.FC<EditWordFormProps> = ({ word, handleToggle }) => {
  const initialValues: FormValues = {
    word: word.word,
    translation: word.translation,
    example: word.example,
    id: word.id,
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
    <div className="fixed inset-0 bg-white flex items-center justify-center z-30">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-center">Edit</h1>
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
          validationSchema={editWordSchema}
          onSubmit={async ({ translation, word, example = "", id }) => {
            toast.promise(editWord(word, translation, example, id ?? 0), {
              loading: "Updation word",
              success: (data) => {
                handleToggle();
                queryCache.refetchQueries({
                  queryKey: ["words"],
                });
                return `Word ${data.word} updated!`;
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
                  Edit Word
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditWordForm;
