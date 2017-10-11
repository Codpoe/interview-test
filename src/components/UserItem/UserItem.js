import React, { Component } from 'react';
import './UserItem.css';

class UserItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.classList.contains('del-btn')) {
            this.props.handleDelClick(this.props.user);
            return;
        }
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const { avatar, name, sex, age } = this.props.user;
        const { active } = this.state;
        return (
            <div className={`user-item ${active ? 'user-item--active' : ''}`}>
                <div className="visible-part"
                    onClick={this.handleClick}>

                    <div className="visible-info">
                        <img className="avatar" src={avatar} title={name} />
                        <span className="name">{name}</span>
                    </div>
                    <button className="del-btn">X</button>
                </div>

                <div className="hidden-part">
                    {sex}&nbsp;&nbsp;{age}
                </div>
            </div>
        )
    }    
}

export default UserItem;