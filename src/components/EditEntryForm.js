import { Formik, Form, Field } from 'formik';
import { FaDollarSign } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { editTransaction } from '../redux/ducks/budgetDucks';

const EditEntryForm = ({
  oldIsExpense,
  oldDescription,
  oldValue,
  id,
  setIsOpen,
  dispatch
}) => {
  const initialValues = {
    isExpense: oldIsExpense,
    description: oldDescription,
    value: oldValue
  };

  const validate = values => {
    const errors = {};
    if (!/^[0-9]*\.?[0-9]*$/.test(values.value)) {
      errors.text = 'Invalid value';
    }
    return errors;
  };

  const onSubmit = values => {
    const newObj = {
      id,
      isExpense: values.isExpense,
      description: values.description,
      value: values.value
    };
    dispatch(editTransaction(newObj));
    setIsOpen(false);
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
              Edit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditEntryForm;
