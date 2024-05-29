"use client";

/* eslint-disable react/jsx-key */
import PortfolioBox from "./PortfolioBox";
import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import HomeIcon from "./icons/HomeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
import hashizumeImage from "./assets/hashizume.png";
import tsukaTImage from "./assets/tsuka-t.jpg";
import Mic from "./icons/Mic";
import Piano from "./icons/Piano";

function Performers() {
  const hashizumeSnsIcons = [
    <HomeIcon url="https://ayakas-voice-delivery.com/" />,
    <XIcon url="https://twitter.com/kuma_ga_suki" />,
    <InstagramIcon url="https://www.instagram.com/ayaka_hashizume/?hl=ja" />,
  ];
  const tsukaTSnsIcons = [
    <HomeIcon url="https://tsuka-t.com/" />,
    <XIcon url="https://twitter.com/TurubaiT1" />,
  ];

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

  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#f2ebe6">
      <SectionHead topLeftIcon={<Mic />} topRightIcon={<Piano />}>
        演奏する人
      </SectionHead>
      <PortfolioBox
        play={"vocal"}
        name={"橋爪紋佳"}
        imageSource={hashizumeImage.src}
        snsIcons={hashizumeSnsIcons}
        descriptions={hashizumeDescriptions}
      />
      <div className="mt-20" />
      <PortfolioBox
        play={"piano"}
        name={"塚本英之(つかT)"}
        imageSource={tsukaTImage.src}
        snsIcons={tsukaTSnsIcons}
        descriptions={tsukaTDescriptions}
      />
    </SectionContainer>
  );
}

export default Performers;
