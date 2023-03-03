import { Alert, Stack } from '@mui/material'
import Cover from './components/cover-block'

export default function Home() {
  return (
    <Stack sx={{ direction: 'column', width: "100%" }}>
      {/* <Cover /> */}
      <Alert variant="filled" severity="warning">
        Сайт находится в разработке
      </Alert>
    </Stack>
  )
}
