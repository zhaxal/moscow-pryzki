import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Cover = () => {
  return (
    <Box sx={{
      backgroundImage: "url(/images/bg/cover.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "900px",
      width: "100%",
    }}>
      <Container disableGutters>
        <Stack direction={"column"} sx={{ mt: "50px", spacing: "175px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={"16px"} alignItems={"center"}>
              <Box component={"img"} src={"images/logos/departmentLogo.svg"} sx={{ maxWidth: "80px" }} alt={"departmentLogo"} />
              <Box component={"img"} src={"images/logos/mossportLogo.svg"} sx={{ maxWidth: "70px" }} alt={"mossportLogo"} />
              <Box component={"img"} src={"images/logos/100yearLogo.svg"} sx={{ maxWidth: "246px", maxHeight: "68px" }} alt={"100yearLogo"} />
            </Stack>
            <Typography sx={{ textAlign: "right", color: "white", whiteSpace: "pre-line", fontFamily: "Exo" }}>
              {`Дворец спорта
              Олимпийского комплекса
              «Лужники» `}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Cover