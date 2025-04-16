import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "@/components/Notes";
import Performers from "../../components/Performers";
import Jumbotron from "../../components/Jumbotron";
import { Metadata } from "next";
import hashizumeImage from "../../components/assets/_hashizume.jpg";
import tsukaTImage from "../../components/assets/_tsuka-t.jpg";

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The sixth star 〜",
  openGraph: {
    title: "Twinkle Live 〜 The sixth star 〜",
    siteName: "Twinkle Live 〜 The sixth star 〜",
    type: "website",
    description: "ライブチケットのお申し込みはこちらから",
    url: "https://twinkle-live.info/the-sixth-star",
    images: "https://twinkle-live.info/assets/ogImage.png",
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
    "今年のワンマンライブを皮切りに、地元を中心としたライブ活動に意欲をみせている。",
    "",
    "代表作は、「アバローのプリンセス エレナ(エレナ役)」、「スーパーキティ(ジニー)」、「しゅつどう！パジャマスク パワーヒーロー(アイバン役)」など。",
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
      <p className="pb-1">2024年12月22日(日)</p>
      <p>【1回目】13:00開場 13:30開演</p>
      <p>【2回目】16:00開場 16:30開演</p>
      <p>※ 休憩あり80分を予定</p>
    </>
  );

  const ticket = (
    <>
      <p>大人　3,000円 (1ドリンク・橋爪サンタからのプチギフト付き)</p>
      <p>中・高校生　1,000円 (ドリンクなし・プチギフト付き)</p>
      <p>小学生以下　無料 (ドリンクなし・プチギフト付き)</p>
    </>
  );

  const place = (
    <>
      <p>ギャラリーNOBO</p>
      <p>茨城県土浦市東崎町８−１６</p>
      <p>(JR常磐線土浦駅より徒歩10分)</p>
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://www.google.com/maps/place/%E3%82%AE%E3%83%A3%E3%83%A9%E3%83%AA%E3%83%BC%EF%BC%AE%EF%BC%AF%EF%BC%A2%EF%BC%AF/@36.0834893,140.2051812,17z/data=!3m1!4b1!4m6!3m5!1s0x602212cb401b9967:0xd90095c837c054cc!8m2!3d36.0834893!4d140.2077561!16s%2Fg%2F1tdxw3st?entry=ttu"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <p>・各回、お席に限りがございます。お早めのご予約をお願いいたします</p>
      <p>・チケット料金は、当日受付にて現金支払いとなります</p>
      <p>・お車でお越しの際は、お店の前の駐車場(約30台)をご利用ください</p>
      <p>
        ・会場入り口にてスリッパに履き替えていただきます。スリッパはお持ちいただくか、会場のものをご利用ください
      </p>
      <p>
        ・未就学児もご来場いただけます。会場内に和室がございますので、そちらもご利用ください
      </p>
    </>
  );

  const impotantNote = (
    <div className="text-left md:text-center">
      <p>2回目の公演開始時刻に誤りがございました。</p>
      <br />
      <p>正しくは、以下の通りです。</p>
      <p>1回目：13:30</p>
      <p>2回目：16:30</p>
      <p>※ 開場は各開演の30分前</p>
      <br />
      <p>お間違えのないよう、お越しください。</p>
    </div>
  );

  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="Twinkle Live" subtitle="~ The Sixth Star ~" />
      <div className="p-0 text-slate-700 font-body">
        {/* <About />
        <Performers
          hashizumeImage={hashizumeImage}
          hashizumeDescriptions={hashizumeDescriptions}
          tsukaTDescriptions={tsukaTDescriptions}
          tsukaTImage={tsukaTImage}
        />
        <Detail
          title="Twinkle Live 〜 The sixth star 〜"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
        />

        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLScfLMH6lK_zTYl_2dS8NNTrxmo5W709f5Mmzjj6bGYRCNEHZw/viewform?usp=pp_url&entry.855639247=0%E6%9E%9A&entry.723210304=0%E6%9E%9A&entry.1799826848=0%E6%9E%9A&entry.1692645899=0%E6%9E%9A&entry.86153146=0%E6%9E%9A&entry.1693144841=0%E6%9E%9A"
          }
        /> */}
      </div>
    </>
  );
}

export default Home;
