import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import TextField from './TextField';
import SelectField from './SelectField';
import {observer} from "mobx-react";

@observer
export default class AgentsModal extends React.Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.onModalChange = this.onModalChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    close() {
        this.props.store.showModal = false;
        this.props.store.clear();
    }

    open() {
        this.props.store.isEdit = false;
        this.props.store.showModal = true;
        this.props.store.clear();

    }

    onModalChange(id, value) {
        this.props.store.developer[id] = value;
    }

    handleSave(event) {
        var saveType = "new";
        if (this.props.store.isEdit)
            saveType = "edit";
        var dev = Object.assign({}, this.props.store.developer);
        this.props.onClick(dev, saveType, this.props.store.previousPlace);
        this.close();
    }

    handleDelete(event) {
        var dev = Object.assign({}, this.props.store.developer);
        this.props.onClick(dev, "remove");
        this.close();
    }

    render() {
        const developer = this.props.store.developer;
        const showModal = this.props.store.showModal;
        const isEdit = this.props.store.isEdit;

        return (
            <div className="form-group form-group-sm">
                <div className="col-xs-offset-5">
                    <Button bsStyle="primary" bsSize="large" onClick={this.open}>
                        Add Developer
                    </Button>

                    <Modal show={showModal} onHide={this.close} bsSize="large">
                        <Modal.Header closeButton>
                            <Modal.Title>Manage Developer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="container-fluid">
                                <div className="form-horizontal">
                                    {isEdit && <div className="form-group form-group-sm row">
                                        <TextField field="place" label="Place" type="number" value={developer.place} onChange={this.onModalChange}/>
                                    </div>
}
                                    <div className="form-group form-group-sm row">
                                        <TextField field="first_name" label="First Name" type="text" value={developer.first_name} onChange={this.onModalChange}/>
                                    </div>
                                    <div className="form-group form-group-sm row">
                                        <TextField field="middle_name" label="Middle Name" type="text" value={developer.middle_name} onChange={this.onModalChange}/>
                                    </div>
                                    <div className="form-group form-group-sm row">
                                        <TextField field="last_name" label="Last Name" type="text" value={developer.last_name} onChange={this.onModalChange}/>
                                    </div>
                                    <div className="form-group form-group-sm row">
                                        <TextField field="email" label="Email" type="text" value={developer.email} onChange={this.onModalChange}/>
                                    </div>
                                    
                                    <div className="form-group form-group-sm row">
                                        <TextField field="affiliations" label="Affiliations" type="text" value={developer.affiliations} onChange={this.onModalChange}/>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                            {isEdit && <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
}
                            <Button bsStyle="primary" onClick={this.handleSave}>Save and close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
