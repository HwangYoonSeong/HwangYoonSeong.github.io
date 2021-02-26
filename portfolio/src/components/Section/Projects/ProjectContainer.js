import React, { Component } from 'react';
import ProjectPresenter from './ProjectPresenter';
import semtleggun from '../../../assets/semtleggun.png';
import VuetickyNote from '../../../assets/VuetickyNote.png';

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: "셈틀꾼 공식 홈페이지",
                url: "http://sbmi.iptime.org/",
                git: "https://github.com/HwangYoonSeong/semtle-back",
                txt: "컴퓨터 공학과 학술 동아리 '셈틀꾼' 회원 전용 프로젝트 공고,게시,질문 사이트. 백앤드 담당",
                img: semtleggun
            },
            {
                id: "Vueticky Note",
                url: "https://vueticky-note-b08f1.web.app/",
                git: "https://github.com/HwangYoonSeong/VuetickyNote/tree/master/vue-note-app",
                txt: "Vue를 사용한 메모앱. 이미지 등록 시 tensorflow.js를 통한 이미지 객체 인식을 통해 자동 태그 기능 개발",
                img: VuetickyNote
            }
        ]
    }

    render () {
        const { data } = this.state;
        return (
            <ProjectPresenter data={data} />
        )
    }
}

export default ProjectContainer;