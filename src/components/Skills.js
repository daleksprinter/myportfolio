import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

class Skills extends Component{

    render(){
        return(
            <div>
                <Paper className = 'skillsLanguage'>
                    <p>技術系</p>
                    <p>言語</p>
                    <ul>
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Processing</li>
                        <li>SQL</li>
                    </ul>
                    <p>使ってみたことがある程度 → Processing, Ruby, PHP等</p> 
                    <p>学習中 → Go</p>

                    <p>フレームワーク等</p>
                    <ul>
                        <li>Monaca</li>
                        <li>Django</li>
                        <li>React</li>
                    </ul>

                    <p>ミドルウェア等</p>
                    <ul>
                        <li>MySQL</li>
                        <li>Docker</li>
                    </ul>
                    
                    <p>クラウド</p>
                    <ul>
                        <li>AWS</li>
                        <li>Heroku</li>
                    </ul>

                    <p>OS</p>
                    <ul>
                        <li>Mac</li>
                        <li>CentOS</li>
                    </ul>



                </Paper>
                <Paper className = 'skillsCertification'>
                    <p>資格等</p>
                    <ul>
                        <li>TOEIC 825点（2018年3月11日　取得）</li>
                        <li>普通自動車運転免許（2015年3月　取得)</li>
                    </ul>
                    
                </Paper>
            </div>

        )
    }
}

export default Skills