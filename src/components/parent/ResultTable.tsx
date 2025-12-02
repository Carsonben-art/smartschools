'use client';

import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export type ResultRow = {
  subject: string;
  exam: string;
  marksPercent: number;
  grade: string;
};

type ResultsTableProps = {
  rows: ResultRow[];
};

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <Table
        size="small"
        sx={{
          minWidth: 600,
          '& th': { fontWeight: 600, fontSize: 13 },
          '& td': { fontSize: 13.5 },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Exam</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.subject}>
              <TableCell>
                <Typography variant="body2">{row.subject}</Typography>
              </TableCell>
              <TableCell>{row.exam}</TableCell>
              <TableCell>
                <Chip
                  label={`${row.marksPercent}%`}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    bgcolor: 'rgba(255, 215, 130, 0.5)',
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={row.grade}
                  size="small"
                  sx={{
                    borderRadius: 999,
                    bgcolor: 'rgba(224, 242, 241, 0.9)',
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
