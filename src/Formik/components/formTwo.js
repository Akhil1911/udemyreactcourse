import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormTwo = () => {

    const formik = useFormik({
        initialValues: {
            firstname: '',
        },
        onSubmit: value => { console.log(value); alert(value.firstname); },
        validationSchema: Yup.object({
            firstname:Yup.string().required('Field is required')
        })
})

    return (
      <div className="container">
        <div className="col-md-12 mt-5">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstname">First name</label>
            <input
              className="form-control"
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            />
            {formik.errors.firstname && formik.touched.firstname ? (
              <span>{formik.errors.firstname}</span>
            ) : null}
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
    );
}

export default FormTwo;