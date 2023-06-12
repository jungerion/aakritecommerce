import { Formik, Form, Field } from 'formik';
import Link from 'next/link';



const Register = ( )=> {
   
    return (
        <div>
    
      <h3>Create New Account</h3>
        <Formik
          initialValues={{
            fullName:'',
            phoneNumber:'',
            password: '',
            conformPassword: '',
            email: '',
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="fullName" placeholder="Full Name"/>
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
              <br/>
              <Field name="phoneNumber" placeholder="Phone Number"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password"  type ="password"placeholder="Password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
                <br/>
              <Field name="conformPassword"  type ="Password"placeholder="Conform Password"/>
              {errors.conformPassword && touched.conformPassword? (
                <div>{errors.conformPassword}</div>
              ) : null}
              <br/>
              <Field name="email"  placeholder="E-mail"/>
              {errors.email && touched.email ? (
              <div>{errors.email}</div>
               ): null}
              <br/>
              
              <button type="submit">Submit</button>
              <br/>
              <small>Already have an account ? </small>
              <Link href="/login">Sign In</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register