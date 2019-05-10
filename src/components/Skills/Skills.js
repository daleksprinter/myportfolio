import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './skills.css'

const Language = () => {
    return(

        <Paper>
                <p>技術系</p>
                <p>言語</p>
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>node.js</li>
                    <li>Python</li>
                    <li>Processing</li>
                    <li>SQL</li>
                    <li>Shell Command</li>
                </ul>

                <p>フレームワーク等</p>
                <ul>
                    <li>Monaca</li>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>React</li>
                    <li>Express</li>
                </ul>

                <p>ミドルウェア等</p>
                <ul>
                    <li>MySQL</li>
                    <li>Docker</li>
                </ul>

                <p>開発ツール等</p>
                <ul>
                    <li>Git</li>

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

                <p>エディタ</p>
                <ul>
                    <li>VSCode</li>
                    <li>SublimeText3</li>
                    <li>Emacs</li>
                </ul>

                <p>使ってみたことがある → Processing, Ruby, PHP, Swift等</p> 
                <p>学習中 → Go, Nginx</p>

        </Paper>
    )
}

const Certification = () => {
    return(
        <Paper>
            <p>資格等</p>
            <ul>
                <li>TOEIC 825点（2018年3月11日　取得）</li>
                <li>普通自動車運転免許（2015年3月　取得)</li>
            </ul>                
        </Paper>
    )
}

class Skills extends Component{

    render(){
        return(
            <div　className = 'item'>
                <Language />
                <Certification />
            </div>

        )
    }
}

export default Skills