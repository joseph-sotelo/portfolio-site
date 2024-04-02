'use client'
import { GridRow, Grid } from 'semantic-ui-react'


// this can be a page used to test and play swiper
export default function Page() {
    return(
        <Grid className='w-3/5 m-auto'>
            <GridRow>
            <div className='w-200 h-200'>
                <h1>
                    Other Stuff I Do
                </h1>
            </div>
            </GridRow>
            <GridRow>
                <h1>
                    Test test
                </h1>
            </GridRow>
            <GridRow>
                <h1>
                    Test test
                </h1>
            </GridRow>
        </Grid>
    )
}