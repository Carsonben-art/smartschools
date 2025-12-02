import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
} from '@mui/material';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar */}
      <Box component="header" sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            {/* Logo */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolOutlinedIcon fontSize="small" />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, letterSpacing: 0.1 }}
              >
                Bureti SmartSchools
              </Typography>
            </Stack>

            {/* Nav links */}
            <Stack direction="row" spacing={3}>
              <Link href="#about" passHref legacyBehavior>
                <MuiLink
                  underline="none"
                  color="text.primary"
                  sx={{ fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
                >
                  About Us
                </MuiLink>
              </Link>
              <Link href="#contact" passHref legacyBehavior>
                <MuiLink
                  underline="none"
                  color="text.primary"
                  sx={{ fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
                >
                  Contact
                </MuiLink>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="lg">
          {/* Hero section */}
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 6, md: 10 },
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.3rem', sm: '2.8rem', md: '3.2rem' },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Smart. Simple.{' '}
              <Box component="span" color="primary.main">
                School
                <br />
                Management.
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                maxWidth: 520,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Streamline your school operations with our easy-to-use management
              system. Built for schools in Kenya, designed for simplicity.
            </Typography>

           <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={2}
  justifyContent="center"
  alignItems={{ xs: 'stretch', sm: 'center' }}
>
  {/* School Login */}
  <Link href="/school/login" passHref legacyBehavior>
    <Button
      variant="contained"
      size="large"
      sx={{
        px: 5,
        py: 1.4,
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
      }}
    >
      School Login
    </Button>
  </Link>

  {/* Parent Access */}
  <Link href="/parent/access" passHref legacyBehavior>
    <Button
      variant="outlined"
      size="large"
      sx={{
        px: 5,
        py: 1.4,
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      }}
    >
      Parent Access
    </Button>
  </Link>
</Stack>

          </Box>

          {/* Feature cards */}
          <Box sx={{ pb: { xs: 8, md: 10 } }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    py: 3,
                    px: 2.5,
                    textAlign: 'center',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 215, 130, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <MenuBookOutlinedIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      Manage Classes
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 240, mx: 'auto' }}
                    >
                      Organize classes, subjects, and schedules with ease.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    py: 3,
                    px: 2.5,
                    textAlign: 'center',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 215, 130, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <GroupOutlinedIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      Track Students
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 240, mx: 'auto' }}
                    >
                      Keep comprehensive records of all your students.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    py: 3,
                    px: 2.5,
                    textAlign: 'center',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255, 215, 130, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      <EmojiEventsOutlinedIcon sx={{ color: 'primary.main' }} />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      Monitor Progress
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ maxWidth: 260, mx: 'auto' }}
                    >
                      Track performance and generate reports instantly.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: 1,
          borderColor: 'divider',
          py: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ fontSize: 14 }}
          >
            New to Bureti SmartSchools?{' '}
            <Link href="/school/signup" passHref legacyBehavior>
              <MuiLink
                underline="none"
                sx={{ color: 'primary.main', fontWeight: 600, cursor: 'pointer' }}
              >
                Create an account
              </MuiLink>
            </Link>
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            align="center"
            sx={{ display: 'block', mt: 1.5 }}
          >
            © 2024 Bureti SmartSchools. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
