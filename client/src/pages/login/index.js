import { Formik, Form, Field } from 'formik';
import Link from 'next/link';


const Login = ()=> {
   const triggerLogin = async(values)=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const res =  await fetch('http://localhost:3001/login', requestOptions)
  const data = await res.json()
  if(data.isLoggedIn){
  
  }

   }
    return (
        <div>
          <h3>Sign In To Your Account </h3>
       <Formik
          initialValues={{
            phoneNumber:'',
            password: ''
          }}
          onSubmit={values => {
            triggerLogin(values)
          }}
        >
          {({ errors, touched }) => (
            <Form>
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

              <button type="submit">Submit</button>
              <br/>
              <small>Don't have an account yet ?</small>
              <Link href="/register">Sign Up</Link>
              <br/>
              
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Login