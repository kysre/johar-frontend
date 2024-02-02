import {Container, Paper, Avatar, Title, Text, Group, TypographyStylesProvider} from "@mantine/core";
import React from "react";
import classes from './CommentHtml.module.css';


interface CommentProps {
    author: string;
    content: string;
    date: string;
    photo: string;
}
const Comment: React.FC<CommentProps> = ({author, content, date, photo}) => {
    return(
        <Paper withBorder radius="md" className={classes.comment}>
            <Group>
                <Avatar
                    src={photo}
                    alt={author}
                    radius="xl"
                />
                <div>
                    <Text fz="sm">{author}</Text>
                    <Text fz="xs" c="dimmed">
                        {date}
                    </Text>
                </div>
            </Group>
            <TypographyStylesProvider className={classes.body}>
                <div className={classes.content}>
                    {content}
                </div>
            </TypographyStylesProvider>
        </Paper>
    );
};

export default Comment;