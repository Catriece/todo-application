// import React, { FC, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { UserInterface, InitialValues } from "../../types";

// const FormValidation: FC<InitialValues> = ({ initialValues }) => {
//     const [interfaceType, setInterfaceType] = useState<InitialValues>(initialValues)
//   const [labels, setLabels] = useState<string[]>([]);

//   setLabels()
//   return (
//     <div>
//       <Formik
//         initialValues={interfaceType}
//           validate={(values) => {
//             const errors: Partial<UserInterface> = {}; // Properties in User interface are now optional (Helpful but debating on whether or not that is a good thing)
//             if (!values.username) {
//               errors.username = "Username or Email is required";
//             } else if (values.username.includes("@")) {
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username); // If username comes in as an email.
//             } else {
//               errors.username = "Invalid username or email address"; // When logging in Email and Username are interchangeable so for simplicities sake I am using 'username' as the term.
//             }
//             return errors;
//           }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//             <Field type="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default FormValidation;
