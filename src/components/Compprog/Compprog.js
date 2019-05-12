import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import atcoder from '../../images/competitiveprogramming/atcoder.png'
import codeforces from '../../images/competitiveprogramming/codeforces.png'
import paizarank from '../../images/competitiveprogramming/paizaRank.png'
import './compprog.css'

const AtCoder = () => {
    return (
        <Paper className = 'elm'>

            <h4>AtCoder</h4>
            <p>最高レート : 1400</p>

            <img src = {atcoder} className = 'thumbnail'></img>

            <p>リンク</p>
            <a href = 'https://atcoder.jp/users/daleksprinter'>AtCoder</a><br></br>
            <a href = 'https://kenkoooo.com/atcoder/#/table/daleksprinter'>AtCoderProblems</a>

        </Paper>
    )
}

const Codeforces = () => {
    return(
        <Paper className = 'elm'>

            <h4>Codeforces</h4>
            <p>最高レート : 1600</p>

            <img src = {codeforces} className = 'thumbnail'></img>

            <p>リンク</p>
            <a href = 'https://codeforces.com/profile/b1015120'>Codeforces</a><br></br>
            <a href = 'https://yang33-kassa.jp/Codeforces-Problems/?user=b1015120'>Codeforces Problems</a>
        </Paper>
    )
}

const Other = () => {
    return(
        <Paper className = 'elm'>
            <h4>その他</h4>
            <div>未来大学競技プログラミングサークル FunCoder　所属</div>
            <div>ICPC2019国内予選　参加予定</div>
            <div>Paiza Sランク</div>
            <img src = {paizarank} className = 'paizaRank'></img><br />
            <a href = 'https://dalekspritner.hatenablog.com/'>競技プログラミング覚書ブログ</a>
        </Paper>
    )
}

class Compprog extends Component{

    render(){
        return(
            <div　className = 'item'>
                <AtCoder />
                <Codeforces />
                <Other />
            </div>
        )
    }
}

export default Compprog