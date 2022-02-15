import { NextPage } from "next";
import useSWR from "swr";
import http from "../utils/http";
import { Tweet as TweetModel } from "../utils/models";
import { Title } from "./components/Title";
import { Tweet } from "./components/Tweet";

const fetcher = (url: string) => http.get(url).then((res) => res.data);

const TweetsPage: NextPage = () => {
    const { data: tweets } = useSWR<TweetModel[]>("tweets", fetcher);

    return (
        <div>
            <Title>Tweets</Title>
            {tweets?.map((t, key) => (
                <Tweet key={key} tweet={t} />
            ))}
        </div>
    );
};

export default TweetsPage;