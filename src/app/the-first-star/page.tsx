import About from "../../components/About";
import Detail from "../../components/Detail";
import Form from "../../components/Form";
// import Header from "./Header";
// import Notes from "./Notes";
import Performers from "../../components/Performers";
import Jumbotron from "../../components/Jumbotron";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twinkle Live 〜 The first star 〜",
};

function Home() {
  const date = (
    <>
      <p>2024年4月7日(日)</p>
      <p>&lt;昼の部&gt;13時 開演</p>
      <p>&lt;夜の部&gt;17時 開演</p>
      <p>※開場は、開演の30分前</p>
    </>
  );

  const ticket = (
    <>
      <p>全席自由席</p>
      <p>3,000円(1ドリンク付)</p>
      <p>
        ※小学生以下は無料(ドリンクがつきませんので、お飲み物をご持参ください)
      </p>
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
  return (
    <>
      {/* <Header /> */}
      <Jumbotron title="Twinkle Live" subtitle="〜 The First Star 〜" />
      <div className="p-0 text-slate-700 font-body">
        <About />
        <Performers />
        <Detail
          title="Twinkle Live 〜 The first star 〜"
          date={date}
          ticket={ticket}
          place={place}
          notes={notes}
        />
        {/* <Notes /> */}
        <Form
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeqZNQpsDRN548_1CBgtVUhsvVgZcNplKbbBP32ROjz-7Wsaw/viewform?usp=pp_url&entry.970489809=0%E6%9E%9A&entry.60362704=0%E6%9E%9A&entry.44785586=0%E6%9E%9A&entry.1854919750=0%E6%9E%9A&entry.619944004=0%E6%9E%9A&entry.610874221=0%E6%9E%9A"
          }
        />
      </div>
    </>
  );
}

export default Home;
