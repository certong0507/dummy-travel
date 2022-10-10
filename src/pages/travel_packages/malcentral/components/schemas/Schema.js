import * as yup from "yup"

const Schema = yup
    .object()
    .shape({
        phoneNumber: yup.string().nullable().required("Required field"),

        email: yup.string().nullable().required("Required field").email("Must be a valid email"),

        noOfPeople: yup
            .number()
            .typeError("At east 1 person")
            .required("Required field")
            .min(1, "1 to 100 only"),

        package: yup.string().nullable().required("Required field"),
    })
    .required()

export default Schema
