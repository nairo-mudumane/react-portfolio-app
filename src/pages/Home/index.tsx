import { StyledHome } from "./styles";
import bannerSrc from "../../assets/images/home-2.jpg";

export function Home() {
    return (
        <StyledHome>
            <div className="banner">
                <img src={bannerSrc} alt="" />
            </div>
        </StyledHome>
    );
}
