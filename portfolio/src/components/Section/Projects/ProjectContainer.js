import React, { Component } from 'react';
import ProjectPresenter from './ProjectPresenter';

import semtleggun3 from '../../../assets/semtle/semtle3.png';
import semtleggun1 from '../../../assets/semtle/semtle2.png';
import semtleggun2 from '../../../assets/semtle/semtle1.png';
import Vueticky1 from '../../../assets/vuetickynote/vueticky1.png';
import Vueticky2 from '../../../assets/vuetickynote/vueticky2.png';
import Vueticky3 from '../../../assets/vuetickynote/vueticky3.png';
import ycde1 from '../../../assets/YoucandoEAT/ycde11.png';
import ycde2 from '../../../assets/YoucandoEAT/ycde12.png';
import ycde3 from '../../../assets/YoucandoEAT/ycde13.png';
import ycde4 from '../../../assets/YoucandoEAT/ycde14.png';


class ProjectContainer extends Component {
    state = {
        projects: [
            {
                title: "셈틀꾼 공식 홈페이지",
                url: "http://sbmi.iptime.org/",
                git: "https://github.com/HwangYoonSeong/semtle-back",
                txt: "컴퓨터 공학과 학술 동아리 '셈틀꾼' 회원 전용 프로젝트 공고,게시,질문 사이트",
                period: "2020.07.04 ~ 2020.09.20",
                developers: "15명(백앤드 담당)",
                img: [semtleggun1, semtleggun2, semtleggun3],
                skills: ['Vue.js', 'Node.js', 'MongoDB']
            },
            {
                title: "Vueticky Note",
                url: "https://vueticky-note-b08f1.web.app/",
                git: "https://github.com/HwangYoonSeong/VuetickyNote/tree/master/vue-note-app",
                txt: " Vue를 사용한 메모앱. 이미지 등록 시 tensorflow.js를 통한 이미지 객체 인식을 통해 \n자동 태그 기능 개발",
                period: "2020.09.09 ~ 2020.12.07",
                developers: "2명",
                img: [Vueticky1, Vueticky2, Vueticky3],
                skills: ['Vue.js', 'Vuex', 'Firebase', 'TensorFlow.js']
            },
            {
                title: "YoucandoEAT",
                git: "https://github.com/HwangYoonSeong/You_can_do_EAT",
                txt: " OCR 및 번역 기능을 사용하여 외국인이 음식 선별 시 발생할 수 있는 언어 소통 문제를 해결하는 \n음식 정보 제공 웹앱",
                period: "2021.03.13 ~ 2021.06.27",
                developers: "2명",
                img: [ycde1, ycde2, ycde3, ycde4],
                skills: ['Vue.js', 'Vuex', 'Firebase', 'TensorFlow.js']
            }
        ]
    }

    render () {
        const { projects } = this.state;
        return (
            <ProjectPresenter projects={projects} />
        )
    }
}

export default ProjectContainer;