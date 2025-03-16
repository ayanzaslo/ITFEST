import { useRouter } from "next/router";

export default function Home() {

    const ap = useRouter().query.ap;
    console.log(ap);

    return (
        <p>
            {ap}
        </p>);
}
