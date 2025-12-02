'use client';

import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@mui/material';

export type ActivityItem = {
  id: string;
  title: string;
  timeAgo: string;
  icon: React.ReactNode;
  iconBg: string;
};

type ActivityListProps = {
  items: ActivityItem[];
};

export default function ActivityList({ items }: ActivityListProps) {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        mt: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Recent Activity
        </Typography>

        <List disablePadding>
          {items.map((item, index) => (
            <Box key={item.id}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 0.3, display: 'block' }}
                    >
                      {item.timeAgo}
                    </Typography>
                  }
                />
              </ListItem>

              {index < items.length - 1 && (
                <Box
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    ml: 7,
                    my: 1.5,
                  }}
                />
              )}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
