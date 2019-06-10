import React, { Component } from 'react'
import { Paper, Button} from '@material-ui/core';
import phoston from '../../images/works/ishibetsu/phoston_work.jpg'
import { Route, Link } from 'react-router-dom'

import func from '../../images/works/ishibetsu/function.png'
import ishi_mock from '../../images/works/ishibetsu/phoston_work.jpg'
import qucode from '../../images/works/ishibetsu/qrcode.png'
import scp_mock from '../../images/works/scp-gacha/scpGachaThumb.png'
import aclogger_mock from '../../images/works/aclogger/aclogger_thumb.png'
import spock_logo from '../../images/works/spock/logo.png'
import portfolio_mock from '../../images/works/portfolio/portfolio_mock.png'
import aclogger_logo from '../../images/works/aclogger/aclogger_logo.png'
import aclogger_tweet from '../../images/works/aclogger/tweet.png'
import twitter_inf_like_demo from '../../images/works/twitter-infinity-like/twitter-infinity-like-demo.gif'
import chat_mock from '../../images/works/realtimechat/realtimechatmock.png'
import spock_image from '../../images/works/spock/page_views.png'

import WorkItem from './WorkItem'

const thumbnail = {
    'width' : '100%',
}

const workview = {
    'padding':'1%',
    'margin':'1%',
}

const BackButton = () => {

    const backbutton = {
        'margin' : '2%',
    }

    return(
        <div style = {backbutton}>
            <Button variant="contained">
                <Link to = './'>←Back</Link>
            </Button>   
        </div>
    )
}

const Ishibetsu = () => {
    const qr = {
        'width':'30%',
    }
    return(
        <div>
            <Paper style = {workview}>
                    <img src = {phoston} style = {thumbnail}></img>
                    <h2>石別観光アプリ</h2>
                    
                    <h3>背景</h3>
                    <div>大学の開発プロジェクトでの成果物です。</div>
                    <div>函館の地元である石別の、観光活性化を目的としたプロジェクトに参加しました。</div>
                    <div>要件定義やチームコミュニケーションなどの点で、多くの失敗と学びを経験しました。</div>   

                    <h3>主要機能等</h3>
                    <img src = {func} style = {thumbnail}></img>

                    <h3>インストール</h3>
                    <img src = {qucode} style = {qr}></img>
                    <div>上記QRCodeを読み込むことで、Android版のアプリをダウンロードすることが可能です。</div>
                    <div>注意</div>
                    <ul>
                        <li>ハイブリッドアプリではありますが、デバッグ環境としてiOS9(iPhone6s)をメインで使用していたため、UIなど正常に動作しない可能性があります。</li>
                        <li>サーバが動作していないタイミングがある可能性があります。</li>
                        <li>MapAPI等、古くなって使用できなくなっている場合があります。</li>
                    </ul>


                    <h3>関連リンク</h3>
                    <a href = 'http://www.fun.ac.jp/~sisp/old_report/2017/02/poster02_A.pdf'>発表用ポスター</a><br></br>
                    <a href = 'https://digital.hakoshin.jp/date/2018-03-04/31816'>新聞記事</a>


                    <h3>使用技術</h3>
                    <ul>
                        <li>Cordova</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>OnsenUI</li>
                        <li>MySQL</li>
                        <li>PHP</li>
                    </ul>
                    <p>サーバ移行後</p>
                    <ul>
                        <li>MySQL</li>
                        <li>Docker</li>
                        <li>Flask</li>
                        <li>uWSGI</li>
                        <li>Nginx</li>
                    </ul>

                    
            </Paper>
            <BackButton />
        </div>
    )
}

const RealtimeChat = () => {
    return (
        <div>
            <Paper style = {workview}>
                <img src = {chat_mock} style = {thumbnail}></img>
                <h2>RealTime Chat</h2>

                <h3>背景</h3>
                <div>Ruby on Railsの練習</div>

                <p3>主要機能等</p3>
                <h2>Demo</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eWZt8fQM4uo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ul>
                    <li>ログイン周り</li>
                    <li>チャット機能（送信のみ）</li>
                    <li>ルーム機能</li>
                </ul>

                <h3>使用技術</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>Ruby on Rails</li>
                    <li>Devise</li>
                    <li>ActionCable</li>
                </ul>
            </Paper>
        </div>
    )
}

