import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(null)
    const [errorMessages, setErrorMessages] = useState("")

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    if (value) {
                        setEmpty(false)
                        setErrorMessages("")
                    } else {
                        setEmpty(true)
                        setErrorMessages("Пустое поле")
                    }
                    break;
                case "minLength":
                    if (value.length < validations[validation]) {
                        setMinLengthError(true)
                    } else {
                        setMinLengthError(false)
                    }
                    break;

                case "maxLength":
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case "isEmail":
                    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
                    regexEmail.test(String(value)) ? setEmailError(false) : setEmailError(true)
                    break;
                case "isPhone":
                    const regexPhone = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
                    regexPhone.test(value) ? setPhoneError(false) : setPhoneError(true)
                    break;
            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        emailError,
        phoneError,
        errorMessages
    }
}

export const useForm = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }

}