import React, { Component } from 'react'
import classNames from 'classnames'
import Paper from '@material-ui/core/Paper';
import hoge from '../../images/profiles/face.JPG'
import './aboutme.css'

const Fundamental = () => {
    return(
        <Paper className = 'elm'>
            <img src = {hoge} className = 'avater'></img>
            <ul>
                <li>Name : 関根 遼</li>
                <li>Gender : 男</li>
                <li>Age : 22</li>
                <li>From : 北海道</li>
                <li>Condition : とても健康（やや運動不足）</li>
                <li>Belongs : 公立はこだて未来大学大学院　</li>
                <li>Department : 情報アーキテクチャ領域</li>
                <li>Grade : 修士1年 </li>
            </ul>
        </Paper>
    )
}

const PreferredJob = () => {
    return(
        <Paper className = 'elm'>
            <p>希望職</p>
            <p>現在はWeb系のサーバサイドの専門になりたいと考えています。</p>
            <p>競技プログラミング等での経験を経て、ロジカルな実装で処理を高速化することに興味を持つようになりました。</p>
        </Paper>
    )
}

const Hobby = () => {
    return(
        <Paper className = 'elm'>
            <p>趣味</p>
            <ul>
                <li>Youtube（英語の技術系動画を見たりします）</li>
                <li>競技プログラミング</li>
                <li>タイピング（そんなに早くない。調子いい時で7types/sec）</li>
                <li>英語</li>
            </ul>
        </Paper>
    )
}

const Intern = () => {
    return(
        <Paper className = 'elm'>
            <p>インターン</p>
            <ul>
                <li>株式会社ソリューションアンドテクノロジー 技術職インターン ２週間</li>
            </ul>
            <p>今年夏に３社程度参加したいと思っています。</p>
        </Paper>
    )
}

const Msg = () => {
    return(
        <Paper className = 'elm'>
            <p>ひとこと</p>
            <div>まだまだ伸び代だらけの身ではありますが、技術の勉強や話をするのが好きなので、同じ思いを持つ仲間と働きたいと考えています。</div>
        </Paper>
    )
}

class Aboutme extends Component{

    render(){
        return(
            <div className = 'item'>    
                
                <Fundamental />
                <PreferredJob />
                <Hobby />
                <Intern />
                <Msg />

            </div>

        )
    }
}

export default Aboutme