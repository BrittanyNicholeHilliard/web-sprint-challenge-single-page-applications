import * as yup from 'yup'

const FormSchema = yup.object().shape({
    customername: yup.string().trim().required('name must be at least 2 characters')
})

export default FormSchema
