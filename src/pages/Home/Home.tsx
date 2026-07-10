import { useNavigate } from "react-router-dom";
import style from "./Home.module.scss";

function Home() {
  const navigate = useNavigate();

  return (
    <ul className={style["list-box"]}>
      <li
        className={style["list-item"]}
        onClick={() => navigate("/trade-register")}
      >
        거래등록 TEST
      </li>
      <li
        className={style["list-item"]}
        onClick={() => navigate("/deal-register")}
      >
        거래등록 TEST 2
      </li>
    </ul>
  );
}

export default Home;
