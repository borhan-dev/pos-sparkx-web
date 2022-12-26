import { Typography } from 'antd';
import { Form, Formik } from 'formik';
import { addSupplier } from '../../../redux/actions/supplier';
import { useAppDispatch } from '../../../redux/store';
import { Supplier } from '../../../redux/types';
import { Button, CommonInput } from '../../components';
import { useNavigate } from 'react-router-dom';

const AddWH = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className='w-full pt-10 flex items-start justify-center flex-col'>
      <Typography className='font-bold text-2xl mb-2'>Add Supplier</Typography>
      <Formik
        initialValues={
          {
            supplierName: '',
            contactPersonName: '',
            supplierAddress: '',
            contactPersonNumber: '',
            altContactNumber: '',
            supplierEmail: '',
            extraInfo: ''
          } satisfies Supplier
        }
        onSubmit={(value, { resetForm, setErrors }) => {
          dispatch(addSupplier(value, resetForm, navigate));
        }}
      >
        <Form className='w-full flex flex-col gap-y-6 items-center pt-10 bg-white p-4'>
          <CommonInput
            name='supplierName'
            label='Supplier Name'
            placeholder='Supplier Name'
            required
          />
          <CommonInput
            name='supplierEmail'
            label='Supplier Email'
            placeholder='Supplier Email'
          />

          <CommonInput
            name='contactPersonName'
            label='Contact Person'
            placeholder='Contact Person'
            required
          />

          <CommonInput
            name='contactPersonNumber'
            label='Contact Number'
            placeholder='Contact Number'
            required
          />

          <CommonInput
            name='altContactNumber'
            label='Alt Contact'
            placeholder='Alt Contact'
          />
          <CommonInput
            name='supplierAddress'
            label='Supplier Address'
            placeholder='Supplier Address'
            required
          />
          <CommonInput
            name='extraInfo'
            label='Extra Info'
            placeholder='Extra Info'
          />
          <Button type='submit'>Save</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddWH;
