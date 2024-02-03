'use client'


import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core';
import classes from './Agency.module.css';

interface AgencyProps {
    agency: {
    name: string;
    image: string;
    description: string;
    }
}

const Agency: React.FC<AgencyProps> = ({ agency }) => {
    return (

    <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            //todo fix address
            href="https://mantine.dev/"
            target="_blank"
        >
            <div
                className={classes.image}
                style={{
                    backgroundImage:
                        'url(' + agency.image +')',
                }}
            />
            <div className={classes.overlay} />

            <div className={classes.content}>
                <div>
                    <Text size="lg" className={classes.title} fw={500}>
                        {agency.name}
                    </Text>

                    <Group justify="space-between" gap="xs">
                        <Text size="sm" className={classes.author}>
                            {agency.description}
                        </Text>
                    </Group>
                </div>
            </div>
        </Card>
    );
};

export default Agency;