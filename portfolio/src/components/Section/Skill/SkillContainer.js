import React, { Component } from 'react';
import SkillPresenter from './SkillPresenter';
import REACTIMG from '../../../assets/skill/react.png';
import VUEIMG from '../../../assets/skill/vue.png';
import GITIMG from '../../../assets/skill/github.png';
import HTMLIMG from '../../../assets/skill/html.png';
import CSSIMG from '../../../assets/skill/css.png';
import JSIMG from '../../../assets/skill/js.png';

class SkillContainer extends Component {
    state = {
        skills: [
            {
                skill: "HTML",
                img: HTMLIMG,

            },
            {
                skill: "CSS",
                img: CSSIMG,

            },
            {
                skill: "Javascript",
                img: JSIMG,

            },
            {
                skill: "React.js",
                img: REACTIMG,

            },
            {
                skill: "Vue.js",
                img: VUEIMG,

            },
            {
                skill: "Git",
                img: GITIMG,

            },
        ],
        slideCounter: 0
    }

    increaseCounter = () => {
        const { slideCounter, data } = this.state;
        slideCounter === data.length - 1 ?
            this.setState({
                slideCounter: 0,
            }) :
            this.setState({
                slideCounter: slideCounter + 1,
            })
    }

    decreaseCounter = () => {
        const { slideCounter, data } = this.state;
        slideCounter === 0 ?
            this.setState({
                slideCounter: data.length - 1
            }) :
            this.setState({
                slideCounter: slideCounter - 1,
            })
    }

    render () {
        const { skills, slideCounter } = this.state;
        return (
            <SkillPresenter
                skills={skills}
                slideCounter={slideCounter}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
            />
        )
    }
}

export default SkillContainer;