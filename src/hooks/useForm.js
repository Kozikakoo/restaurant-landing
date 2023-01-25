import {useEffect, useState} from "react";

// const useValidation = (value) => {
//     const [errorMessages, setErrorMessages] = useState("")
//     const [isError, setIsError] = useState(true)
//     const nameRegex = /^[a-zA-Z\-]+$/;
//
//     useEffect(() => {
//         if (value === "") {
//             setIsError(true)
//             setErrorMessages("Required")
//         } else if (!nameRegex.test(value)) {
//             setIsError(true)
//             setErrorMessages("Invalid name")
//         } else if (value.length > 30) {
//             setIsError(true)
//             setErrorMessages("Name should contain less 30 characters")
//         } else if ((value.length > 0) && (value.length < 4)) {
//             setIsError(true)
//             setErrorMessages("Name should contain more 3 characters")
//         } else {
//             setIsError(false)
//         }
//     }, [value])
//
//     return {
//         errorMessages,
//         isError
//     }
// }
const useValidationName = (value) => {
    const [errorMessageName, setErrorMessageName] = useState("")
    const [isErrorName, setIsErrorName] = useState(true)
    const nameRegex = /^[a-zA-Z\-]+$/;

    useEffect(() => {
        if (value === "") {
            setIsErrorName(true)
            setErrorMessageName("Required")
        } else if (!nameRegex.test(value)) {
            setIsErrorName(true)
            setErrorMessageName("Invalid name")
        } else if (value.length > 30) {
            setIsErrorName(true)
            setErrorMessageName("Name should contain less 30 characters")
        } else if ((value.length > 0) && (value.length < 4)) {
            setIsErrorName(true)
            setErrorMessageName("Name should contain more 3 characters")
        } else {
            setIsErrorName(false)
        }
    }, [value])

    return {
        errorMessageName,
        isErrorName
    }
}

// export const useValidation = (value, validations) => {
//     const [isEmpty, setEmpty] = useState(true)
//     const [minLengthError, setMinLengthError] = useState(false)
//     const [maxLengthError, setMaxLengthError] = useState(false)
//     const [emailError, setEmailError] = useState(false)
//     const [phoneError, setPhoneError] = useState(null)
//     const [errorMessages, setErrorMessages] = useState("")
//
//     useEffect(() => {
//         for (const validation in validations) {
//             switch (validation) {
//                 case "isEmpty":
//                     if (value) {
//                         setEmpty(false)
//                         setErrorMessages("")
//                     } else {
//                         setEmpty(true)
//                         setErrorMessages("Пустое поле")
//                     }
//                     break;
//                 case "minLength":
//                     if (value.length < validations[validation]) {
//                         setMinLengthError(true)
//                         setErrorMessages("Проверка")
//                     } else {
//                         setMinLengthError(false)
//                         setErrorMessages("")
//                     }
//                     break;
//
//                 case "maxLength":
//                     value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
//                     break;
//                 case "isEmail":
//                     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
//                     regexEmail.test(String(value)) ? setEmailError(false) : setEmailError(true)
//                     break;
//                 case "isPhone":
//                     const regexPhone = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
//                     regexPhone.test(value) ? setPhoneError(false) : setPhoneError(true)
//                     break;
//             }
//         }
//     }, [value])
//
//     return {
//         isEmpty,
//         minLengthError,
//         maxLengthError,
//         emailError,
//         phoneError,
//         errorMessages
//     }
// }

export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const validName = useValidationName(value)

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
        ...validName
    }

}