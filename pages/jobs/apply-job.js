import React from 'react';
import Layout from '../../components/shared-components/Layout';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import { Modal, Button } from "react-bootstrap";
import DropboxChooser from 'react-dropbox-chooser';
import GooglePicker from 'react-google-picker';
import Link from 'next/link';

class JobApply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentFile: null,
            isDropped: false,
            isCreate: false,
            resume: {},
            candidate: { name: '', email: '', phonenumber: '', file: null }
        };
    }

    dropResume() {
        this.setState({ isDropped: !this.state.isDropped });
        document.body.classList.add('careerfy-modal-active');
    }

    closeDropSection() {
        this.setState({
            isDropped: !this.state.isDropped,
            currentFile: '',
        });
        document.body.classList.add('careerfy-modal-active');
    }

    createResume() {
        this.setState({ isCreate: !this.state.isCreate });
        document.body.classList.add('careerfy-modal-active');
    }

    closeCreateResumeSection() {
        this.setState({ isDropped: !this.state.isCreate });
        document.body.classList.add('careerfy-modal-active');
    }

    handleSuccess(files) {
        console.log('files : ', files)
    }

    render() {
        let validationSchema = {
            name: yup.string().required("Name is Required."),
            email: yup
                .string()
                .email("Please Enter an valid Email")
                .required("Email is Required."),
            phonenumber: yup.string().required("Phone Number is Required."),
        }
        return (
            <Layout>
                <Link href="/">
                    <a>Back</a>
                </Link>
                <h3>Apply Jobs Form with FormIk</h3>

                <div>
                    <div>
                        <input type="file" style={{ height: '100%' }} onChange={(event) => {
                            this.setState({ currentFile: event.currentTarget.files[0] });
                            this.dropResume();
                        }} className="form-control" />
                    </div>

                    {/* {!this.state.isCreate && <Button variant="primary" onClick={() => this.createResume()}>
                        Launch Create modal
                                </Button>} */}
                </div>
                {
                    (this.state.isDropped && this.state.currentFile && this.state.currentFile != "") && <Modal show={true}>
                        <Modal.Header>
                            <Modal.Title>Drop CV</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik
                                enableReinitialize={true}
                                initialValues={this.state.candidate}
                                onSubmit={({ name, email, phonenumber }, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    const dataToSend = {
                                        name: name,
                                        email: email,
                                        phonenumber: phonenumber,
                                        id: 0,
                                        file: this.state.currentFile
                                    };
                                    console.log('dataToSend : ', dataToSend);
                                }}
                                validationSchema={yup.object().shape(validationSchema)}
                                render={({ values, handleSubmit, setFieldValue, errors, status, touched, actions }) => {
                                    return (
                                        <div>
                                            <form onSubmit={handleSubmit} className="apply_form">
                                                <div className="file-upload">
                                                    <div className="file-select">
                                                        <div className="file-select-name" id="noFile"> {this.state.currentFile ? this.state.currentFile.name : null}</div>
                                                        <br />
                                                        <br />
                                                        <label>Name</label> &nbsp;
                                                        <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="name" component="div" className="invalid-feedback text text-danger" />
                                                        <br />
                                                        <br />
                                                        <label>Email</label> &nbsp;
                                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="email" component="div" className="invalid-feedback text text-danger" />
                                                        <br />
                                                        <br />
                                                        <label>Phone Number</label> &nbsp;
                                                        <Field name="phonenumber" type="text" className={'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')} />
                                                        <ErrorMessage name="phonenumber" component="div" className="invalid-feedback text text-danger" />
                                                    </div>
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.closeDropSection()}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }
                {/* {   this.state.isDropped &&
                    <div className="careerfy-modal fade-in careerfy-typo-wrap" id="JobSearchModalRegister">
                        <div className="modal-content-area">
                            <div className="modal-box-area">
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={this.state.candidate}
                                    onSubmit={(values, actions) => {
                                        if (values.file) {
                                            var allowedExtensions = ["pdf", "doc", "docx"];
                                            const fileExtensions = values.file.name.substr(values.file.name.lastIndexOf(".") + 1);
                                            if (allowedExtensions.indexOf(fileExtensions) == -1) {
                                                toast.error(i18n.t('Messages.InvalidFileError'));
                                                return false;
                                            }
                                        }
                                        values.description = document.getElementById("descrioption").value;
                                    }}
                                    render={({ values, handleSubmit, setFieldValue, errors, status, touched, actions }) => {
                                        return (
                                            <div>
                                                <form onSubmit={handleSubmit} className="apply_form">
                                                    <div className="file-upload">
                                                        <div className="file-select">
                                                            <div className="file-select-name" id="noFile"> {this.state.currentFile ? this.state.currentFile.name : null}</div>
                                                            <input id="file" name="file" type="file" style={{ height: '100%' }} onChange={(event) => {
                                                                this.setState({ currentFile: event.currentTarget.files[0] });
                                                                setFieldValue("file", event.currentTarget.files[0]);
                                                            }} className="form-control" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                } */}
            </Layout>
        );
    }
}

export default JobApply;