import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import hoge from '../../images/face.JPG'
import './aboutme.css'

class Aboutme extends Component{

    render(){
        return(
            <div className = 'aboutme'>    
                <Paper className = 'aboutFundamental'>
                    <img src = {hoge} className = 'face'></img>
                    <ul>
                        <li>Name : 関根 遼</li>
                        <li>Gender : 男</li>
                        <li>Age : 22</li>
                        <li>From : 北海道</li>
                        <li>Condition : とても健康（やや運動不足）</li>
                        <li>Belongs : 公立はこだて未来大学大学院　情報アーキテクチャ領域</li>
                        <li>Grade : 修士1年 </li>
                    </ul>
                </Paper>

                <Paper className = 'aboutHobby'>
                    <h3>Hobby</h3>
                    <ul>
                        <li>Youtube（英語の技術系動画を見たりします）</li>
                        <li>競技プログラミング</li>
                        <li>タイピング（そんなに早くない。調子いい時で7types/sec）</li>
                        <li>英語</li>
                    </ul>
                </Paper>
            </div>

        )
    }
}

export default Aboutme