import React, { Component } from 'react'
import { Paper } from '@material-ui/core';
import phoston from '../../images/works/ishibetsu/phoston_work.jpg'
import { Route, Link } from 'react-router-dom'

import func from '../../images/works/ishibetsu/function.png'
import './works.css'

import ishi_mock from '../../images/works/ishibetsu/phoston_work.jpg'
import scp_mock from '../../images/works/scp-gacha/scpGachaThumb.png'
import aclogger_mock from '../../images/works/aclogger/aclogger_thumb.png'
import spock_logo from '../../images/works/spock/logo.png'

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
        <div className = 'workslist'>
            <WorkItem 
                title = '石別観光アプリ' 
                to = {`${match.path}/ishibetsu`}
                img = {ishi_mock}
                description = '大学の開発プロジェクトでの成果物です。函館の地元である石別の、観光活性化を目的としたプロジェクトに参加しました。'
            />
            <WorkItem 
                title = 'SCPガチャシミュレータ' 
                to = {`${match.path}/scpgacha`} 
                img = {scp_mock}
                description = '無限ガチャシミュレータ(Webアプリ)です。ガチャ欲の発散を目的に作成されました。（自分はガチャゲーをしてません）'
            />
            <WorkItem 
                title = 'ACLogger' 
                to = {`${match.path}/aclogger`} 
                img = {aclogger_mock}
                description = '各種プログラミグコンテストサイトで問題を解いて、Github風Heatmapに草を生やせるWebアプリです。精進促進を目的として作成されました。'
            />
            <WorkItem 
                title = 'Spock' 
                to = {`${match.path}/spock`} 
                img = {spock_logo}
                description = '外出先で、面白そうな店や建物を見つけたけど、今はいけない...そんな時に、このスマホアプリで写真を撮るだけで、店の情報を読み込み、ストックしておきます。友人と共にハッカソン気分で製作中です。'
            />
            <WorkItem 
                title = 'ポートフォリオサイト' 
                to = {`${match.path}/portfolio`} 
                description = ''
            />
            <WorkItem 
                title = 'Oekaki.io' 
                to = {`${match.path}/oekaki`} 
                description = ''
            />
        </div>
        
    )
}

const Works = ({match}) => {

    return(

            <div>
                <Route exact path = {`${match.path}`} component = {WorksList}></Route>
                <Route path = {`${match.path}/ishibetsu`} component = {Ishibetsu}></Route>
                <Route path = {`${match.path}/scpgacha`} component = {SCPGachaSimulator}></Route>
                <Route path = {`${match.path}/aclogger`} component = {AClogger}></Route>
                <Route path = {`${match.path}/portfolio`} component = {Portfolio}></Route>
                <Route path = {`${match.path}/spock`} component = {Spock}></Route>
                <Route path = {`${match.path}/oekaki`} component = {Oekaki}></Route>
            </div>

        )

}

export default Works