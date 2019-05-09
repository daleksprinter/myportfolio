import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import atcoder from '../../images/competitiveprogramming/atcoder.png'
import codeforces from '../../images/competitiveprogramming/codeforces.png'
import './compprog.css'

const AtCoder = () => {
    return (
        <Paper className = 'compProgAtcoder'>

            <h3>AtCoder</h3>
            <p>最高レート : 1400</p>

            <img src = {atcoder} className = 'atcoderRate'></img>

            <p>リンク</p>
            <a href = 'https://atcoder.jp/users/daleksprinter'>AtCoder</a><br></br>
            <a href = 'https://kenkoooo.com/atcoder/#/table/daleksprinter'>AtCoderProblems</a>

        </Paper>
    )
}

const Codeforces = () => {
    return(
        <Paper className = 'compProgCodeforces'>

            <h3>Codeforces</h3>
            <p>最高レート : 1600</p>

            <img src = {codeforces} className = 'codeforcesRate'></img>

            <p>リンク</p>
            <a href = 'https://codeforces.com/profile/b1015120'>Codeforces</a>
        </Paper>
    )
}

const Other = () => {
    return(
        <Paper className = 'compProgOther'>
            <h3>その他</h3>
            <div>未来大学競技プログラミングサークル FunCoder　所属</div>
            <div>ICPC2019国内予選　参加予定</div>
            <div>Paiza Sランク</div>
            <a href = 'https://dalekspritner.hatenablog.com/'>競技プログラミング覚書ブログ</a>
        </Paper>
    )
}

class Compprog extends Component{

    render(){
        return(
            <div>
                <AtCoder />
                <Codeforces />
                <Other />
            </div>
        )
    }
}

export default Compprog