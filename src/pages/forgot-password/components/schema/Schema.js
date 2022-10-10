import * as yup from "yup"
import moment from "moment"

const Schema = yup
    .object()
    .shape({
        email: yup
            .string()
            .nullable()
            .required("Required field")
            .email("Must be a valid email")
            .max(255, "The maximum length is 255 characters"),
    })
    .required()

export default Schema
