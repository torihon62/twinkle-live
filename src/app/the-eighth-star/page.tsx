import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "./Notes";
import Performers from "../../components/Performers";
import Jumbotron from "../../components/Jumbotron";
import { Metadata } from "next";
import hashizumeImage from "../../components/assets/_hashizume.png";
import tsukaTImage from "../../components/assets/tsuka-t2.jpeg";
import hitominImage from "../../components/assets/hitomin.jpg";

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The eighth star 〜",
  openGraph: {
    title: "Twinkle Live 〜 The eighth star 〜",
    siteName: "Twinkle Live 〜 The eighth star 〜",
    type: "website",
    description: "ライブチケットのお申し込みはこちらから",
    url: "https://twinkle-live.info/the-eighth-star",
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
    "株式会社プロダクション・テアトル・エコー所属",
    "茨城県土浦市出身",
    "",
    "好きなものは、クマとビール。",
    "最近は、コーヒーの飲み比べにはまっている。",
    "昨年のワンマンライブを皮切りに、地元を中心としたライブ活動に意欲をみせている。",
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

  const guest = {
    name: "ひとみ",
    play: "percussion",
    image: hitominImage,
    snsIcons: [],
    descriptions: [
      "ドラマー・パーカッショニスト",
      "千葉県柏市を拠点に都内や関東近郊にて、様々な音楽イベントやバンドでのサポート演奏を行う。",
      "ポップスやロックを中心に、幅広いジャンルに挑戦する。。",
      "",
      "「人に楽しんでもらうにはまず自分から」を信条に、自分、共にステージに立つ皆様、支えてくださるスタッフの皆様、そして一人でも多くのお客様と共に、プラスのエネルギーを創り出す演奏を目指して活動中。",
    ],
  };

  const date = (
    <>
      <p>2025年9月13日(土)</p>
      <p>18時 開場</p>
      <p>19時 開演</p>
    </>
  );

  const ticket = (
    <>
      <p>MC(ミュージックチャージ)</p>
      <p>・大人　2,000円</p>
      <p>・中・高校生　1,000円</p>
      <p className="pb-2">・小学生以下　無料</p>
      <p>※ MCとは別に、ご飲食のオーダーをお願いいたします。</p>
    </>
  );

  const place = (
    <>
      <p>
        <a
          className="blank-link"
          href="https://chura.bogeykenny.com/chura-tsukuba"
          target="_blank"
        >
          ちゅら食堂 つくば本店
        </a>
      </p>
      <p>茨城県つくば市栗原3839-3</p>
      <br />
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://maps.app.goo.gl/aPkVjLQkvjrCbRue7"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <ul style={{ listStyle: "unset", paddingLeft: "22px" }}>
        <li>
          お席の数に限りがございます。お早めのご予約をお待ちしております。
        </li>
        <li>
          相席をしていただく可能性がございます。予めご了承のほど、お願いいたします。
        </li>
      </ul>
    </>
  );

  const aboutDescriptions = [
    "茨城県⼟浦市出⾝の声優・ナレーター、橋⽖紋佳と",
    "茨城県を中⼼に多くのアーティストと共演するつかT、",
    "そして今回はパーカッションのひとみを迎え、",
    "ポップスからミュージカル、演歌まで、",
    "幅広いジャンルの⾳楽をお届けします。",
  ];
  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="Twinkle Live" subtitle="~ The Eighth Star ~" />
      <div className="p-0 text-slate-700 font-body">
        <About descriptions={aboutDescriptions} />
        <Performers
          hashizumeImage={hashizumeImage}
          hashizumeDescriptions={hashizumeDescriptions}
          tsukaTDescriptions={tsukaTDescriptions}
          tsukaTImage={tsukaTImage}
          guests={[guest]}
        />
        <Detail
          title="Twinkle Live 〜 The eighth star 〜"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
          guests={[{ name: "ひとみ", play: "percussion" }]}
        />
        {/* <Notes /> */}
        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSdVjOeeJYLfHIeXDd3rbOLtSPD9BVFTaqhnM_2DxeW74StdSQ/viewform?usp=pp_url&entry.1537262346=0%E4%BA%BA&entry.1224095586=0%E4%BA%BA&entry.1791064844=0%E4%BA%BA"
          }
        />
      </div>
    </>
  );
}

export default Home;
