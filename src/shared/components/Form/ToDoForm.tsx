import React from "react";
import "./ToDoForm";
import { Form, Field } from "react-final-form";
import Input from "./Input/Input";
import Button from "../Button/Button";
import DatePicker from "../DatePicker/DatePicker";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { ToDoFormType } from "../../../types/types";

const ToDoForm = (props: ToDoFormType) => {
  const history = useHistory();

  const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: any) => {
    props.onSubmit(values);
    await sleep(300);
    Swal.fire({
      title: "УСПЕХ!",
      text: props.alert1 || "Вы успешно создали событие",
      icon: "success",
      confirmButtonText: "Ок",
    });
  };

  let formData = {
    title: props.defaultTitle || "",
    text: props.defaultText || "",
    date: props.defaultDate || new Date(),
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={(values) => {
          const errors: any = {};
          if (!values.title) {
            errors.title = "Введите название";
          }
          if (!values.text) {
            errors.text = "Введите описание";
          }
          return errors;
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
        }) => (
          <form
            onSubmit={(event) => {
              const promise = handleSubmit(event);

              promise &&
                promise.then(() => {
                  props.promise1();
                });

              return promise;
            }}
          >
            <Field name="date">
              {({ input, meta }) => (
                <div className="">
                  <DatePicker {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="title">
              {({ input, meta }) => (
                <div className="form__group field">
                  <Input {...input} name="Название" />
                  {meta.error && meta.touched && (
                    <span className="form__field__error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="text">
              {({ input, meta }) => (
                <div className="form__group field">
                  <Input {...input} name="Описание" />
                  {meta.error && meta.touched && (
                    <span className="form__field__error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Button type="button" onClick={(e: any) => history.push("/")}>
              Отмена
            </Button>
            <Button type="submit" disabled={submitting}>
              {props.button}
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default ToDoForm;
