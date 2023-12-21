import { Formik } from "formik";
import * as Yup from 'yup'
import Form from "react-bootstrap/Form";

const FormOne = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        state: "",
        zip: "",
      }}
      validationSchema={Yup.object({
        firstname:Yup.string().required('Firstname Is Required').max(6,'Name is too long'),
        lastname:Yup.string().required('Lastname Is Required'),
        email:Yup.string().required('Enail Is Required').email('Enter Proper Mail')
      })}
      // validate={(values) => {
      //   const errors = {};
      //   if (values.firstname == "") {
      //     errors.firstname = "Please Fill Firstname Field";
      //   }
      //   if (values.lastname == "") {
      //     errors.lastname = "Please Fill Lastname Field";
      //   }
      //   if (values.email == "") {
      //     errors.email = "Please Fill Email Field";
      //   }
      //   return errors;
      // }}


      onSubmit={(values) => {
          // values.firstname = ""
          // values.lastname = ""
          // values.email = ""
          // values.country = ""
          // values.state = ""
          // values.zip=""
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="container">
          <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && touched.firstname ? (
                    <span>{errors.firstname}</span>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && touched.lastname ? (
                    <span>{errors.lastname}</span>
                  ) : null}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <Form.Select
                    className="custom-select d-block w-100"
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="IN">India</option>
                    <option value="CA">Canada</option>
                    <option value="NL">Netherlands</option>
                  </Form.Select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <Form.Select
                    className="custom-select d-block w-100"
                    id="state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="toronto">Toronto</option>
                    <option value="utrech">Utrech</option>
                  </Form.Select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormOne;
