import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";

type HomeProps = {
    changeTheme: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Home({ changeTheme }: HomeProps) {
    return (
        <Stack
            component={Box}
            height={"100vh"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Box
            
            >
                <Button
                    value="dark"
                    onClick={changeTheme}
                >Dark</Button>
                <Button
                    value="light"
                    onClick={changeTheme}
                >Light</Button>
            </Box>

            <Box
                width={{ xs: "90%", sm: "85%", md: "75%" }}
                component={Paper}
            >
                <Typography>teste</Typography>

            </Box>
        </Stack>
    )
}
export default Home;