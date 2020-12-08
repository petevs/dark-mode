import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValues) => {


    const [values, setValues] = useLocalStorage("darkMode",initialValues)

    const handleChanges = e => {
        // setValues({
        //     ...values,
        //     [e.target.name]: e.target.value
        // })
        console.log('test')
    }

    return [values, handleChanges]
}