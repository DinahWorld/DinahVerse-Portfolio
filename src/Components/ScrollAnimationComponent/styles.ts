import {makeStyles} from 'tss-react/mui';

export default makeStyles()((theme) => ({
    animatedDiv: {
        width: 0,
        height: 50,
        backgroundColor: 'blue',
        transition: 'width 0.5s ease',
    }
}))