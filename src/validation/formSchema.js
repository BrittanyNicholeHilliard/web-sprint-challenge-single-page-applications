import * as yup from 'yup'

const formSchema = yup.object().shape({
    name-input: yup.string().trim().required('name must be at least 2 characters')
})

