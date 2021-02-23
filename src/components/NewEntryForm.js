import { Formik, Form, Field } from 'formik';
import { v4 as uuid } from 'uuid';
import { FaDollarSign } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { addNewTransaction } from '../redux/ducks/budgetDucks';

const NewEntryForm = ({ dispatch }) => {
  const initialValues = { isExpense: false, description: '', value: '' };

  const validate = values => {
    const errors = {};
    if (!/^[0-9]*\.?[0-9]*$/.test(values.value)) {
      errors.text = 'Invalid value';
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    const newObj = {
      id: uuid(),
      isExpense: values.isExpense,
      description: values.description,
      value: values.value
    };
    dispatch(addNewTransaction(newObj));
    setSubmitting(false);
    resetForm(initialValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <label>
              <Field type='checkbox' name='isExpense' />
              <span>Is expense?</span>
            </label>
          </div>
          <div className='form__wrapper'>
            <div className='input__description'>
              <Field
                type='text'
                name='description'
                placeholder='Description'
                required
              />
              <AiFillTag className='tag' />
            </div>
            <div className='input__value'>
              <Field type='text' name='value' placeholder='Value' required />
              <FaDollarSign className='dollar' />
              {errors.text ? <div className='error'>{errors.text}</div> : null}
            </div>
            <button className='form__btn' type='submit' disabled={isSubmitting}>
              Add
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewEntryForm;
