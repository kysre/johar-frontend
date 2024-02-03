import {GetStaticProps} from "next";
import agency from "@/components/Post/Agency";
import axios from "axios";
import GlobalConfig from "@/app/app.config";
import NotFoundImage from "@/components/Error/NotFound";
import React from "react";
import RootLayout from "@/app/layout";
import {Container, Paper} from "@mantine/core";
import PostList from "@/components/Post/PostList";
import AgencyProfile from "@/components/Agency/AgencyProfile";

// @ts-ignore
export default async function AgencyPage({ params }) {
    const agencyName = params.agencyName;
    const response = await fetchAgencyData(agencyName);
    if (!response) {
        return <NotFoundImage/>; // Add proper loading state
    }
    else{
        const agency = response.agency;
        const news = response.news;
        return (
            <RootLayout>
                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <AgencyProfile agency={agency}></AgencyProfile>
                    </Paper>
                </Container>


                <Container>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <PostList posts={news} title={'All Posts'}>
                        </PostList>
                    </Paper>
                </Container>
            </RootLayout>
        );
    }

    return <p>{params.agencyName}</p>
}
const getStaticProps: GetStaticProps = async ({ params }) => {
    const agencyName = params?.agencyName as string;
    return { props: { agencyName } };
};

const fetchAgencyData = async (agencyName: string) => {
    try{
        const response = await axios.get(GlobalConfig.AgencyDetailApi + agencyName);
        const agencyDetail = await response.data;
        if (agencyDetail.status =='ok'){
            const agency = await agencyDetail.agency;
            const news = await agencyDetail.news;
            if (agency.image == null){
                agency.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
            }
            else{
                agency.image = 'http://localhost:8000/' + agency.image;
            }
            for(const eachNews of news){
                if (eachNews.image == null){
                    eachNews.image = 'https://i.pinimg.com/236x/0a/62/39/0a6239f18a9e0381dd04efe3661d3da2.jpg';
                }
                else{
                    eachNews.image = 'http://localhost:8000/' + eachNews.image;
                }
            }
            return {agency, news};
        }
        return false;
    } catch (error){
        console.error('Error during API call', error)
    }
};