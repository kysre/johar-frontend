import React from 'react';
import classes from './AgencyProfile.module.css'
import {Container} from "@mantine/core";

interface AgencyProfileInterface {
    agency: {
        name: string;
        description: string;
        image: string;
    }

}

const AgencyProfile: React.FC<AgencyProfileInterface>  = ({agency}) => {
    return (
        <Container>
            <div className={classes.blogWrap}>
                <header>
                    <h1>Agency Profile</h1>
                </header>
                <img src={agency.image} alt='cover'/>

                <div className={classes.container}>
                    <div className={classes.info}>
                        <p>{agency.name}</p>
                    </div>
                </div>
                <p className={classes.blogDesc}>About us: <br/> {agency.description}</p>
            </div>
        </Container>
    );
};

export default AgencyProfile;