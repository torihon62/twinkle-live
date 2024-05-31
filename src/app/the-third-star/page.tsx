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

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The third star 〜",
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
      <p>2024年8月4日(日)</p>
      <p>15時30分 開場</p>
      <p>16時30分 開演</p>
    </>
  );

  const ticket = (
    <>
      <p>大人(高校生以上)　4,000円(デザート・1ドリンク付き）</p>
      <p>小中学生　2,000円(デザート・1ドリンク付き)</p>
      <p>未就学児　無料(デザート・ドリンク無し)</p>
    </>
  );

  const place = (
    <>
      <p>ぼんたな-atelier café-</p>
      <p>東京都練馬区桜台4丁目16-12</p>
      <br />
      <p>西武池袋線　桜台駅　徒歩5分</p>
      <p>西武池袋線/大江戸線/有楽町線・副都心線直通　練馬駅　徒歩8分</p>
      <p>
        <a
          target="_blank"
          style={{ color: "#1a0dab" }}
          href="https://maps.app.goo.gl/Y44n8gzTrwyS75RQ9"
        >
          Google Mapを開く
        </a>
      </p>
    </>
  );

  const notes = (
    <>
      <p>・お支払いは当日、現金にてお願いいたします。</p>
      <p>・会場入口にてお履き物を脱いでいただきます。</p>
      <p>・未就学児のお子さまは、お飲みものをご持参ください。</p>
      <p>
        ・ご希望の方は、1ドリンク+1デザート→2ドリンクに変更が可能です。お申し込みの際、備考欄にご記入ください。
      </p>
      <p>・駐車場はございません。近隣の駐車場をご利用ください。</p>
    </>
  );
  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="Twinkle Live" subtitle="~ The Third Star ~" />
      <div className="p-0 text-slate-700 font-body">
        <About />
        <Performers
          hashizumeImage={hashizumeImage}
          hashizumeDescriptions={hashizumeDescriptions}
          tsukaTDescriptions={tsukaTDescriptions}
          tsukaTImage={tsukaTImage}
        />
        <Detail
          title="Twinkle Live 〜 The third star 〜"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
        />
        {/* <Notes /> */}
        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSe4aVnRXtctivQtj-BPf0hzEFVR2514IIyoDdyHBh0Gqqxjvg/viewform?usp=pp_url&entry.1854919750=0%E6%9E%9A&entry.619944004=0%E6%9E%9A&entry.610874221=0%E6%9E%9A"
          }
        />
      </div>
    </>
  );
}

export default Home;
