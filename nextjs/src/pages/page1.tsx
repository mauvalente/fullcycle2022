import { GetServerSideProps, NextPage } from "next";

type Page1PageProps = {
    name:string
};

const page1Page: NextPage<Page1PageProps> = (props) => {
    return (
        <h1>
            Page 1 - {props.name}
        </h1>
    );
};


export const getServerSideProps: GetServerSideProps = async(context) => {
    return {
        props: {
            name: 'Full Cycle !!'
        }
    }
}

export default page1Page;