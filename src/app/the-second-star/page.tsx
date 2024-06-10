import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "./Notes";
import Performers from "../../components/Performers";
import Jumbotron from "../../components/Jumbotron";
import { Metadata } from "next";
import hashizumeImage from "../../components/assets/_hashizume.png";
import tsukaTImage from "../../components/assets/tsuka-t.png";
import ogImage from "../../components/assets/ogImage.png";

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The second star 〜",
  openGraph: {
    title: "Twinkle Live 〜 The second star 〜",
    siteName: "Twinkle Live 〜 The second star 〜",
    type: "website",
    description: "ライブチケットのお申し込みはこちらから",
    url: "https://twinkle-live.info/the-second-star",
    images: ogImage.src,
  },
  twitter: {
    card: "summary_large_image",
    site: "@kuma_ga_suki",
  },
};

function Home() {
  const hashizumeDescriptions = [
    "声優・ナレーター",
    "株式会社プロダクション・エコー所属",
    "茨城県土浦市出身",
    "",
    "好きなものは、クマとビール。",
    "最近は、コーヒーの飲み比べにはまっている。",
    "前回のワンマンライブを皮切りに、地元を中心としたライブ活動に意欲をみせている。",
    "",
    "代表作は、「アバローのプリンセス エレナ(エレナ役)」、「スーパーキティ(ジニー)」、「しゅつどう！パジャマスク パワーヒーロー(アイバン役)」など。",
    "ディズニー最新映画『ウィッシュ』にも出演。",
  ];

  const tsukaTDescriptions = [
    "元教員系ミュージシャン",
    "教員を早期退職し、つかTメロディアトリエを2018年に設立。",
    "「音楽で生活に潤いをもたらし、地域活性を目指す」音楽家。",
    "",
    "POPSをメインにロックからJAZZ、シャンソンまで幅広いジャンルをこなし、対応力と歌い手に寄り添った演奏には定評がある。",
    "茨城県内を中心に近隣県、都内でも音楽ライブ、各種レッスン、作曲編曲、CD製作、セッションホスト、ラジオキャスターなどで活躍中。",
    "近年は、学校での家庭教育学級における演奏など、教員時代のスキルを活かした取り組みもしている。",
    "",
    "Rolandバンドパラダイス全国大会、東京03賞受賞",
    "日経大人のバンドコンテスト東京大会 準グランプリ",
    "東京ディズニーランドイベントに２年連続ゲスト出演",
    "フォークガラスクエア全国大会出場",
    "かすみがうら化粧品、魔女のフェスタなど、企業やイベントのイメージソングを作成するなど活躍中。",
  ];

  const date = (
    <>
      <p>2024年7月21日(日)</p>
      <p>① 13:30 開演 (13:00 開場)</p>
      <p>② 16:30 開演 (16:00 開場)</p>
      <p>※ 各回休憩なし、約1時間の公演予定です。</p>
    </>
  );

  const ticket = (
    <>
      <p>大人(高校生以上)　2,500円(ドリンク付き)</p>
      <p>小中学生　1,000円(ドリンク無し)</p>
      <p>未就学児　無料(ドリンク無し)</p>
      <p>※ 全席自由席</p>
      <p>※ 駐車場 1台あたり300円</p>
    </>
  );

  const place = (
    <>
      <p>BEK Lab(ベクラボ)</p>
      <p>茨城県つくば市金田88番地</p>
      <p>Tel: 029-857-2798</p>
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://maps.app.goo.gl/mAXykC42BYQ7Jngv8"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <ul style={{ listStyle: "unset", paddingLeft: "22px" }}>
        <li>お支払いは当日、現金にてお願いいたします。</li>
        <li>中学生までのお子さまは、お飲みものをご持参ください。</li>
        <li>会場入口にてお履き物を脱いでいただきます。</li>
        <li>
          敷地裏側に、駐車場(約20台)がございます。ご利用の方は、チケットのお申し込みの際に合わせてご予約ください。当日はスタッフが誘導いたします。
        </li>
      </ul>
    </>
  );
  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="Twinkle Live" subtitle="~ The Second Star ~" />
      <div className="p-0 text-slate-700 font-body">
        <About />
        <Performers
          hashizumeImage={hashizumeImage}
          hashizumeDescriptions={hashizumeDescriptions}
          tsukaTDescriptions={tsukaTDescriptions}
          tsukaTImage={tsukaTImage}
        />
        <Detail
          title="Twinkle Live 〜 The second star 〜"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
        />
        {/* <Notes /> */}
        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSc0h6DyNm8RCfUJE2PZ0VYRV43948NazpyHtUTG1oOo1SDiKA/viewform?usp=pp_url&entry.1854919750=0%E6%9E%9A&entry.619944004=0%E6%9E%9A&entry.610874221=0%E6%9E%9A&entry.464172043=0%E6%9E%9A&entry.614062799=0%E6%9E%9A&entry.535492929=0%E6%9E%9A&entry.210897633=0%E5%8F%B0&entry.2032250707=0%E5%8F%B0"
          }
        />
      </div>
    </>
  );
}

export default Home;
