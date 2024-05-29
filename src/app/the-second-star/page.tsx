import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "./Notes";
import Performers from "../../components/Performers";
import Jumbotron from "../../components/Jumbotron";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The second star 〜",
};

function Home() {
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
      <Jumbotron title="Twinkle Live" subtitle="~ The Second Star ~" />
      <div className="p-0 text-slate-700 font-body">
        <About />
        <Performers />
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
            "https://docs.google.com/forms/d/e/1FAIpQLSe4aVnRXtctivQtj-BPf0hzEFVR2514IIyoDdyHBh0Gqqxjvg/viewform?usp=pp_url&entry.1854919750=0%E6%9E%9A&entry.619944004=0%E6%9E%9A&entry.610874221=0%E6%9E%9A"
          }
        />
      </div>
    </>
  );
}

export default Home;
