import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
// - Transition
// - CSSTransition
// - TransitionGroup

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                    <div className="boss-text">Box就发生了就- 地方</div>

                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤</button></div>
            </div>
        );
    }
}

export default Box;