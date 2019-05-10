import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import phoston from '../../images/works/ishibetsu/phoston_work.jpg'
import { Route, Link } from 'react-router-dom'

import func from '../../images/works/ishibetsu/function.png'
import './works.css'

import WorkItem from './WorkItem'
const Ishibetsu = () => {
    return(
        <Paper className = 'content'>
                <img src = {phoston} className = 'thumbnail'></img>
                <h2>石別観光アプリ</h2>
                
                <h3>背景</h3>
                <div>大学の開発プロジェクトでの成果物です。</div>
                <div>函館の地元である石別の、観光活性化を目的としたプロジェクトに参加しました。</div>
                <div>要件定義やチームコミュニケーションなどの点で、多くの失敗と学びを経験しました。</div>   

                <h3>主要機能等</h3>
                <img src = {func} className = 'func'></img>

                <h3>関連リンク</h3>
                <a href = 'http://www.fun.ac.jp/~sisp/old_report/2017/02/poster02_A.pdf'>発表用ポスター</a><br></br>
                <a href = 'https://digital.hakoshin.jp/date/2018-03-04/31816'>新聞記事</a>

                <h3>使用技術</h3>
                <div>クライアントサイド</div>
                <ul>
                    <li>Monaca(HTML5ハイブリッドアプリ開発プラットフォーム</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>OnsenUI</li>
                </ul>
                <div>サーバサイド</div>
                <ul>
                    <li>MySQL</li>
                    <li>PHP</li>
                </ul>
            </Paper>
    )
}

const SCPGachaSimulator = () => {

}

const AClogger = () => {

}

const Spock = () => {

}

const Portfolio = () => {

}

const Oekaki = () => {

}


const WorksList = ({match}) => {
    return(
        <div>
            <WorkItem 
                title = '石別観光アプリ' 
                to = {`${match.path}/ishibetsu`}
                description = '詳細'
            />
            <WorkItem title = 'SCPガチャシミュレータ' to = {`${match.path}/scpgacha`} />
            <WorkItem title = 'AClogger' to = {`${match.path}/aclogger`} />
            <WorkItem title = 'Spock' to = {`${match.path}/spock`} />
            <WorkItem title = 'ポートフォリオサイト' to = {`${match.path}/portfolio`} />
            <WorkItem title = 'Oekaki.io' to = {`${match.path}/oekaki`} />
        </div>
        
    )
}

const Works = ({match}) => {

    return(

            <div>
                <Route exact path = {`${match.path}`} component = {WorksList}></Route>
                <Route path = {`${match.path}/ishibetsu`} component = {Ishibetsu}></Route>
            </div>

        )

}

export default Works