const SCPGachaSimulator = () => {
    return(
        <div>
            <Paper style = {workview}>
                <img src = {scp_mock} style = {thumbnail}></img>
                <h2>SCPガチャシミューレータ</h2>

                <a href = 'https://scp-gacha-simulator.herokuapp.com/'>Link</a><br></br>

                <h3>背景</h3>
                <div>Djangoを使ってみたかった+無限ガチャができる何かを作ってみたかった</div>
                <div>ガチャのアイテムとしてSCPを使っています。(SCPについては、アプリ内に説明リンク等があります）</div>
                
                <h3>主要機能等</h3>
                <h4>Demo</h4>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8jKdyq9Neyk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ul>
                    <li>ログイン機能</li>
                    <li>ガチャ機能</li>
                    <li>ポイントチャージ機能（無料）（課金した気持ちになりたい）</li>
                </ul>
                <h4>今後追加したい要素</h4>
                <ul>
                    <li>ガチャ演出</li>
                    <li>得られたアイテムでなにかできる</li>
                </ul>

                <h3>使用技術</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>Django</li>
                    <li>AWS S3</li>
                    <li>heroku</li>
                    <li>virtualenv</li>
                </ul>
            </Paper>
            <BackButton />

        </div>
    )
}

const AClogger = () => {

    const tweet = {
        'border':'solid 1px rgb(173, 173, 173)',
        'width':'50%',
    }

    return(
        <div>
            <Paper style = {workview}>
                <img src = {aclogger_mock} style = {thumbnail}></img>
                <h2>ACLogger</h2>
                <a href = 'https://aclogger.herokuapp.com/'>ACLogger</a>
                <h3>背景</h3>
                <div>個人開発でReactを使ってみたかった+各種コンテストサイトでの精進を一目で確認できるツールが欲しかった</div>

                <img src = {aclogger_tweet} style = {tweet}></img>
                
                <h3>主要機能</h3>

                <h2>Demo</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XiahiXWeMHA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>各サイトでのIDを入力すると、Github風のACヒートマップ、合計AC数、解いた問題を一覧（時系列順）</div>
                <div>(アカウントをお持ちでない方は、僕のAtCoderID(daleksprinter)をAtCoderの欄に入力してみてください。)</div>
                <div>過去に解いた問題リストの要素をクリックすると、その提出に飛べる</div>
                <div>今日解いた問題をツイートすることができる</div>
                <div>対応サイト : AtCoder, Codeforces, yukicoder, AizuOnlineJudge</div>

                <h3>使用技術</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React-bootstrap</li>
                    <li>Heroku</li>
                </ul>

            </Paper>
            <BackButton />
        </div>
    )
}

const Spock = () => {
    return(
        <div>
            <Paper style = {workview}>
                    <img src = {spock_logo} style = {thumbnail}></img>
                    <h2>Spock（製作中）</h2>
                    
                    <h3>背景</h3>
                    <div>友人とGWにハッカソン的なことをしようという話になり、製作されました。</div>
                    <div>「お出かけ」をテーマにしました。</div>
                    <div>外出先で見つけたお店などについてすぐ情報を得られ、ストックできるようにということを目標としました。</div>   
                    <div>自分の担当はサーバサイド です。APIの実装を行なっています。</div>

                    <h3>主要機能等</h3>
                    <img src = {spock_image} style = {thumbnail}></img>
                    <ul>
                        <li>ユーザの追加</li>
                        <li>写真を撮るとその建物のデータを取得する（実装中）</li>
                        <li>撮った写真、取得したデータ、追加メモ等、スポットデータのCRUD</li>
                    </ul>

                    <h3>担当</h3>
                    <div>Flaskを利用したAPIの作成を行いました。ユーザやデータのCRUD部分の実装を行いました。</div>
                    <div>デプロイはAWS EC2 + Docker + uWSGI + Nginxの構成です。</div>

                    <h3>使用技術</h3>
                    <ul>
                        <li>Swift(他メンバー担当）</li>
                        <li>Flask</li>
                        <li>AWS S3</li>
                        <li>AWS EC2</li>
                        <li>MySQL</li>
                        <li>Docker</li>
                    </ul>
            </Paper>
            <BackButton />
        </div>
    )
}

const TwitterInfinityLike = () => {
    return (
        <div>
            <Paper style = {workview}>
                <h2>Twitter無限いいね押したったー（製作中）</h2>
                <h2>背景</h2>
                <div>Twitterで一度しかいいねできないことに不満がある人がいることに気づき、サードパーティで解消したいと思った。</div>

                <h2>主要機能等</h2>
                <h3>Demo</h3>
                <img src = {twitter_inf_like_demo}></img>

                <h3>今後の更新予定</h3>
                <ul>
                        <li>Tweet詳細をもっとおしゃれに</li>
                        <li>ボタンUIをもっとリッチに</li>
                        <li>ユーザ機能</li>
                        <li>いいね回数をツイート＆ツイート元を引用したり</li>
                </ul>

                <h3>使用技術</h3>
                    <ul>
                        <li>Ruby on Rails 5</li>
                        <li>Twitter Ruby Gem(Twitter API)</li>
                    </ul>
            </Paper>
        </div>
    )
}


const Portfolio = () => {
    return(
        <div>
            <Paper style = {workview}>
                <img src = {portfolio_mock} style = {thumbnail}></img>
                <h2>Portfolio</h2>
                <p>このサイトです</p>
                
                <h3>背景</h3>
                <div>就活等で自分を知っていただくために作成しました。</div>

                <h3>使用技術</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React, Router</li>
                    <li>Material-UI</li>
                </ul>

                <div>随時更新中です。</div>

            </Paper>
            <BackButton />
        </div>
    )
}



const Oekaki = () => {
    return(
        <div>
            <Paper style = {workview}>
                <p>in preparation...</p>
            </Paper>
            <BackButton />
        </div>
    )

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
                title = 'RealTimeChat' 
                to = {`${match.path}/chat`} 
                img = {chat_mock}
                description = 'Ruby on Railsの練習がてら作成したリアルタイムチャットアプリです。4日ほど集中して作成しました。'
            />
            <WorkItem 
                title = 'SCPガチャシミュレータ' 
                to = {`${match.path}/scpgacha`} 
                img = {scp_mock}
                description = '無限ガチャシミュレータ(Webアプリ)です。ガチャ欲の発散を目的に作成されました。'
            />
            <WorkItem 
                title = 'ACLogger' 
                to = {`${match.path}/aclogger`} 
                img = {aclogger_logo}
                description = '各種プログラミグコンテストサイトで問題を解いて、Github風Heatmapに草を生やせるWebアプリです。精進促進を目的として作成されました。'
            />
            <WorkItem 
                title = 'Spock' 
                to = {`${match.path}/spock`} 
                img = {spock_logo}
                description = '外出先で、面白そうな店や建物を見つけたけど、今はいけない...そんな時に、このスマホアプリで写真を撮るだけで、店の情報を読み込み、ストックしておきます。友人と共にハッカソン気分で製作中です。'
            />
            <WorkItem
                title = 'Twitter無限いいねおしたったー'
                to = {`${match.path}/twitter-like`}
                description = 'Tweetのいいねを１度しか押せないことに不満がある人のために作成しています。'
            />
            <WorkItem 
                title = 'ポートフォリオサイト' 
                to = {`${match.path}/portfolio`}
                img = {portfolio_mock} 
                description = 'このサイトです。僕について知っていただくために作成されました。'
            />
            <WorkItem 
                title = 'Oekaki.io' 
                to = {`${match.path}/oekaki`} 
                description = 'in preparation'
            />
            
            
        </div>
    )
}


const Works = ({match}) => {

    const style = {
        'margin':'auto',
        'width' : '60%',
    }

    return(

            <div style = {style}>
                <Route exact path = {`${match.path}`} component = {WorksList}></Route>
                <Route path = {`${match.path}/ishibetsu`} component = {Ishibetsu}></Route>
                <Route path = {`${match.path}/scpgacha`} component = {SCPGachaSimulator}></Route>
                <Route path = {`${match.path}/aclogger`} component = {AClogger}></Route>
                <Route path = {`${match.path}/portfolio`} component = {Portfolio}></Route>
                <Route path = {`${match.path}/twitter-like`} component = {TwitterInfinityLike}></Route>
                <Route path = {`${match.path}/spock`} component = {Spock}></Route>
                <Route path = {`${match.path}/oekaki`} component = {Oekaki}></Route>
                <Route path = {`${match.path}/chat`} component = {RealtimeChat}></Route>
            </div>

        )

}

export default Works