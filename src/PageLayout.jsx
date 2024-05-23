import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { useLocation, Outlet } from 'react-router-dom';
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const PageLayout = () => {
    const { pathname } = useLocation();

    return (
        <Flex>
            {pathname !== '/login' && pathname !== '/signup' ? (
                <Grid
                    w={'full'} h={'100vh'}
                    templateAreas={`"nav header"
                                    "nav main"`}
                    gridTemplateRows={'50px auto'}
                    gridTemplateColumns={'240px auto'}
                >
                    <GridItem area={'header'} className={'sticky'}>
                        <Header />
                    </GridItem>
                    <GridItem area={'nav'} className={'left-0 top-0 fixed'}>
                        <SideBar />
                    </GridItem>
                    <GridItem flex={1} area={'main'} className={'bg-background'}>
                        <Outlet />
                    </GridItem>
                </Grid>
            ) : null}
        </Flex>
    );
};

export default PageLayout;
