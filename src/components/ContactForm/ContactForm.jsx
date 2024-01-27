import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const userValidation = Yup.object().shape({
   name: Yup.string()
      .min(3, 'Too short, at least 3 characters')
      .max(50, 'Too long')
      .required('Required'),
   number: Yup.string()
      .min(3, 'Too short, at least 3 characters')
      .max(50, 'Too long')
      .required('Required'),
});

export const ContactForm = ({ addUser }) => {
   const nameId = useId();
   const numberId = useId();

   return (
      <Formik
         initialValues={{ name: '', number: '' }}
         validationSchema={userValidation}
         onSubmit={(values, actions) => {
            addUser({ id: String(nanoid()), ...values });
            actions.resetForm();
         }}
      >
         <Form className={css.form}>
            <div className={css.wrap}>
               <label htmlFor={nameId}>Name</label>
               <Field type="text" name="name" id={nameId} />
               <ErrorMessage className={css.error} name="name" component="span" />
            </div>
            <div className={css.wrap}>
               <label htmlFor={numberId}>Number</label>
               <Field type="text" name="number" id={numberId} />
               <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            <div className={css.wrapper}>
               <button className={css.button} type="submit">
                  Add Contact
               </button>
            </div>
         </Form>
      </Formik>
   );
};
