import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material'; 


export const PageNotFound = () => {
    return (
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Explore Our E-commerce Website
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Discover a world of incredible products and unbeatable deals!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Browse through our extensive collection and find everything you need, all in one place.
                </Typography>
            </Box>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2 }}
            >
                Start Shopping
            </Button>
        </Container>
    );
};