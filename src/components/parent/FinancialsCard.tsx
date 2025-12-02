'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import { useRouter } from 'next/navigation';

type FinancialsCardProps = {
  totalFees: number;
  amountPaid: number;
  balanceDue: number;
  dueDate?: string; // e.g. "March 31, 2024"
};

function formatCurrency(amount: number) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

export default function FinancialsCard({
  totalFees,
  amountPaid,
  balanceDue,
  dueDate,
}: FinancialsCardProps) {
  const router = useRouter();

  const handleViewHistory = () => {
    // TODO: route to actual history page
    console.log('View payment history clicked');
    // router.push('/parent/payments'); // when that page exists
  };

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Title */}
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <PaymentsOutlinedIcon sx={{ color: 'primary.main' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Financials
          </Typography>
        </Stack>

        {/* Numbers */}
        <Grid container spacing={2} mb={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(241, 245, 249, 0.9)',
                p: 2,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: 'uppercase', fontWeight: 600 }}
              >
                Total Fees
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mt: 0.5 }}
              >
                {formatCurrency(totalFees)}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(209, 250, 229, 0.9)',
                p: 2,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: 'uppercase', fontWeight: 600 }}
              >
                Amount Paid
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mt: 0.5 }}
              >
                {formatCurrency(amountPaid)}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                borderRadius: 2,
                bgcolor: 'rgba(254, 226, 226, 0.9)',
                p: 2,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textTransform: 'uppercase', fontWeight: 600 }}
              >
                Balance Due
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mt: 0.5, color: '#b91c1c' }}
              >
                {formatCurrency(balanceDue)}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Reminder */}
        {balanceDue > 0 && (
          <Box
            sx={{
              borderRadius: 2,
              bgcolor: 'rgba(254, 243, 199, 0.9)',
              p: 2,
              mb: 3,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5,
            }}
          >
            <WarningAmberOutlinedIcon
              sx={{ color: '#f97316', mt: '2px', fontSize: 20 }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, mb: 0.3 }}
              >
                Payment Reminder
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Please clear the outstanding balance of{' '}
                <strong>{formatCurrency(balanceDue)}</strong>
                {dueDate ? ` by ${dueDate}.` : '.'}
              </Typography>
            </Box>
          </Box>
        )}

        <Button
          variant="outlined"
          onClick={handleViewHistory}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          View Payment History
        </Button>
      </CardContent>
    </Card>
  );
}
