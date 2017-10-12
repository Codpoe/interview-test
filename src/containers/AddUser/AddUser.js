import React, { Component } from 'react';
import { addUser } from '../../action.js';
import { connect } from 'react-redux';

import './AddUser.css';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            sex: '',
            age: '',
            avatar: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        const target = ev.target;
        var file;
        var fileReader;
        console.log(target.value);
        if (target.type === 'file') {
            fileReader = new FileReader;
            fileReader.addEventListener('load', ev => {
                this.setState({
                    avatar: ev.target.result
                });
            });
            fileReader.readAsDataURL(target.files[0]);
            return;
        }
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(ev) {
        ev.preventDefault();
        const { name, sex, age, avatar } = this.state;
        this.props.dispatch(addUser({
            name,
            sex,
            age,
            avatar
        }));
    }

    render() {
        const { name, sex, age, avatar } = this.state;

        return (
            <div className="add-user">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Name</label><br />
                        <input name="name"
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                            required />
                    </p>
                    <p>
                        <label>Age</label><br />
                        <input name="age"
                            type="number"
                            value={age}
                            onChange={this.handleChange}
                            required />
                    </p>
                    <p>
                        <label>Sex</label><br />
                        <label className="sex-radio">
                            <input name="sex"
                                type="radio"
                                value="male"
                                checked={sex === 'male'}
                                onChange={this.handleChange} />
                            Male
                        </label>
                        <label className="sex-radio">
                            <input name="sex"
                                type="radio"
                                value="female"
                                checked={sex === 'female'}
                                onChange={this.handleChange} />
                            Female
                        </label>
                    </p>
                    <p>
                        <label>Avatar</label><br />
                        <input name="avatar"
                            type="file"
                            accept="image/*"
                            onChange={this.handleChange}/>
                    </p>
                    <button className="submit-btn" type="submit">ADD USER</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddUser);