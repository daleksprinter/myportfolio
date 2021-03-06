import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

const PreferredJob = () => {
    return(
        <Paper className = 'elm'>
            <h4>希望職</h4>
            <p>現在はWeb系のサーバサイドの専門になりたいと考えています。</p>
            <p>競技プログラミング等での経験を経て、ロジカルな実装で処理を高速化することに興味を持つようになりました。</p>
        </Paper>
    )
}

const Hobby = () => {
    return(
        <Paper className = 'elm'>
            <h4>趣味</h4>
            <ul>
                <li>Youtube（英語の技術系動画を見たりします）</li>
                <li>競技プログラミング</li>
                <li>タイピング（そんなに早くないです。調子いい時で7types/sec）</li>
                <li>英語</li>
            </ul>
        </Paper>
    )
}

const Intern = () => {
    return(
        <Paper className = 'elm'>
            <h4>インターン</h4>
            <ul>
                <li>株式会社ソリューションアンドテクノロジー 技術職インターン ２週間(2017/08/21~2017/09/02)</li>
                <li>Voyage Group Treasure ３週間(2019/08/12~2019/08/30）</li>
                <li>DMM.com DMM GUILD (2019/09/03~ 予定）</li>
                <li>楽天株式会社 就業型インターン (2019/09/24~ 予定）</li>
            </ul>

            <h4>その他</h4>
            <ul>
                <li>ICPC2019国内予選　参加</li>
                <li>タピオカ駆動開発ハッカソン　タピッカソン　参加</li>
            </ul>

        </Paper>
    )
}

const Msg = () => {
    return(
        <Paper className = 'elm'>
            <h4>ひとこと</h4>
            <div>まだまだ伸び代だらけの身ではありますが、技術の勉強や話をするのが好きなので、同じ思いを持つ仲間と働きたいと考えています。</div>
        </Paper>
    )
}

class Aboutme extends Component{

    render(){
        return(

                <div className = 'item'>    
                    <Hobby />
                    <Intern />
                    <PreferredJob />
                    <Msg />
                </div>

        )
    }
}

export default Aboutme