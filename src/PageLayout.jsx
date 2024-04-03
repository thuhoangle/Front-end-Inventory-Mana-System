import { Flex, Grid, GridItem } from '@chakra-ui/react'
import {useLocation} from "react-router-dom";
import SideBar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";


const PageLayout = ({children}) => {
    const {pathname} = useLocation()

    return (

        <Flex>
            {pathname !== '/auth' ? (
                <Grid
                    w={'full'} h={'100vh'}
                    templateAreas={`"nav header"
                  "nav main"`}
                    gridTemplateRows={'50px auto '}
                    gridTemplateColumns={'220px auto'}
                >
                    <GridItem  area={'header'} className={' sticky'}>
                        <Header/>
                    </GridItem>
                    <GridItem area={'nav'} className={'left-0 top-0'} >
                        <SideBar/>
                    </GridItem>
                    <GridItem  flex={1} area={'main'} className={'bg-background'}>
                        {children}
                    </GridItem>

                </Grid>
            ) : null}
        </Flex>

    )
}
export default PageLayout
