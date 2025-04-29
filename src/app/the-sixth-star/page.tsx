import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "@/components/Notes";
import Performers from "../../components/Performers";
import Jumbotron6th from "@/components/Jumbotron6th";
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

  const date = (
    <>
      <p className="pb-1">2025年6月8日(日)</p>
      <p>18時開演 (開場は開演の30分前)</p>
    </>
  );

  const ticket = (
    <>
      <p>入場料 おひとり様 1,500円 (+ 別途お食事代)</p>
    </>
  );

  const place = (
    <>
      <p>味処 八右衛門</p>
      <p>茨城県土浦市荒川沖西2-5-4</p>
      <p>(JR常磐線 荒川沖駅より徒歩1分)</p>
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://maps.app.goo.gl/ofDgZ4keKpv4ePrA7"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <ul style={{ listStyle: "unset", paddingLeft: "22px" }}>
        <li>入場料1,500円は、受付の際に現金にてお支払いください。</li>
        <li>会場は、お履き物を脱いでいただく、掘りごたつの和室となっております。</li>
        <li>お席の数に限りがございます。お早めのご予約をお待ちしております。</li>
        <li>相席をしていただく可能性がございます。予めご了承のほど、お願いいたします。</li>
        <li>終演後も、お食事をお楽しみいただけます。よろしければ、橋爪と乾杯してやってください。</li>
      </ul>
    </>
  );

  return (
    <>
      {/* <Header /> */}
      <Jumbotron6th title="Twinkle Live" subtitle="~ The Sixth Star ~" />
      <div className="p-0 text-slate-700 font-body">
        <About />
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
            "https://docs.google.com/forms/d/e/1FAIpQLScWogc_40J-HJ7KhtinWN0s7DqNfU5vgf-TZp2-7WbJ2aPK9Q/viewform?usp=pp_url&entry.1692645899=0%E6%9E%9A&entry.86153146=0%E6%9E%9A&entry.1693144841=0%E6%9E%9A"
          }
        />
      </div>
    </>
  );
}

export default Home;
