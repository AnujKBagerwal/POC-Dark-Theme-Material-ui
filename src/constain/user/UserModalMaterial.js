import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Paper, Button, Typography } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';

// Create style for Modal and Components
const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30%',
    marginTop: '6%',
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// Create Modal using Material-ui
// To implement Dark mode and Light Mode

const UserModalMaterial = ({
  modal,
  handleUser,
  handleUserDetails,
  userDetails,
}) => {
  // This way we assign style as className
  const classes = useStyles();

  // if there is any pre-define value for form
  const {
    firstName,
    middleName,
    lastName,
    address1,
    address2,
    mobileNo,
    pincode,
  } = userDetails;

  // initial value when Form is created or open
  const initialValues = {
    firstName: firstName || '',
    middleName: middleName || '',
    lastName: lastName || '',
    address1: address1 || '',
    address2: address2 || '',
    mobileNo: mobileNo || null,
    pincode: pincode || null,
  };

  // All validation is been handle from validationSchema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('Please Enter First Name')
      .max(10, 'First Name must be less than 10 letter'),
    middleName: Yup.string().max(10, 'Name must be less than 10 letter'),
    lastName: Yup.string()
      .required('Please Enter Last Name')
      .max(10, 'Last Name must be less than 10 letter'),
    address1: Yup.string()
      .required('Please Enter Address1')
      .max(250, 'Address must be less than 250 letter'),
    address2: Yup.string().max(250, 'Address must be less than 250 letter'),
    mobileNo: Yup.string()
      .min(8, 'Number should be more then 8 digits')
      .max(10, 'Number should be less than 10 digits')
      .matches(/^[0-9]*$/, 'Enter only Number')
      .required('Please Enter Mobile Number'),
    pincode: Yup.string()
      .max(8, 'Number should be less than 8 digits')
      .matches(/^[0-9]*$/, 'Enter only Number')
      .required('Please Enter Pincode'),
  });

  // When form will be submit
  const onSubmit = (values) => {
    console.log('values', values);
    handleUserDetails(values);
  };

  return (
    <div>
      <Modal className={classes.modal} open={modal} onClose={handleUser}>
        {/* Paper is to implement dark/Light mode */}
        <Paper>
          <div className={classes.paper}>
            <Typography variant="h4">Login</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {/* values is use to get values from component appart from formik component and use to get/set value */}
              {({ values }) => (
                <Form>
                  <Row className="form-row">
                    <Col md={4}>
                      <label>First Name</label>
                      <br />
                      <Field
                        type="text"
                        name="firstName"
                        className="form-control"
                      />
                      <ErrorMessage name="firstName" />
                    </Col>
                    <Col md={4}>
                      <label>Middle Name</label>
                      <br />
                      <Field
                        type="text"
                        name="middleName"
                        className="form-control"
                      />
                      <ErrorMessage name="middleName" />
                    </Col>
                    <Col md={4}>
                      <label>Last Name</label>
                      <br />
                      <Field
                        type="text"
                        name="lastName"
                        className="form-control"
                      />
                      <ErrorMessage name="lastName" />
                    </Col>
                  </Row>
                  <Row className="form-row">
                    <label>address1</label>
                    <br />
                    <Field
                      type="text"
                      name="address1"
                      className="form-control"
                    />
                    <ErrorMessage name="address1" />
                  </Row>
                  <Row className="form-row">
                    <label>address2</label>
                    <br />
                    <Field
                      type="text"
                      name="address2"
                      className="form-control"
                    />
                    <ErrorMessage name="address2" />
                  </Row>
                  <Row className="form-row">
                    <Col md={4}>
                      <label>Mobile No</label>
                      <br />
                      <Field
                        type="text"
                        name="mobileNo"
                        className="form-control"
                      />
                      <ErrorMessage name="mobileNo" />
                    </Col>
                    <Col md={4}>
                      <label>Pincode</label>
                      <br />
                      <Field
                        type="text"
                        name="pincode"
                        className="form-control"
                      />
                      <ErrorMessage name="pincode" />
                    </Col>
                  </Row>
                  <div
                    style={{
                      marginLeft: '30%',
                      marginTop: '25px',
                      marginBottom: '20px',
                    }}
                  >
                    {/* {JSON.stringify(values, null, 2)} */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUser()}
                      style={{ marginLeft: '20px', marginRight: '20px' }}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

export default UserModalMaterial;
