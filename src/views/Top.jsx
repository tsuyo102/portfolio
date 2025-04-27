import { Box, Divider, Stack, Typography } from "@mui/material";
import Title from "../components/Typography/Title";
import { IconImage } from "../components/Box/ImageBox";

import { profile } from "../data/profile";

const Top = () => {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box pt={16} pl={6} pr={6}>
      <Stack spacing={8}>
        <Stack spacing={2}>
          <Title name={"Profile"} />
          <Stack spacing={2} direction="row" sx={rowStyle}>
            <IconImage alt={"プロフィールアイコン"} size={120} src={icon} />
            <Typography variant="h6">{profile.name}</Typography>
          </Stack>
          <Divider sx={{ background: "white", borderWidth: 0.5 }} />
          <Box p={2}>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Typography variant="body2">{profile.job}</Typography>
                <Typography variant="body2">{profile.tool}</Typography>
              </Stack>
              <Stack spacing={3}>
                <Typography variant="body2">{profile.content}</Typography>
                <Typography variant="body2">{profile.content2}</Typography>
                <Typography variant="body2">{profile.content3}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Top;
